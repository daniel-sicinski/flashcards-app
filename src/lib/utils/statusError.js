class StatusError extends Error {
  constructor(message, errorStatus) {
    super(message);
    this.status = errorStatus;
  }
}

module.exports = StatusError;
