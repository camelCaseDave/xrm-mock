export class ErrorResponseMock implements Xrm.ErrorResponse {
  public errorCode: number;
  public message: string;

  constructor(errorCode: number, message: string) {
    this.errorCode = errorCode;
    this.message = message;
  }
}
