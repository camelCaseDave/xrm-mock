export class OptionMetadataMock implements Xrm.Metadata.OptionMetadata {
  public Value: number;
  public Color: string;
  public IsManaged: boolean;
  public ExternalValue: any;
  public MetadataId: string;
  public HasChanged: boolean;
  public State: number;
  public TransitionData: any;
  public Label: Xrm.Metadata.Label;
  public Description: Xrm.Metadata.Label;

  constructor(components: IOptionMetadataComponents) {
    this.Value = components.Value;
    this.Color = components.Color;
    this.IsManaged = components.IsManaged;
    this.ExternalValue = components.ExternalValue;
    this.MetadataId = components.MetadataId;
    this.HasChanged = components.HasChanged;
    this.State = components.State;
    this.TransitionData = components.TransitionData;
    this.Label = components.Label;
    this.Description = components.Description;
  }
}

export interface IOptionMetadataComponents {
  Value?: number;
  Color?: string;
  IsManaged?: boolean;
  ExternalValue?: any;
  MetadataId?: string;
  HasChanged?: boolean;
  State?: number;
  TransitionData?: any;
  Label?: Xrm.Metadata.Label;
  Description?: Xrm.Metadata.Label;
}
