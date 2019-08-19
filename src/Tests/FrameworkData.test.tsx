import * as React from "react";
import FrameworkData from "../Components/FrameworkData";
import Enzyme from "enzyme";
import { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("Search Component", () => {
  it("renders Search", () => {
    const wrapper = shallow(<FrameworkData searchTerm={<li>test value</li>} />);
    expect(wrapper.exists()).toBeTruthy();
  });
});
