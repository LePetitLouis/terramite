import { useContext, useEffect, useMemo, useState } from "react";

import { DB, IStones } from "../../datas/db";
import { StoneCard } from "../cards/StoneCard";

import mainContext from "../../contexts/modalContext";

import { BaseModal } from "./BaseModal";

export const StonesModal = ({ country }: { country: string }) => {
  const [stones, setStones] = useState<IStones[]>([]);
  const [countryName, setCountryName] = useState<string>("");

  const regionNames = useMemo(
    () => new Intl.DisplayNames(["fr"], { type: "region" }),
    []
  );

  const { updateShowBannerModal } = useContext(mainContext);

  useEffect(() => {
    setCountryName(regionNames.of(country) as string);
    const getStoneByCountry = DB.countries[country];
    if (!getStoneByCountry) return setStones([]);

    const stoneAvailable: IStones[] = getStoneByCountry.map(
      (stoneShow: string) => {
        return DB.stones
          .filter(
            (stone) => stone.image.toLowerCase() === stoneShow.toLowerCase()
          )
          .shift() as IStones;
      }
    );
    setStones(stoneAvailable);
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
            name={stone.name}
            picture={stone.image}
            description={stone.description}
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
          <h1 className="title">Aucune données pour le moment...</h1>
        </>
      }
      closeModal={() => updateShowBannerModal(false)}
    />
  );
};
