export class LabelMock implements Xrm.Metadata.Label {
  public LocalizedLabels: Xrm.Metadata.LocalizedLabel[];
  public UserLocalizedLabel: Xrm.Metadata.LocalizedLabel;

  constructor(localLabels: Xrm.Metadata.LocalizedLabel[], userLocalLabels: Xrm.Metadata.LocalizedLabel) {
    this.LocalizedLabels = localLabels;
    this.UserLocalizedLabel = userLocalLabels;
  }
}
