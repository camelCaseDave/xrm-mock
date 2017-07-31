import { ProcessManagerMock } from './data/processmanager/processmanager.mock';
import { PageMock } from './page/page.mock';
import { UtilityMock } from './utility/utility.mock';

export class XrmStaticMock {
    Page: PageMock;
    Utility: UtilityMock;
    Mobile: Xrm.Mobile;
    Panel: Xrm.Panel;

    constructor(components: XrmStaticComponents) {
        this.Page = components.page;
        this.Utility = components.utility;
        this.Mobile = components.mobile;
        this.Panel = components.panel;
    }
}

export interface XrmStaticComponents {
    page?: PageMock;
    utility?: UtilityMock;
    mobile?: Xrm.Mobile;
    panel?: Xrm.Panel;
}
