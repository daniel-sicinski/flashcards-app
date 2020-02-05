import React from "react";
import { shallow } from "enzyme";

export const componentSanityTests = (Component, label) => {
  describe(`Sanity tests for ${label}`, () => {
    it("is defined", () => {
      expect(Component).toBeDefined();
    });

    it("renders element", () => {
      const wrapper = shallow(Component);
      expect(wrapper.isEmptyRender()).toBe(false);
    });

    it("matches the snapshot", () => {
      const wrapper = shallow(Component);
      expect(wrapper.html()).toMatchSnapshot();
    });
  });
};
