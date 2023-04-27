export class ErrorHandler {
  statusCode: number
  errorData: any

  constructor(statusCode: number, errorData: any) {
    this.statusCode = statusCode || 400
    this.errorData = errorData || 'An problem occurred in your request.'
  }
}
