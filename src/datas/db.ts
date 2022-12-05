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
    },
    {
      image: "gold",
      name: "Or",
      description: "Connectée au chakra du plexus solaire, la pierre or natif permet de se remplir d’énergies positives et de..."
    },
    {
      image: "marbre",
      name: "Marbre",
      description: "Associée au renouveau, la pierre marbre facilite la prise de décisions et encourage le changement."
    },
    {
      image: "quartz",
      name: "Quartz",
      description: "La plupart du temps, le quartz est utilisé pour amplifier le pouvoir des.."
    },
    {
      image: "cristal",
      name: "Cristal",
      description: "Unique en son genre, la pierre cristal de roche est capable de recevoir, d’émettre et d’amplifier les.."
    },
    {
      image: "tanzanite",
      name: "Tanzanite",
      description: "La tanzanite est une pierre qui favorise l’élévation spirituelle et la grandeur..."
    }
  ],

  countries: {
    "AU": ["saphir", "diamant", "emeraude", "citrine", "amethyst", "turquoise", "opale", "topaze", "tourmaline", "gold"], // Australie
    "MM": ["saphir", "rubis", "jade", "topaze", "tourmaline"], // Birmanie
    "LK": ["saphir", "rubis", "topaze", "tourmaline"], // Sri lanka
    "TH": ["saphir", "rubis", "tourmaline"], // Thailande
    "CA": ["diamant", "jade", "gold"], // Canada
    "AO": ["diamant", "tourmaline"], // Angola
    "ZA": ["diamant", "emeraude", "gold"], // Afrique du sud
    "BW": ["diamant"], // Botswana
    "CG": ["diamant"], // Congo
    "RU": ["diamant", "emeraude", "jade", "aquamarine", "citrine", "amethyst", "topaze", "tourmaline", "gold", "quartz"], // Russie
    "AT": ["emeraude"], // Autriche
    "BR": ["emeraude", "jade", "aquamarine", "citrine", "amethyst", "ambre", "opale", "topaze", "tourmaline", "onyx", "gold", "quartz", "cristal"], // Brésil
    "CO": ["emeraude"],  // Colombie
    "IN": ["emeraude", "tourmaline", "onyx"], // Inde
    "MG": ["emeraude", "aquamarine", "citrine", "amethyst", "topaze", "tourmaline", "onyx", "quartz", "cristal"], // Madagascar
    "NG": ["emeraude", "topaze"], // Nigéria
    "PK": ["emeraude", "aquamarine"], // Pakistan
    "TZ": ["emeraude", "rubis", "turquoise", "tourmaline", "tanzanite"], // Tanzanie
    "ZM": ["emeraude"], // Zambie
    "US": ["emeraude", "jade", "turquoise", "opale", "topaze", "tourmaline", "onyx", "gold", "quartz", "cristal"], // Etats-Unis
    "VN": ["rubis"], // Vietnam
    "CN": ["jade", "turquoise", "gold"], // Chine
    "JP": ["jade", "opale", "topaze"], // Japon
    "NZ": ["jade"], // Nouvelle Zelande
    "GT": ["jade", "opale"], // Guatemala
    "MX": ["jade", "turquoise", "opale", "topaze", "onyx"], // Mexique
    "AF": ["aquamarine", "turquoise", "tourmaline"], // Afghanistan
    "UY": ["citrine", "amethyst", "onyx"], // Uruguay
    "FR": ["turquoise", "marbre", "quartz", "cristal"], // France
    "IR": ["turquoise"], // Iran
    "IL": ["turquoise"], // Israel
    "PE": ["opale", "gold"], // Perou
    "HN": ["opale"], // Honduras
    "ZW": ["topaze", "tourmaline"], // Rhodésie
    "MZ": ["tourmaline"], // Mozambique
    "GF": ["gold"], // Guyanne Française
    "BE": ["marbre"], // Belgique
    "PT": ["marbre"], // Portugal
    "IT": ["marbre"], // Italie
    "ES": ["quartz"], // Espagne
    "MA": ["quartz"], // Maroc
    "CZ": ["quartz"], // République tchèque
  }
}