export class ResourceAlreadyExistError extends Error {
  constructor(message: string = 'Resource already exist') {
    super(message);
    this.name = 'ResourcealreadyExistEror';
  }
}
