import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Campaign from "./Campaign";
import { CampaignContext } from "../../context/CampaignContext";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
`;
const StyledBtn = styled.button`
  width: 12rem;
  height: 100%;
  padding: 1em 2em;
  background: #71b6e6;
  color: #fff;
  transition: 0.3s ease-in;
  &:focus {
    outline: none;
  }
  &:hover {
    background: #469bd6;
  }
`;

const Campaigns = () => {
  const { campaigns, segments } = useContext(CampaignContext);

  return (
    <StyledDiv>
      <div>
        <header>Preview(Unsent) Campaigns</header>
        <table>
          <thead>
            <tr>
              <th>Campaign Name</th>
              <th>Segment</th>
            </tr>
          </thead>
          <tbody>
            {campaigns
              .filter((campaign) => campaign.status === "Preview")
              .map((campaign) => {
                const segment = segments.find(
                  (segment) => segment.id === campaign.segment_id
                );
                return (
                  <Campaign
                    key={campaign.id}
                    campaign={campaign}
                    segment={segment}
                  />
                );
              })}
          </tbody>
        </table>

        <header>Sent Campaigns</header>
        <table>
          <thead>
            <tr>
              <th>Campaign Name</th>
              <th>Clicks</th>
              <th>Sent</th>
              <th>CTR</th>
            </tr>
          </thead>
          <tbody>
            {campaigns
              .filter((campaign) => campaign.status === "Sent")
              .map((campaign) => (
                <Campaign campaign={campaign} />
              ))}
          </tbody>
        </table>
      </div>
      <Link to="/new">
        <StyledBtn>Create Campaign</StyledBtn>
      </Link>
    </StyledDiv>
  );
};

export default Campaigns;
