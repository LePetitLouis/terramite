import { useEffect, useState } from "react";

import { StoneCard } from "../cards/StoneCard";

import { DB, IStones } from "../../datas/db";

export const BannerModal = ({ country } : { country: string }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [maxSlides, setMaxSlides] = useState(0);
  const [stones, setStones] = useState<IStones[]>([]);

  const [isShowPrevButton, setIsShowPrevButton] = useState(false)
  const [isShowNextButton, setIsShowNextButton] = useState(false)
  
  useEffect(() => {
    const getStoneByCountry = DB.countries[country]
    if (!getStoneByCountry) return setStones([])

    const stoneAvailable: IStones[] = getStoneByCountry.map((stoneShow: string) => {
      return (DB.stones.filter(stone => stone.image.toLowerCase() === stoneShow.toLowerCase())).shift() as IStones
    })
    setStones(stoneAvailable)
  }, [country])

  useEffect(() => {
    setMaxSlides(stones.length - 3)
  }, [stones])

  useEffect(() => {
    setIsShowPrevButton(!(maxSlides < 0 || currentSlide === 0))
    setIsShowNextButton(!(maxSlides < 0 || currentSlide === maxSlides))
  }, [currentSlide, maxSlides])

  const handlePrev = () => {
    setCurrentSlide(currentSlide - 1)
    console.log(currentSlide)

    const slides = document.querySelectorAll('.slide')
    slides.forEach((slide: any) => {
      slide.style.transform = `translateX(${-310 * currentSlide}px)`
    })
  }

  const handleNext = () => {
    setCurrentSlide(currentSlide + 1)
    console.log(currentSlide)

    const slides = document.querySelectorAll('.slide')
    slides.forEach((slide: any) => {
      slide.style.transform = `translateX(${-310 * currentSlide}px)`
    })
  }

  return (
    <section className="banner-container">
      <section className="banner-wrapper">
        {stones.length ? (
          <>
            <div className="banner-wrapper__arrow-left">
              { isShowPrevButton && <img src="icons/CaretCircleLeft.svg" className="icon" alt="icon arrow left" onClick={handlePrev} /> }
            </div>

            <div className="banner-wrapper__container">
              <div className="banner-wrapper__content">
                {stones.map(stone => {
                  return (<StoneCard key={stone.name} picture={stone.image} name={stone.name} description={stone.description} />)
                })}
              </div>
            </div>

            <div className="banner-wrapper__arrow-right">
              { isShowNextButton && <img src="icons/CaretCircleRight.svg" className="icon" alt="icon arrow right" onClick={handleNext} /> }
            </div>
          </>
        ) : (
          <h1>Aucune donnees pour l'instant</h1>
        )}
      </section>
    </section>
  );
};
