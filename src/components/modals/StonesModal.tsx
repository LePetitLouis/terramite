import { useContext, useEffect, useMemo, useState } from "react";

import { DB, IStones } from "../../datas/db";
import { StoneCard } from "../cards/StoneCard";

import mainContext from "../../contexts/modalContext";

import { BaseModal } from "./BaseModal";

export const StonesModal = ({ country }: { country: string }) => {
  const [stones, setStones] = useState<IStones[]>([]);
  const [countryName, setCountryName] = useState<string>("");

  const regionNames = useMemo(() => new Intl.DisplayNames(["fr"], { type: "region" }), [])

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

  return (
    <BaseModal
      showModal={true}
      position="middle"
      title={countryName}
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
  );
};
