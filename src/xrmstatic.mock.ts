import { ProcessManagerMock } from './data/processmanager/processmanager.mock';
import { PageMock } from './page/page.mock';
import { UtilityMock } from './utility/utility.mock';

export class XrmStaticMock {
    Page: PageMock;
    Utility: UtilityMock;
    Mobile: Xrm.Mobile;
    Panel: Xrm.Panel;

    constructor(page: PageMock, utility?: UtilityMock, mobile?: Xrm.Mobile, panel?: Xrm.Panel) {
        this.Page = page;
        this.Utility = utility;
        this.Mobile = mobile;
        this.Panel = panel;
    }
}
 