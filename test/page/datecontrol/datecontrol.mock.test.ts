import { DateAttributeMock } from "../../../src/xrm-mock/attributes/dateattribute/dateattribute.mock";
import { DateControlMock } from "../../../src/xrm-mock/controls/datecontrol/datecontrol.mock";

describe("Xrm.Controls.DateControl Mock", () => {
    let control: DateControlMock;
    beforeEach(() => {
        const att = new DateAttributeMock({name: "test"});
        control = new DateControlMock({
            attribute: att,
            name: att.name,
        });
    });

    it("should get show time", () => {
        expect(control.getShowTime()).toBe(false);
    });

    it("should update show time", () => {
        expect(control.getShowTime()).toBe(false);
        control.setShowTime(true);
        expect(control.getShowTime()).toBe(true);
    });
});
