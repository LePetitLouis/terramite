import { useContext } from "react";

import { SelectorLanguage } from "./SelectorLanguage";

import modalContext from "../contexts/modalContext";

export const Navbar = () => {
  const { updateShowBannerModal } = useContext(modalContext);

  return (
    <header className="header" onClick={() => updateShowBannerModal(false)}>
      <section className="header__content">
        <h1 className="header__title">Terramite</h1>
        <SelectorLanguage />
      </section>
    </header>
  );
};
