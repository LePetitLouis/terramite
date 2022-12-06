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
  stones: [],
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