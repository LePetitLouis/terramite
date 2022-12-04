export const StoneCard = ({
  picture,
  name,
  description,
}: {
  picture: string;
  name: string;
  description: string;
}) => {
  return (
    <article className="stone-card slide">
      <img src={`images/${picture}.png`} alt={picture} className="stone-card__image" />
      <h1 className="stone-card__name">{name}</h1>
      <p className="stone-card__description">{description}</p>
    </article>
  );
};
