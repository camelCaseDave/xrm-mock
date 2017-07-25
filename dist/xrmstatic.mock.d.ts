/// <reference types="xrm" />
import { PageMock } from './page/page.mock';
import { UtilityMock } from './utility/utility.mock';
export declare class XrmStaticMock {
    Page: PageMock;
    Utility: UtilityMock;
    Mobile: Xrm.Mobile;
    Panel: Xrm.Panel;
    constructor(page: PageMock, utility?: UtilityMock, mobile?: Xrm.Mobile, panel?: Xrm.Panel);
}
