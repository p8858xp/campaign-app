import React, { createContext, useState } from "react";
import data from "../data/campaigns.json";

export const CampaignContext = createContext();

export const CampaignProvider = (props) => {
  const [campaigns, setCampaigns] = useState(data["campaigns"]);
  const segments = data["segments"];

  return (
    <CampaignContext.Provider value={{ campaigns, setCampaigns, segments }}>
      {props.children}
    </CampaignContext.Provider>
  );
};
