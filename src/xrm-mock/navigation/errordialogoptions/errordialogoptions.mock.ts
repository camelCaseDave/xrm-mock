export class ErrorDialogOptionsMock implements Xrm.Navigation.ErrorDialogOptions {
  public details?: string;
  public errorCode?: number;
  public message?: string;

  constructor(details?: string, errorCode?: number, message?: string) {
    this.details = details;
    this.errorCode = errorCode;
    this.message = message;
  }
}
