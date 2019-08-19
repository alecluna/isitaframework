import * as React from "react";
import App from "../App";
import Enzyme from "enzyme";
import { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("App Container Component", () => {
  it("renders App", () => {
    const wrapper = shallow(<App />);

    expect(wrapper.exists()).toBe(true);
    expect(wrapper.html()).toMatch(
      '<div class="container"><h1>Is it a framework?</h1>Loading...</div>'
    );
  });
});
