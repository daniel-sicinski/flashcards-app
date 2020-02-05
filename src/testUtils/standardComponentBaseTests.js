import React from "react";
import { shallow } from "enzyme";

export const standardComponentBaseTests = (Component, label) => {
  describe(`Standard base test for ${label}`, () => {
    it("passes props to element", () => {
      const props = {
        onClick: jest.fn(),
        propValue: "button"
      };

      const wrapper = shallow(<Button {...props} />);
      wrapper.simulate("click");
      expect(props.onClick).toHaveBeenCalled();
      expect(
        wrapper
          .find("button")
          .first()
          .props()["type"]
      ).toEqual("button");
    });
  });
};
