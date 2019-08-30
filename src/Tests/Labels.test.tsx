import * as React from "react";
import Labels from "../Components/Labels";
import Enzyme from "enzyme";
import { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("<Labels />", () => {
  it("renders Labels", () => {
    const searchWrapper = shallow(<Labels />);
    expect(searchWrapper.exists()).toBe(true);
  });
});
