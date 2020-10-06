import React, { useState, useContext } from "react";
import styled from "styled-components";
import { CampaignContext } from "../../context/CampaignContext";

const StyledImg = styled.div`
  width: 400px;
  height: 400px;
`;
const StyledBtn = styled.button`
  margin-top: 1em;
`;
const StyledTextArea = styled.div`
  display: flex;
`;

const CampaignForm = (props) => {
  const { campaigns, setCampaigns, segments } = useContext(CampaignContext);
  const [campaign, setCampaign] = useState(props.campaign);
  const [segment, setSegment] = useState(props.segment);
  const [tag, setTag] = useState("first_name");

  const submitForm = (e) => {
    e.preventDefault();
    if (props.campaign) {
      const index = campaigns.findIndex((c) => c.id === campaign.id);
      const newArr = [...campaigns];
      newArr[index] = campaign;
      setCampaigns(newArr);
    } else {
      campaign.status = "Preview";
      campaign.stats = null;
      setCampaigns((prevCampaigns) => [...prevCampaigns, campaign]);
    }
    props.onCompleteForm({ campaign });
  };

  const updateName = (e) => {
    setCampaign({ ...campaign, name: e.target.value });
  };

  const updateSegment = (e) => {
    setSegment({
      ...segment,
      id: segments.findIndex((segment) => segment.name === e.target.value) + 1,
      name: e.target.value,
    });
    setCampaign({
      ...campaign,
      segment_id:
        segments.findIndex((segment) => segment.name === e.target.value) + 1,
    });
  };

  const updateTag = (e) => {
    setTag(e.target.value);
  };

  const updateText = (e) => {
    setCampaign({
      ...campaign,
      text: e.target.value,
    });
  };

  const insertTag = (e) => {
    e.preventDefault();
    const newText = campaign.text ? `${campaign.text} {${tag}}` : tag;
    setCampaign({
      ...campaign,
      text: newText,
    });
  };

  const updateMedia = (e) => {
    setCampaign({
      ...campaign,
      media: e.target.value,
    });
  };

  return (
    <form onSubmit={submitForm}>
      <div>
        <label>Campaign Name:</label>
        <input
          className="campaign-name"
          type="text"
          value={campaign ? campaign.name : ""}
          onChange={updateName}
          required
        />
      </div>

      <div>
        <label>Segment:</label>
        <select
          className="segment-name"
          value={segment ? segment.name : ""}
          onChange={updateSegment}
          required
        >
          <option hidden disabled value="" defaultValue>
            -- select a segment --
          </option>
          {segments.map((segment) => (
            <option key={segment.id}>{segment.name}</option>
          ))}
        </select>
      </div>

      <div>
        <label>Tag:</label>
        <select value={tag} onChange={updateTag}>
          <option value="first_name" defaultValue>
            First Name
          </option>
          <option value="shop_name">Shop Name</option>
          <option value="shop_link">Shop Link</option>
        </select>
        <button onClick={insertTag}>Insert Tag</button>
      </div>

      <StyledTextArea>
        <label>Message:</label>
        <textarea
          className="campaign-message"
          value={campaign ? campaign.text : ""}
          cols="30"
          rows="10"
          onChange={updateText}
        ></textarea>
      </StyledTextArea>

      <div>
        <label>Media:</label>
        {campaign ? (
          <>
            <input
              className="campaign-media"
              value={campaign.media}
              onChange={updateMedia}
            />
            {campaign.media ? (
              <StyledImg>
                <img alt="media" src={campaign.media} />
              </StyledImg>
            ) : (
              ""
            )}
          </>
        ) : (
          <input className="campaign-media" />
        )}
      </div>

      <StyledBtn type="submit">
        {props.campaign ? "Edit Campaign" : "Add Campaign"}
      </StyledBtn>
    </form>
  );
};

export default CampaignForm;
