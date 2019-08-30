import * as React from "react";
import FrameworkData from "../Components/FrameworkData";
import ListItem from "../Components/ListItem";

import Enzyme from "enzyme";
import { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("<FrameworkData />", () => {
  it("renders Framework Data child component", () => {
    const wrapper = shallow(<FrameworkData searchTerm={<li>test value</li>} />);
    expect(wrapper.exists()).toBe(true);
  });

  it("renders a List Item", () => {
    const wrapper = shallow(<ListItem name="react" language="JavaScript" />);
    expect(wrapper.exists()).toBe(true);
  });
});
