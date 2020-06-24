import { AppMock } from "../xrm-mock/app/app.mock";

export default class App {
  public static createApp(): AppMock {
    const app = new AppMock();
    return app;
  }
}
