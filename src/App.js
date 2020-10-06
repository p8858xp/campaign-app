import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Campaigns from "./components/Campaigns/Campaigns";
import CreateCampaign from "./components/Campaigns/CreateCampaign";
import EditCampaign from "./components/Campaigns/EditCampaign";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CampaignProvider } from "./context/CampaignContext";

const StyledWrapper = styled.div`
  padding: 1.5em;
`;
const App = () => {
  return (
    <div>
      <CampaignProvider>
        <Router>
          <Navbar />
          <StyledWrapper>
            <Switch>
              <Route path="/" exact component={Campaigns} />
              <Route path="/edit/:id" component={EditCampaign} />
              <Route path="/new" component={CreateCampaign} />
            </Switch>
          </StyledWrapper>
        </Router>
      </CampaignProvider>
    </div>
  );
};

export default App;
