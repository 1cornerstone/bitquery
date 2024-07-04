export class ValidationError extends Error {
  constructor(message: string = 'Validatior error') {
    super(message);
    this.name = 'ValidationError';
  }
}
