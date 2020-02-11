import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import InputField from "../InputField/InputField";
import Spinner from "../Spinner/Spinner";
import { generateInputErrorsObject } from "../../utils/generateInputErrorsObject";
import FormInputValidator from "../../utils/FormInputValidator";
import AuthViewLayout from "../AuthViewLayout/AuthViewLayout";

export default function Login({ loginRequestStart, requestingLogin }) {
  const [inputErrors, setInputErrors] = useState(
    generateInputErrorsObject("userName", "password")
  );

  const handleSubmit = e => {
    e.preventDefault();
    const { userName, password } = e.target;

    const { isFormValid, inputErrors } = new FormInputValidator()
      .required(userName.value, "userName")
      .required(password.value, "password")
      .verify();

    if (isFormValid) {
      loginRequestStart(userName.value, password.value);
    } else {
      setInputErrors(inputErrors);
    }
  };

  return (
    <AuthViewLayout>
      {requestingLogin ? (
        <Spinner />
      ) : (
        <>
          <h1 className="header-1">Zaloguj się</h1>
          <form className="login__form" noValidate onSubmit={handleSubmit}>
            <div>
              <InputField
                error={inputErrors.userName.error}
                helperText={inputErrors.userName.helperText.join(" ")}
                required
                type="text"
                id="userName"
                label="Nazwa użytkownika"
              />
            </div>
            <div>
              <InputField
                error={inputErrors.password.error}
                helperText={inputErrors.password.helperText.join(" ")}
                required
                type="password"
                id="password"
                label="Hasło"
              />
            </div>
            <Button type="submit" variant="contained" color="primary">
              Zaloguj
            </Button>
          </form>
          <p className="login__to-register">
            Nie masz konta? <Link to="/register">Utwórz konto</Link>
          </p>
        </>
      )}
    </AuthViewLayout>
  );
}
