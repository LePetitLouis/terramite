import React, { useState } from "react";

import { Navbar } from "./components/Navbar";
import { Map } from "./components/Map";
import { StonesModal } from "./components/modals/StonesModal";

import { Analytics } from '@vercel/analytics/react';

import mainContext, { defaultState } from "./contexts/modalContext";

import './i18n'

import "./styles/main.scss";

function App() {
  const [countryId, setCountryId] = useState(defaultState.countryId);
  const [showBannerModal, setShowBannerModal] = useState(
    defaultState.showBannerModal
  );

  const updateCountryId = (id: string) => {
    setCountryId(id);
  };

  const updateShowBannerModal = (bool: boolean) => {
    if (bool === showBannerModal) return;
    setShowBannerModal(bool);
  };

  return (
    <mainContext.Provider
      value={{
        countryId,
        showBannerModal,
        updateCountryId,
        updateShowBannerModal,
      }}
    >
      <div className="App">
        {showBannerModal && <StonesModal country={countryId}/>}
        <Navbar />
        <Map />
      </div>
      <Analytics />
    </mainContext.Provider>
  );
}

export default App;
