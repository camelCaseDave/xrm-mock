import { MobileMock } from "../xrm-mock/mobile/mobile.mock";
import { MobileOfflineMock } from "../xrm-mock/mobileoffline/mobileoffline.mock";

export default class Mobile {
    public static createMobile(): MobileMock {
        const mobile = new MobileMock(
            new MobileOfflineMock(),
        );

        return mobile;
    }
}
