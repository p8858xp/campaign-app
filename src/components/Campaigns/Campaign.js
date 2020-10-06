import React, { useContext } from "react";
import { CampaignContext } from "../../context/CampaignContext";
import styled from "styled-components";
import { Link } from "react-router-dom";

const EditBtn = styled.button`
  background: none;
  border: 1px solid #469bd6;
  color: #469bd6;
  &:hover {
    background: #469bd6;
    color: #fff;
  }
`;
const DeleteBtn = styled.button`
  background: none;
  border: 1px solid red;
  color: red;
  &:hover {
    background: red;
    color: #fff;
  }
`;

const Campaign = ({ campaign, segment }) => {
  const { campaigns, setCampaigns } = useContext(CampaignContext);

  const deleteCampaign = (id) => {
    let newArr = [...campaigns];
    newArr = newArr.filter((c) => c.id !== id);
    setCampaigns(newArr);
  };

  return (
    <tr>
      <td>{campaign.name}</td>
      {segment ? <td>{segment.name}</td> : null}
      {campaign.stats ? (
        <>
          <td>{campaign.stats.clicked}</td>
          <td>{campaign.stats.sent}</td>
          <td>
            {(campaign.stats.clicked / campaign.stats.sent).toFixed(2) * 100}%
          </td>
        </>
      ) : null}
      {campaign.status === "Preview" ? (
        <td>
          <Link
            to={{
              pathname: `/edit/${campaign.id}`,
              state: { campaign, segment },
            }}
          >
            <EditBtn>Edit</EditBtn>
          </Link>
        </td>
      ) : null}
      {campaign.status === "Preview" ? (
        <td>
          <DeleteBtn onClick={() => deleteCampaign(campaign.id)}>
            Delete
          </DeleteBtn>
        </td>
      ) : null}
    </tr>
  );
};

export default Campaign;
