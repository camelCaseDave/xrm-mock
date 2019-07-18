import { UtilityMock } from "../xrm-mock/utility/utility.mock";

export default class Utility {
  public static createUtility(): UtilityMock {
    const utility = new UtilityMock();
    return utility;
  }
}
