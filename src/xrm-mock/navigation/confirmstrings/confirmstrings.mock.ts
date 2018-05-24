export class ConfirmStringsMock implements Xrm.Navigation.ConfirmStrings {
  public cancelButtonLabel?: string;
  public confirmButtonLabel?: string;
  public subtitle?: string;
  public title?: string;
  public text: string;

  constructor(components: IConfirmStringsComponents) {
    this.cancelButtonLabel = components.cancelButtonLabel;
    this.confirmButtonLabel = components.confirmButtonLabel;
    this.subtitle = components.subtitle;
    this.title = components.title;
    this.text = components.text;
  }
}

export interface IConfirmStringsComponents {
  cancelButtonLabel?: string;
  confirmButtonLabel?: string;
  subtitle?: string;
  title?: string;
  text: string;
}
