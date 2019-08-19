import * as React from "react";
import App from "../App";
import Search from "../Components/Search";
import Enzyme from "enzyme";
import { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("App Container Component", () => {
  it("renders App", () => {
    const wrapper = shallow(<App />);

    expect(wrapper.exists()).toBe(true);
  });
});

describe("Search Component", () => {
  it("renders Search", () => {
    const searchWrapper = shallow(<Search />);

    expect(searchWrapper.exists()).toBe(true);
  });
});
