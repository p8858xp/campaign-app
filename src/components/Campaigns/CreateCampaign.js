import React from "react";
import CampaignForm from "./CampaignForm";

const CreateCampaign = (props) => {
  return (
    <>
      <CampaignForm onCompleteForm={formData => props.history.push('/', formData)}/>
    </>
  );
};

export default CreateCampaign;
