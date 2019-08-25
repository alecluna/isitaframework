import * as React from "react";
import App from "../App";
import Enzyme from "enzyme";
import { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("<App />", () => {
  it("renders App .container", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find(".container")).toHaveLength(1);
  });

  it("renders App header", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(".animated.div")).toBeTruthy();
  });
});
