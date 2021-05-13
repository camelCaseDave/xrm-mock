import {
    OptionSetAttributeMock,
    OptionSetControlMock,
    OptionSetValueMock
} from "../../../src/xrm-mock";

describe("Xrm.Controls.OptionSetControl Mock", () => {
    let control: OptionSetControlMock;
    beforeEach(() => {
        const att = new OptionSetAttributeMock({name: "test"});
        control = new OptionSetControlMock({
            attribute: att,
            name: att.name,
            options: [
                new OptionSetValueMock("Phone Call", 100000),
                new OptionSetValueMock("In Person", 100001),
                new OptionSetValueMock("Email", 100002),
            ],
        });
    });

    it("should allow adding an option", () => {
        const snailMail = {text: "Snail Mail", value: 100003};
        expect(control.options.length).toBe(3);
        control.addOption(snailMail);
        expect(control.options.length).toBe(4);
        expect(control.options[3].text).toBe(snailMail.text);
        expect(control.options[3].value).toBe(snailMail.value);
    });

    it("should allow clearing options", () => {
        control.clearOptions();
        expect(control.options.length).toBe(0);
    });

    it("should allow removing an option", () => {
        const value = 100002;
        expect(control.options.find((o) => o.value === value)).not.toBeUndefined();
        expect(control.options.length).toBe(3);
        control.removeOption(value);
        expect(control.options.length).toBe(2);
        expect(control.options.find((o) => o.value === value)).toBeUndefined();
    });
});
