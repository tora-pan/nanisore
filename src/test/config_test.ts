import { Config } from "../config";
import { expect } from "chai";

describe("Config", () => {
  it("should export type", () => {
    const myTypedVariable: Config = { popupcolor: "", popupLocation: 0 };

    expect(myTypedVariable).to.exist;
  });
});
