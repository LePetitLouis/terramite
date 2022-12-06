import { useContext, useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

import { DB } from "../../datas/db";
import { StoneCard } from "../cards/StoneCard";

import mainContext from "../../contexts/modalContext";

import { BaseModal } from "./BaseModal";

export const StonesModal = ({ country }: { country: string }) => {
  const { t , i18n} = useTranslation()
  const [stones, setStones] = useState<string[]>([]);
  const [countryName, setCountryName] = useState<string>("");

  const regionNames = useMemo(
    () => new Intl.DisplayNames([i18n.language], { type: "region" }),
    [i18n]
  );

  const { updateShowBannerModal } = useContext(mainContext);

  useEffect(() => {
    setCountryName(regionNames.of(country) as string);
    const getStoneByCountry = DB.countries[country];
    if (!getStoneByCountry) return setStones([]);

    setStones(getStoneByCountry);
  }, [country, regionNames]);

  return stones.length ? (
    <BaseModal
      showModal={true}
      position="middle"
      title={countryName}
      className="modal-wrapper__content"
      children={stones.map((stone) => {
        return (
          <StoneCard
            key={stone}
            name={t(`stones.${stone}.name`)}
            picture={t(`stones.${stone}.image`)}
            description={t(`stones.${stone}.description`)}
          />
        );
      })}
      closeModal={() => updateShowBannerModal(false)}
    />
  ) : (
    <BaseModal
      showModal={true}
      position="middle"
      title={countryName}
      className="modal-wrapper__content-nothing"
      children={
        <>
          <img src="images/nothing.png" alt="nothing icon" className="icon" />
          <h1 className="title">{t('stones.not-data')}</h1>
        </>
      }
      closeModal={() => updateShowBannerModal(false)}
    />
  );
};
