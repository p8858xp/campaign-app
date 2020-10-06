import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import CampaignForm from "./CampaignForm";
import { CampaignProvider } from "../../context/CampaignContext";

Enzyme.configure({ adapter: new Adapter() });

const setUp = (props = {}) => {
  const component = mount(
    <CampaignProvider>
      <CampaignForm {...props} />
    </CampaignProvider>
  );
  return component;
};

describe("CampaignForm Component", () => {
  it("Should prepopulate edit form", () => {
    const wrapper = setUp({
      campaign: {
        id: 1,
        name: "Test",
        text: "Testing",
        status: "Preview",
        segment_id: 1,
        media: "https://images.unsplash.com/photo-1568485248685-019a98426c14",
        stats: null,
      },
      segment: { id: 1, name: "Test segment", subscribers_count: 8920 },
      onCompleteForm: () => {},
    });
    expect(wrapper.find(".campaign-name").prop("value")).toBe("Test");
    expect(wrapper.find(".segment-name").prop("value")).toBe("Test segment");
    expect(wrapper.find(".campaign-message").prop("value")).toBe("Testing");
    expect(wrapper.find(".campaign-media").prop("value")).toBe(
      "https://images.unsplash.com/photo-1568485248685-019a98426c14"
    );
  });

  it("Should NOT prepopulate create form", () => {
    const wrapper = setUp({
      onCompleteForm: () => {},
    });
    expect(wrapper.find(".campaign-name").prop("value")).toBe("");
    expect(wrapper.find(".segment-name").prop("value")).toBe("");
    expect(wrapper.find(".campaign-message").prop("value")).toBe("");
    expect(wrapper.find(".campaign-media").prop("value")).toBe(undefined);
  });
});
