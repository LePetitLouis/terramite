import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { Navbar } from "./components/Navbar";
import { Map } from "./components/Map";
import { StonesModal } from "./components/modals/StonesModal";

import { Analytics } from '@vercel/analytics/react';

import mainContext, { defaultState } from "./contexts/modalContext";

import './i18n'

import "./styles/main.scss";
import { WelcomeModal } from "./components/modals/WelcomeModal";
import { Language } from "./enums/Language";

function App() {
  const [countryId, setCountryId] = useState(defaultState.countryId);
  const [showWelcomeModal, setShowWelcomeModal] = useState(true)
  const [showBannerModal, setShowBannerModal] = useState(
    defaultState.showBannerModal
  );
  const { i18n } = useTranslation();

  useEffect(() => {
    const defaultLanguage = navigator.language.slice(0,2)
    Object.values(i18n.languages).includes(defaultLanguage) ? i18n.changeLanguage(defaultLanguage) : i18n.changeLanguage(Language.EN)
  }, [i18n])

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
        {showWelcomeModal && <WelcomeModal closeModal={() => setShowWelcomeModal(false)} /> }
        {showBannerModal && <StonesModal country={countryId}/>}
        <Navbar />
        <Map />
      </div>
      <Analytics />
    </mainContext.Provider>
  );
}

export default App;
