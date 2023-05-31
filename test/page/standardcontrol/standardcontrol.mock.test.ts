import { GridControlMock } from "../../../dist/xrm-mock";
import { AttributeMock, StandardControlMock } from "../../../src/xrm-mock";

describe("Xrm.Controls.StandardControl Mock", () => {
  let standardControl: StandardControlMock<any, any, any>;

  beforeEach(() => {
    standardControl = new StandardControlMock({
      attribute: new AttributeMock({
        name: "firstname",
        value: "Joe",
      }),
      disabled: false,
      name: "firstname",
    });
  });

  it("should exist", () => {
    expect(standardControl).toBeDefined();
  });

  it("should not be disabled", () => {
    expect(standardControl.getDisabled()).toBe(false);
  });

  it("should set itself to disabled", () => {
    standardControl.setDisabled(true);
    expect(standardControl.getDisabled()).toBe(true);
  });

  it("should set itself to hidden", () => {
    standardControl.setVisible(false);
    expect(standardControl.getVisible()).toBe(false);
  });

  it("should set itself to focused", () => {
    standardControl.setFocus();
  });

  it("should set its label", () => {
    const expected = "First Name Changed";

    standardControl.setLabel(expected);
    expect(standardControl.getLabel()).toBe(expected);
  });

  it("should set its notification", () => {
    const message = "Test";
    const id = "UniqueId";
    standardControl.setNotification(message, id);
    const notifications = standardControl.getNotifications();
    expect(notifications.length).toBe(1);
    expect(notifications[0].messages[0]).toBe(message);
    expect(notifications[0].uniqueId).toBe(id);
  });

  it("should add and trigger and clear its notification", () => {
    const id1 = "UniqueId1";
    const id2 = "UniqueId2";
    let notificationApplicationResult = "";
    standardControl.addNotification({
      messages: ["Test1"],
      notificationLevel: "RECOMMENDATION",
      actions: [{
        message: "ActionMessage",
        actions: [() => { notificationApplicationResult = id1; }],
      }],
      uniqueId: id1,
    });
    standardControl.addNotification({
      messages: ["Test2"],
      notificationLevel: "ERROR",
      actions: [{
        message: "ActionMessage2",
        actions: [() => { notificationApplicationResult = id2; }],
      }],
      uniqueId: id2,
    });
    let notifications = standardControl.getNotifications();
    expect(notifications.length).toBe(2);
    expect(notifications[0].uniqueId).toBe(id1);

    expect(notificationApplicationResult).toBe("");
    expect(standardControl.applyNotification()).toBe(true);
    expect(notificationApplicationResult).toBe(id1);
    notificationApplicationResult = "";

    standardControl.clearNotification(id1);
    notifications = standardControl.getNotifications();
    expect(notifications.length).toBe(1);
    expect(notifications[0].uniqueId).toBe(id2);
    expect(standardControl.applyNotification()).toBe(false);
    expect(notificationApplicationResult).toBe("");

    standardControl.clearNotification();
    expect(standardControl.applyNotification()).toBe(false);
    notifications = standardControl.getNotifications();
    expect(notifications.length).toBe(0);
    expect(standardControl.clearNotification()).toBe(false);
  });

  it("should prevent attributeless controls from returning an attribute", () => {
    const grid = new StandardControlMock({
      attribute: standardControl.getAttribute(),
      controlType: "subgrid",
      name: "contacts",
     }) as any;

    expect(standardControl.getAttribute()).toBeDefined();
    expect(() => grid.getAttribute()).toThrow();
  });
});
