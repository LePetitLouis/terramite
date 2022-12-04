export interface IStones {
  image: string
  name: string
  description: string
}

export interface ICountry {
  [string: string]: string[]
}

export interface IDatas {
  stones: IStones[],
  countries: ICountry
}

export const DB: IDatas = {
  stones: [
    {
      image: "diamant",
      name: "Diamant",
      description: "Le diamant est, sans aucun doute, l’un des minéraux les plus populaires du monde."
    },
    {
      image: "emeraude",
      name: "Emeraude",
      description: "La pierre émeraude symbolise la régénération physique, matérielle et spirituelle."
    },
    {
      image: "rubis",
      name: "Rubis",
      description: "Le rubis est une pierre qui symbolise le courage, la loyauté, et le feu ardent."
    },
    {
      image: "saphir",
      name: "Saphir",
      description: "Le saphir est une pierre qui apaise la colère, la tristesse et tous les sentiments négatifs qui vous..."
    },
    {
      image: "jade",
      name: "Jade",
      description: "Symbole d’honnêteté, de moralité et de justice, la pierre jade développe la tolérance chez son porteur."
    },
    {
      image: "aquamarine",
      name: "Aigue Marine",
      description: "Réputée pour sa grande beauté et pour sa magnifique couleur bleue..."
    },
    {
      image: "citrine",
      name: "Citrine",
      description: "La citrine est une pierre solaire qui inspire la joie de vivre et l’abondance."
    },
    {
      image: "amethyst",
      name: "Amethyst",
      description: "Symbole de force, de sagesse et d’humilité, la pierre améthyste est une..."
    },
    {
      image: "ambre",
      name: "Ambre",
      description: "L’ambre est une pierre énergisante qui permet de s’affirmer et de renforcer la confiance en soi."
    },
    {
      image: "turquoise",
      name: "Turquoise",
      description: "Très connue pour ses vertus curatives, la pierre turquoise représente l’eau, le soleil et..."
    },
    {
      image: "opale",
      name: "Opale",
      description: "L’opale est une excellente pierre pour rétablir la bonne circulation des énergies dans votre corps"
    },
    {
      image: "topaze",
      name: "Topaze",
      description: "La topaze est une pierre qui permet de se recharger, tant sur le plan physique que..."
    },
    {
      image: "tourmaline",
      name: "Tourmaline",
      description: "En lithothérapie, la puissance de ce minéral a non seulement une influence très positive sur le..."
    },
    {
      image: "onyx",
      name: "Onyx",
      description: "Si vous traversez une période difficile, la pierre onyx peut vous aider à..."
    }
  ],

  countries: {
    "AU": ["saphir", "diamant", "emeraude", "citrine", "amethyst", "turquoise", "opale", "topaze", "tourmaline"], // Australie
    "MM": ["saphir", "rubis", "jade", "topaze", "tourmaline"], // Birmanie
    "LK": ["saphir", "rubis", "topaze", "tourmaline"], // Sri lanka
    "TH": ["saphir", "rubis", "tourmaline"], // Thailande
    "CA": ["diamant", "jade"], // Canada
    "AO": ["diamant", "tourmaline"], // Angola
    "ZA": ["diamant", "emeraude"], // Afrique du sud
    "BW": ["diamant"], // Botswana
    "CG": ["diamant"], // Congo
    "RU": ["diamant", "emeraude", "jade", "aquamarine", "citrine", "amethyst", "topaze", "tourmaline"], // Russie
    "AT": ["emeraude"], // Autriche
    "BR": ["emeraude", "jade", "aquamarine", "citrine", "amethyst", "ambre", "opale", "topaze", "tourmaline", "onyx"], // Brésil
    "CO": ["emeraude"],  // Colombie
    "IN": ["emeraude", "tourmaline", "onyx"], // Inde
    "MG": ["emeraude", "aquamarine", "citrine", "amethyst", "topaze", "tourmaline", "onyx"], // Madagascar
    "NG": ["emeraude", "topaze"], // Nigéria
    "PK": ["emeraude", "aquamarine"], // Pakistan
    "TZ": ["emeraude", "rubis", "turquoise", "tourmaline"], // Tanzanie
    "ZM": ["emeraude"], // Zambie
    "US": ["emeraude", "jade", "turquoise", "opale", "topaze", "tourmaline", "onyx"], // Etats-Unis
    "VN": ["rubis"], // Vietnam
    "CN": ["jade", "turquoise"], // Chine
    "JP": ["jade", "opale", "topaze"], // Japon
    "NZ": ["jade"], // Nouvelle Zelande
    "GT": ["jade", "opale"], // Guatemala
    "MX": ["jade", "turquoise", "opale", "topaze", "onyx"], // Mexique
    "AF": ["aquamarine", "turquoise", "tourmaline"], // Afghanistan
    "UY": ["citrine", "amethyst", "onyx"], // Uruguay
    "FR": ["turquoise"], // France
    "IR": ["turquoise"], // Iran
    "IL": ["turquoise"], // Israel
    "PE": ["opale"], // Perou
    "HN": ["opale"], // Honduras
    "ZW": ["topaze", "tourmaline"], // Rhodésie
    "MZ": ["tourmaline"], // Mozambique
  }
}