/// <reference types="xrm" />
export declare class EntityFormOptionsMock implements Xrm.Navigation.EntityFormOptions {
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
    constructor(components: IEntityFormOptionsComponents);
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
