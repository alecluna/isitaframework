import * as React from "react";
import DarkModeToggle from "../Components/DarkMode/DarkModeToggle";
import Enzyme from "enzyme";
import { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("<DarkModeToggle />", () => {
  it("renders Dark Mode Toggle Component", () => {
    const wrapper = shallow(<DarkModeToggle />);
    expect(wrapper.exists()).toBe(true);
  });

  // TODO, fix this test
  // it("renders Toggle <button />", () => {
  //   const wrapper = shallow(<DarkModeToggle />);
  //   expect(wrapper.find().hasClass("toggleButton")).toBe(true);
  //   // wrapper.find(".toggleButton").simulate.click();
  //   // expect(onClickMock.mock.calls.length).toEqual(1);
  // });
});
