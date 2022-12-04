import React, { useState } from "react";

import { Navbar } from "./components/Navbar";
import { Map } from "./components/Map";
import { BannerModal } from "./components/modals/BannerModal";

import mainContext, { defaultState } from "./contexts/modalContext";

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
        {showBannerModal && <BannerModal country={countryId} />}
        <Navbar />
        <Map />
      </div>
    </mainContext.Provider>
  );
}

export default App;
