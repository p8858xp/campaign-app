import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Navbar from "./components/Navbar/Navbar";
import App from "./App";

Enzyme.configure({ adapter: new Adapter() });

describe("App Component", () => {
  it("Should render a navbar component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Navbar)).toHaveLength(1);
  });
});
