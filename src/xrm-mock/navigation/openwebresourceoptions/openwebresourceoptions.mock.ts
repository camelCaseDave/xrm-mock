import { DialogSizeOptionsMock } from "../dialogsizeoptions/dialogsizeoptions.mock";

export class OpenWebresourceOptionsMock extends DialogSizeOptionsMock implements Xrm.Navigation.OpenWebresourceOptions {
  public openInNewWindow: boolean;

  constructor(openInNewWindow: boolean, height: number, width: number) {
    super(height, width);
    this.openInNewWindow = openInNewWindow;
  }
}
