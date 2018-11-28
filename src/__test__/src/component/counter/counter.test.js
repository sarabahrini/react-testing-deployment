import Enzyme, { shallow, render, mount } from "enzyme";
import React from "react";
import Counter from "../../../../components/counter/counter.js";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });

describe("<Counter />", () => {
  it("is alive at application start", () => {
    let app = shallow(<Counter />);
    expect(app.find("span").exists()).toBeTruthy();
  });

  it("properly changes state for up", () => {
    let app = mount(<Counter />);
    let button = app.find(".up");
    button.simulate("click");
    expect(app.state("count")).toBe(1);
  });

  it("properly changes state for down", () => {
    let app = mount(<Counter />);
    let button = app.find(".down");
    button.simulate("click");
    expect(app.state("count")).toBe(-1);
  });

  it("properly assert state is transferred for up", () => {
    let app = mount(<Counter />);
    let button = app.find(".up");
    button.simulate("click");
    expect(app.find("span").text()).toContain("1");
  });

  it("properly assert state is transferred for down", () => {
    let app = mount(<Counter />);
    let button = app.find(".down");
    button.simulate("click");
    expect(app.find("span").text()).toContain("-1");
  });
});
