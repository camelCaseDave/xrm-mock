export class LocalizedLabelMock implements Xrm.Metadata.LocalizedLabel {
  public Label: string;
  public LanguageCode: number;

  constructor(label: string, languageCode: number) {
    this.Label = label;
    this.LanguageCode = languageCode;
  }
}
