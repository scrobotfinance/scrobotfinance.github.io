import Header from "../components/header";
import Footer from "../components/footer";
import Welcome from "../components/welcome";
import EligibilityForm from "../components/eligibility-form";
import ScroBotTokenContainer from "../components/scro-bot-token-container";
import React, { useState, useEffect } from 'react';

const Frame = () => {
  const [connectedAddress, setConnectedAddress] = useState(null);
  return (
    <>
      <Header setConnectedAddress={setConnectedAddress}/>
      <div className="box-border py-[50px] lg:py-[120px]">
        <Welcome />
        <EligibilityForm />
        <ScroBotTokenContainer />
      </div>
      <Footer />
    </>
  );
};

export default Frame;
