import React from "react";

export interface IModalContext {
  countryId: string;
  showBannerModal: boolean
  updateCountryId: (id: string) => void
  updateShowBannerModal: (bool: boolean) => void
}

export const defaultState: IModalContext = {
  countryId: '',
  showBannerModal: false,
  updateCountryId: () => {},
  updateShowBannerModal: () => {}
}

export default React.createContext<IModalContext>(defaultState)