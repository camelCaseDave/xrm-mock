import { ClientContextMock, WebApiMock, WebApiOfflineMock, WebApiOnlineMock } from "../../src/xrm-mock";

describe("Web API", () => {
  let clientContext: ClientContextMock;
  let offlineApi: WebApiOfflineMock;
  let onlineApi: WebApiOnlineMock;
  let webApi: WebApiMock;

  beforeEach(() => {
    clientContext = new ClientContextMock("Web", "Online");

    offlineApi = new WebApiOfflineMock();
    onlineApi = new WebApiOnlineMock(offlineApi);
    webApi = new WebApiMock(clientContext, onlineApi, offlineApi);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should exist", () => {
    expect(webApi).toBeDefined();
  });

  it("should call online.createRecord when it's online", () => {
    const spy = jest.spyOn(onlineApi, "createRecord");
    expect(() => webApi.createRecord("", "")).toThrow();
    expect(onlineApi.createRecord).toHaveBeenCalledTimes(1);
  });

  it("should call online.deleteRecord when it's online", () => {
    const spy = jest.spyOn(onlineApi, "deleteRecord");
    expect(() => webApi.deleteRecord("", "")).toThrow();
    expect(onlineApi.deleteRecord).toHaveBeenCalledTimes(1);
  });

  it("should call online.retrieveRecord when it's online", () => {
    const spy = jest.spyOn(onlineApi, "retrieveRecord");
    expect(() => webApi.retrieveRecord("", "", "")).toThrow();
    expect(onlineApi.retrieveRecord).toHaveBeenCalledTimes(1);
  });

  it("should call online.retrieveMultipleRecords when it's online", () => {
    const spy = jest.spyOn(onlineApi, "retrieveMultipleRecords");
    expect(() => webApi.retrieveMultipleRecords("")).toThrow();
    expect(onlineApi.retrieveMultipleRecords).toHaveBeenCalledTimes(1);
  });

  it("should call online.updateRecord when it's online", () => {
    const spy = jest.spyOn(onlineApi, "updateRecord");
    expect(() => webApi.updateRecord("", "", "")).toThrow();
    expect(onlineApi.updateRecord).toHaveBeenCalledTimes(1);
  });

  describe("online", () => {
    it("should throw for execute", () => {
      expect(() => onlineApi.execute(null)).toThrow();
    });

    it("should throw for executeMultiple", () => {
      expect(() => onlineApi.executeMultiple(null)).toThrow();
    });
  });
});
