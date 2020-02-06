export default class FormInputValidator {
  constructor() {
    this.isFormValid = true;
    this.inputErrors = {};
  }

  addInput(inputName) {
    if (!this.inputErrors[inputName]) {
      this.inputErrors[inputName] = {
        error: false,
        helperText: []
      };
    }
  }

  required(inputValue, inputName) {
    this.addInput(inputName);

    if (inputValue.trim().length === 0) {
      this.inputErrors[inputName].error = true;
      this.inputErrors[inputName].helperText.push("To pole jest wymagane.");
      this.isFormValid = false;
    }
    return this;
  }

  passwordsMatch(
    passwordValue,
    passwordConfirmValue,
    passwordConfirmInputName
  ) {
    this.addInput(passwordConfirmInputName);

    if (passwordValue !== passwordConfirmValue) {
      this.inputErrors[passwordConfirmInputName].error = true;
      this.inputErrors[passwordConfirmInputName].helperText.push(
        "Hasła nie są takie same."
      );
      this.isFormValid = false;
    }
    return this;
  }

  verify() {
    return {
      isFormValid: this.isFormValid,
      inputErrors: this.inputErrors
    };
  }
}
