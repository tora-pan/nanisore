import { Config } from "../config";
import { expect } from "chai";

describe("Config", function () {
  it("should export type", function () {
    const myTypedVariable: Config = { popupcolor: "", popupLocation: 0 };

    expect(myTypedVariable).to.exist;
  });
});
