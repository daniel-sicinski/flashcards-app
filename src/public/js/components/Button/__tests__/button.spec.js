import React from "react";
import Button from "../Button";
import { shallow } from "enzyme";
import { componentSanityTests } from "../../../../../testUtils/componentSanityTests";

describe("Button", () => {
  componentSanityTests(<Button />, "Button");

  it("renders text passed as children props", () => {
    const text = "Hello";
    const wrapper = shallow(<Button>{text}</Button>);
    expect(wrapper.first().text()).toEqual(text);
  });

  it("passes props to button element", () => {
    const props = {
      onClick: jest.fn(),
      type: "button"
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
