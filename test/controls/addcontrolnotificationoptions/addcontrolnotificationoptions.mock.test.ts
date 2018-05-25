import { AddControlNotificationOptionsMock } from "../../../src/xrm-mock/";

describe("Xrm.Controls.AddControlNotificationOptions Mock", () => {
  beforeEach(() => {
    this.addControlNotificationOptions = new AddControlNotificationOptionsMock({
      actions: [],
      messages: ["Message1", "Message2"],
      notificationLevel: "ERROR",
      uniqueId: "1",
    });
  });

  it("should exist", () => {
    expect(this.addControlNotificationOptions).toBeDefined();
  });
});
