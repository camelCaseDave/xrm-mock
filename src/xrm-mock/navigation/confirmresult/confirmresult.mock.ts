export class ConfirmResultMock implements Xrm.Navigation.ConfirmResult {
  public confirmed: boolean;

  constructor(confirmed: boolean) {
    this.confirmed = confirmed;
  }
}
