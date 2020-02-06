import React, { useState } from "react";
import Button from "../Button/Button";
import InputField from "../InputField/InputField";
import Spinner from "../Spinner/Spinner";
import Modal from "../Modal/Modal";
import { generateInputErrorsObject } from "../../utils/generateInputErrorsObject";
import FormInputValidator from "../../utils/FormInputValidator";

export default function Register({
  registerUserStart,
  dismissAuthError,
  requestingRegistration,
  registrationError
}) {
  const [inputErrors, setInputErrors] = useState(
    generateInputErrorsObject("userName", "password", "passwordConfirm")
  );

  const handleSubmit = e => {
    e.preventDefault();
    const { userName, password, passwordConfirm } = e.target;

    const { isFormValid, inputErrors } = new FormInputValidator()
      .required(userName.value, "userName")
      .required(password.value, "password")
      .required(passwordConfirm.value, "passwordConfirm")
      .passwordsMatch(password.value, passwordConfirm.value, "passwordConfirm")
      .verify();

    if (isFormValid) {
      registerUserStart(userName.value, password.value);
    } else {
      setInputErrors(inputErrors);
    }
  };

  return (
    <div className="register">
      <div className="register__card">
        {requestingRegistration ? (
          <Spinner />
        ) : (
          <>
            <h1 className="header-1">Utwórz konto</h1>
            <form className="register__form" noValidate onSubmit={handleSubmit}>
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
              <div>
                <InputField
                  error={inputErrors.passwordConfirm.error}
                  helperText={inputErrors.passwordConfirm.helperText.join(" ")}
                  required
                  type="password"
                  id="passwordConfirm"
                  label="Powtórz hasło"
                />
              </div>
              <Button type="submit" variant="contained" color="primary">
                Utwórz
              </Button>
            </form>
            <p className="register__to-login">
              Posiadasz już konto? <a href="#">Zaloguj się</a>
            </p>
          </>
        )}
      </div>
      <Modal showModal={registrationError} closeModal={dismissAuthError}>
        <p className="register__error-message">{registrationError}</p>
        <Button variant="contained" color="primary" onClick={dismissAuthError}>
          Ok
        </Button>
      </Modal>
    </div>
  );
}
