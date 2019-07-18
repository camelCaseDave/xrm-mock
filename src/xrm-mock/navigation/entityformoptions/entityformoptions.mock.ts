export class EntityFormOptionsMock implements Xrm.Navigation.EntityFormOptions {
  public cmdbar?: boolean;
  public createFromEntity?: Xrm.LookupValue;
  public entityId?: string;
  public entityName?: string;
  public formId?: string;
  public height?: number;
  public isCrossEntityNavigate?: boolean;
  public isOfflineSyncError?: boolean;
  public navBar?: Xrm.Url.NavBarDisplay;
  public openInNewWindow?: boolean;
  public windowPosition?: XrmEnum.WindowPositions;
  public processId?: string;
  public processInstanceId?: string;
  public relationship?: Xrm.Navigation.Relationship;
  public selectedStageId?: string;
  public useQuickCreateForm?: boolean;
  public width?: number;

  constructor(components: IEntityFormOptionsComponents) {
    this.cmdbar = components.cmdbar;
    this.createFromEntity = components.createFromEntity;
    this.entityId = components.entityId;
    this.entityName = components.entityName;
    this.formId = components.formId;
    this.height = components.height;
    this.isCrossEntityNavigate = components.isCrossEntityNavigate;
    this.isOfflineSyncError = components.isOfflineSyncError;
    this.navBar = components.navBar;
    this.openInNewWindow = components.openInNewWindow;
    this.windowPosition = components.windowPosition;
    this.processId = components.processId;
    this.processInstanceId = components.processInstanceId;
    this.relationship = components.relationship;
    this.selectedStageId = components.selectedStageId;
    this.useQuickCreateForm = components.useQuickCreateForm;
    this.width = components.width;
  }
}

export interface IEntityFormOptionsComponents {
  cmdbar?: boolean;
  createFromEntity?: Xrm.LookupValue;
  entityId?: string;
  entityName?: string;
  formId?: string;
  height?: number;
  isCrossEntityNavigate?: boolean;
  isOfflineSyncError?: boolean;
  navBar?: Xrm.Url.NavBarDisplay;
  openInNewWindow?: boolean;
  windowPosition?: XrmEnum.WindowPositions;
  processId?: string;
  processInstanceId?: string;
  relationship?: Xrm.Navigation.Relationship;
  selectedStageId?: string;
  useQuickCreateForm?: boolean;
  width?: number;
}
