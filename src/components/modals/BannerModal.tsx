import { useEffect, useState } from "react";

import { StoneCard } from "../cards/StoneCard";
import AliceCarousel from "react-alice-carousel";

import { DB, IStones } from "../../datas/db";

export const BannerModal = ({ country }: { country: string }) => {
  const [stones, setStones] = useState<IStones[]>([]);

  const [isShowPrevButton, setIsShowPrevButton] = useState(false);
  const [isShowNextButton, setIsShowNextButton] = useState(false);

  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  };

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
    <section className="banner-container">
      <section className="banner-wrapper">
        {stones.length ? (
          <div className="banner-wrapper__container">
            <AliceCarousel
              mouseTracking
              touchTracking
              disableDotsControls
              responsive={responsive}
              paddingLeft={100}
              renderPrevButton={() => (
                <img
                  src="icons/CaretCircleLeft.svg"
                  className="icon"
                  alt="icon arrow left"
                />
              )}
              renderNextButton={() => (
                <img
                  src="icons/CaretCircleRight.svg"
                  className="icon"
                  alt="icon arrow right"
                />
              )}
              items={stones.map((stone) => {
                return (
                  <StoneCard
                    key={stone.name}
                    picture={stone.image}
                    name={stone.name}
                    description={stone.description}
                  />
                );
              })}
            />
          </div>
        ) : (
          <h1>Aucune donnees pour l'instant</h1>
        )}
      </section>
    </section>
  );
};
