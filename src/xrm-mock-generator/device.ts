import { DeviceMock } from "../xrm-mock/device/device.mock";

export default class Device {
  public static createDevice(): DeviceMock {
    const device = new DeviceMock();

    return device;
  }
}
