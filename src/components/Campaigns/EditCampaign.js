import React from "react";
import CampaignForm from "./CampaignForm";

const EditCampaign = (props) => {
  return (
    <>
      <CampaignForm
        campaign={props.location.state.campaign}
        segment={props.location.state.segment}
        onCompleteForm={(formData) => props.history.push("/", formData)}
      />
    </>
  );
};

export default EditCampaign;
