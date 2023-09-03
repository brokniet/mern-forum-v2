export class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
    // alert(message);
  }
}

export class ConnectionError extends Error {
  constructor(message) {
    super(message);
    this.name = "ConnectionError";
  }
}
