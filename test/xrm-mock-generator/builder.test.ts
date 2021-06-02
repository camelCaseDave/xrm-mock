import * as sinon from "sinon";
import {
    ClientContextMock,
    ContextMock,
    EntityMock,
    EventContextMock,
    FormItemMock,
    FormSelectorMock,
    ItemCollectionMock,
    ProcessManagerMock,
    ProcessMock,
    StageMock,
    StepMock,
    StringAttributeMock,
    UiMock,
    UserSettingsMock
} from "../../src/xrm-mock";
import { XrmMockGenerator } from "../../src/xrm-mock-generator";
import FormContext from "../../src/xrm-mock-generator/formcontext";

describe("XrmMockGenerator Builder", () => {
    let tab: Xrm.Controls.Tab;
    let section: Xrm.Controls.Section;
    let control: Xrm.Controls.StringControl;
    let attribute: Xrm.Attributes.Attribute;
    let context: Xrm.GlobalContext;
    let navigation: Xrm.Navigation;
    let process: Xrm.ProcessFlow.ProcessManager;
    const contact = {
        firstname: "Joe",
        id: "123",
        lastname: "Bloggs",
    };
    let tempValue: string;

    beforeAll(() => {
        // attributes
        const nameAttribute = new StringAttributeMock({
            name: "name",
            requiredLevel: "required",
        });
        nameAttribute.addOnChange(() => tempValue = "Test OnChange!");
        // entity
        const entity = new EntityMock({
            attributes: new ItemCollectionMock<Xrm.Attributes.Attribute>([nameAttribute]),
            entityName: "account",
            id: "{00000000-0000-0000-0000-000000000000}",
        });
        // ui
        const ui = new UiMock({
            formSelector: new FormSelectorMock(new ItemCollectionMock<FormItemMock>(
                [
                    new FormItemMock({
                        currentItem: true,
                        formType: 2,
                        id: "5",
                        label: "Main",
                    }),
                ])),
        });
        // context
        const globalContext = new ContextMock(
            {
                clientContext: new ClientContextMock("Web", "Online"),
                clientUrl: "https://org.crm.dynamics.com/",
                currentTheme: "default",
                isAutoSaveEnabled: false,
                orgLcid: 1031,
                orgUniqueName: "Contoso",
                timeZoneOffset: 0,
                userId: "{B05EC7CE-5D51-DF11-97E0-00155DB232D0}",
                userLcid: 1033,
                userName: "Joe Bloggs",
                userRoles: ["cf4cc7ce-5d51-df11-97e0-00155db232d0"],
                userSettings: new UserSettingsMock(
                    {
                        isGuidedHelpEnabled: false,
                        isHighContrastEnabled: false,
                        isRTL: false,
                        languageId: 1033,
                        securityRoles: ["cf4cc7ce-5d51-df11-97e0-00155db232d0"],
                        userId: "{00000000-0000-0000-0000-000000000000}",
                        userName: "jdoe",
                    }),
                version: "8.2.1.185",
            });
        // bpf
        /// steps
        const firstNameStep = new StepMock("First Name", "firstname", false);
        const lastNameStep = new StepMock("Last Name", "lastname", false);
        const firstStage = new StageMock("6001", "Start", "active", null, [firstNameStep]);
        const secondStage = new StageMock("6002", "Finish", "inactive", null, [lastNameStep]);
        /// process
        const process1 = new ProcessMock({
            id: "4444",
            name: "Sales Process",
            rendered: true,
            stages: new ItemCollectionMock<Xrm.ProcessFlow.Stage>([firstStage, secondStage]),
        });
        const process2 = new ProcessMock({
            id: "5555",
            name: "Service Process",
            rendered: false,
            stages: new ItemCollectionMock<Xrm.ProcessFlow.Stage>([firstStage, secondStage]),
        });
        const processManager = new ProcessManagerMock([process1, process2]);

        XrmMockGenerator.initialise({
            context: globalContext,
            entity,
            process: processManager,
            ui,
        });

        // form structure
        XrmMockGenerator.Tab.createTab("testTab", "Test Tab", false, "collapsed", null,
            new ItemCollectionMock<Xrm.Controls.Section>(
                [
                    XrmMockGenerator.Section.createSection("testSection", "Test Section", false, null,
                        new ItemCollectionMock<Xrm.Controls.Control>(
                            [
                                XrmMockGenerator.Control.createString({
                                    attribute: nameAttribute,
                                    disabled: true,
                                    label: "Name",
                                    name: "name",
                                    visible: false,
                                }),
                                XrmMockGenerator.Control.createGrid({
                                    entityName: "account",
                                    name: "accounts",
                                }),
                            ])),
                ]));

        // event context (OnLoad, OnChange ... etc.)
        const eventContext = new EventContextMock(
            {
                context: globalContext,
                formContext: FormContext.createFormContext(entity, ui),
            });

        // web api
        const recordId = "123";
        const stub = sinon.stub(Xrm.WebApi, "retrieveRecord");
        stub.withArgs("contact", recordId, "?$select=fullname").resolves(contact);

        // extract sample doc from here and test.ts
    });

    describe("Tab", () => {
        it("should create a tab", () => {
            tab = Xrm.Page.ui.tabs.get("testTab");
            expect(tab).toBeDefined();
            expect(tab).not.toBeNull();
        });

        it("should have a name", () => {
            expect(tab.getName()).toBe("testTab");
        });

        it("should have a label", () => {
            expect(tab.getLabel()).toBe("Test Tab");
        });

        it("should have a parent", () => {
            expect(tab.getParent()).toEqual(Xrm.Page.ui);
        });

        it("should be invisible", () => {
            expect(tab.getVisible()).toBeFalsy();
        });

        it("should be collapsed", () => {
            expect(tab.getDisplayState()).toBe("collapsed");
        });
    });

    describe("Section", () => {
        it("should create a section", () => {
            const sections = Xrm.Page.ui.tabs.get("testTab").sections;
            expect(sections).toBeDefined();
            expect(sections).not.toBeNull();

            section = sections.get("testSection");
            expect(section).toBeDefined();
            expect(section).not.toBeNull();
        });

        it("should have a name", () => {
            expect(section.getName()).toBe("testSection");
        });

        it("should have a label", () => {
            expect(section.getLabel()).toBe("Test Section");
        });

        it("should have a parent", () => {
            expect(section.getParent()).toEqual(tab);
        });

        it("should be invisible", () => {
            expect(section.getVisible()).toBeFalsy();
        });
    });

    describe("Control", () => {
        it("should create a control", () => {
            const sections = Xrm.Page.ui.tabs.get("testTab").sections;
            expect(sections).toBeDefined();
            expect(sections).not.toBeNull();

            section = sections.get("testSection");
            expect(section).toBeDefined();
            expect(section).not.toBeNull();

            const controls = section.controls;
            expect(controls).toBeDefined();
            expect(controls).not.toBeNull();

            control = controls.get("name") as Xrm.Controls.StringControl;
            expect(control).toBeDefined();
            expect(control).not.toBeNull();

            control = Xrm.Page.getControl("name");
            expect(control).toBeDefined();
            expect(control).not.toBeNull();
        });

        it("should have a name", () => {
            expect(control.getName()).toBe("name");
        });

        it("should have a label", () => {
            expect(control.getLabel()).toBe("Name");
        });

        it("should have a parent", () => {
            expect(control.getParent()).toEqual(section);
        });

        it("should be invisible", () => {
            expect(control.getVisible()).toBeFalsy();
        });

        it("should be disabled", () => {
            expect(control.getDisabled()).toBeTruthy();
        });
    });

    describe("Attribute", () => {
        it("should create an attribute", () => {
            attribute = Xrm.Page.getAttribute("name");
            expect(attribute).toBeDefined();
            expect(attribute).not.toBeNull();
        });

        it("should have a name", () => {
            expect(attribute.getName()).toBe("name");
        });

        it("should be required", () => {
            expect(attribute.getRequiredLevel()).toBe("required");
        });

        it("should be dirty", () => {
            attribute.setValue("TEST!");
            expect(attribute.getIsDirty()).toBeTruthy();
        });

        it("should be have value 'TEST!'", () => {
            attribute.setValue("TEST!");
            expect(attribute.getValue()).toBe("TEST!");
        });

        it("should fire OnChange", () => {
            tempValue = "";
            attribute.fireOnChange();
            expect(tempValue).toBe("Test OnChange!");
        });

        it("should fire OnChange with eventContext", () => {
            let contextArg: Xrm.Events.EventContext;
            attribute.addOnChange((c: Xrm.Events.EventContext) => {contextArg = c});
            attribute.fireOnChange();
            expect(contextArg.getContext()).toBe(XrmMockGenerator.getEventContext().getContext());
            expect(contextArg.getEventSource()).toBe(attribute);
        });
    });

    describe("Entity", () => {
        it("should be an account", () => {
            expect(Xrm.Page.data.entity.getEntityName()).toBe("account");
        });

        it("should have an ID", () => {
            expect(Xrm.Page.data.entity.getId()).toBe("{00000000-0000-0000-0000-000000000000}");
        });
    });

    describe("Form", () => {
        it("should have an ID", () => {
            expect(Xrm.Page.ui.formSelector.getCurrentItem().getId()).toBe("5");
        });

        it("should have a label", () => {
            expect(Xrm.Page.ui.formSelector.getCurrentItem().getLabel()).toBe("Main");
        });
    });

    describe("Navigation", () => {
        it("should be defined", () => {
            navigation = Xrm.Navigation;
            expect(navigation).toBeDefined();
        });

        it("should have openUrl stubed", () => {
            expect(Xrm.Navigation.openUrl).toBeDefined();
        });
    });

    describe("Context", () => {
        it("should have a context", () => {
            context = Xrm.Page.context;
            expect(context).toBeDefined();
            expect(context).not.toBeNull();
        });

        it("should have a user language", () => {
            expect(context.getUserLcid()).toBe(1033);
        });
    });

    describe("Process", () => {
        it("should have a process manager", () => {
            process = Xrm.Page.data.process;
            expect(process).toBeDefined();
            expect(process).not.toBeNull();
        });

        it("should have an active stage", () => {
            const activeStage = process.getActiveStage();
            expect(activeStage).toBeDefined();
            expect(activeStage).not.toBeNull();
            expect(activeStage.getId()).toBe("6001");
        });
    });

    describe("Web API", () => {
        it("should return a contact with ID '123'", () => {
            Xrm.WebApi
                .retrieveRecord("contact", contact.id, "?$select=fullname")
                .then((result: any) => {
                    expect(result.id).toBe(contact.id);
                });
        });
    });
});
