/// <reference types="xrm" />
export declare class ReportOpenParametersMock implements Xrm.Url.ReportOpenParameters {
    action: Xrm.Url.ReportAction;
    helpID?: string;
    id: string;
    constructor(action: Xrm.Url.ReportAction, id: string, helpID?: string);
}
