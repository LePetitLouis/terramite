import { useContext, useEffect, useState } from "react";

import { DB, IStones } from "../../datas/db";
import { StoneCard } from "../cards/StoneCard";

import mainContext from "../../contexts/modalContext";

import { BaseModal } from "./BaseModal"

export const StonesModal = ({ country }: { country: string }) => {
  const [stones, setStones] = useState<IStones[]>([]);

  const { updateShowBannerModal } = useContext(mainContext);

  useEffect(() => {
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
  }, [country]);

  return (
    <BaseModal showModal={true} position="middle" title={country} children={stones.map(stone => { return (<StoneCard name={stone.name} picture={stone.image} description={stone.description} />) })} closeModal={() => updateShowBannerModal(false)} />
  )
}