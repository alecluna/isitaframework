import * as React from "react";
import Search from "../Components/Search";
import Enzyme from "enzyme";
import { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("<Search />", () => {
  it("renders Search", () => {
    const searchWrapper = shallow(<Search />);
    expect(searchWrapper.exists()).toBeTruthy();
  });
});
