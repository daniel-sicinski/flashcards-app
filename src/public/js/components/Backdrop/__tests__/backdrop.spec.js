import React from "react";
import Backdrop from "../index";
import { shallow } from "enzyme";
import { componentSanityTests } from "../../../../../testUtils/componentSanityTests";

const foo = () => {};

describe("Backdrop", () => {
  componentSanityTests(
    <Backdrop hideOnClick={foo} show={false} darken={false} />,
    "Backdrop"
  );
  componentSanityTests(
    <Backdrop hideOnClick={foo} show={true} darken={false} />,
    "Backdrop"
  );
  componentSanityTests(
    <Backdrop hideOnClick={foo} show={false} darken={true} />,
    "Backdrop"
  );
  componentSanityTests(
    <Backdrop hideOnClick={foo} show={true} darken={true} />,
    "Backdrop"
  );

  it("hides on click", () => {
    const hideOnClick = jest.fn();
    const wrapper = shallow(
      <Backdrop hideOnClick={hideOnClick} show={true} darken={false} />
    );
    wrapper.simulate("click");
    expect(hideOnClick.mock.calls.length).toEqual(1);
  });
});
