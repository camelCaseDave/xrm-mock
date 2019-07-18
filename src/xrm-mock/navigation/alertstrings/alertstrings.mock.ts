export class AlertStringsMock implements Xrm.Navigation.AlertStrings {
  public confirmButtonLabel?: string;
  public text: string;

  constructor(text: string, confirmButtonLabel?: string) {
    this.text = text;
    this.confirmButtonLabel = confirmButtonLabel;
  }
}
