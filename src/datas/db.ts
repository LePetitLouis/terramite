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
    "AU": ["saphir", "diamant", "emeraude", "citrine", "amethyst", "turquoise", "opale", "topaze", "tourmaline", "gold", "peridot", "zircon", "pearl", "moonstone", "alexandrite", "rhodonite"], // Australie
    "MM": ["saphir", "rubis", "jade", "topaze", "tourmaline", "peridot", "zircon", "moonstone", "alexandrite", "lapis-lazuli"], // Birmanie
    "LK": ["saphir", "rubis", "topaze", "tourmaline", "garnet", "moonstone", "alexandrite"], // Sri lanka
    "TH": ["saphir", "rubis", "tourmaline", "zircon"], // Thailande
    "CA": ["diamant", "jade", "gold", "lapis-lazuli", "rhodonite"], // Canada
    "AO": ["diamant", "tourmaline"], // Angola
    "ZA": ["diamant", "emeraude", "gold", "peridot", "rhodonite", "amazonite"], // Afrique du sud
    "BW": ["diamant"], // Botswana
    "CG": ["diamant"], // Congo
    "RU": ["diamant", "emeraude", "jade", "aquamarine", "citrine", "amethyst", "topaze", "tourmaline", "gold", "quartz", "alexandrite", "lapis-lazuli", "rhodonite", "aventurine", "amazonite", "dioptaze"], // Russie
    "AT": ["emeraude", "garnet"], // Autriche
    "BR": ["emeraude", "jade", "aquamarine", "citrine", "amethyst", "ambre", "opale", "topaze", "tourmaline", "onyx", "gold", "quartz", "cristal", "peridot", "garnet", "zircon", "moonstone", "alexandrite", "aventurine", "amazonite"], // Brésil
    "CO": ["emeraude"],  // Colombie
    "IN": ["emeraude", "tourmaline", "onyx", "garnet", "moonstone", "rhodonite", "aventurine", "amazonite"], // Inde
    "MG": ["emeraude", "aquamarine", "citrine", "amethyst", "topaze", "tourmaline", "onyx", "quartz", "cristal", "zircon", "moonstone", "alexandrite", "rhodonite"], // Madagascar
    "NG": ["emeraude", "topaze"], // Nigéria
    "PK": ["emeraude", "aquamarine", "lapis-lazuli"], // Pakistan
    "TZ": ["emeraude", "rubis", "turquoise", "tourmaline", "tanzanite", "zircon", "moonstone"], // Tanzanie
    "ZM": ["emeraude"], // Zambie
    "US": ["emeraude", "jade", "turquoise", "opale", "topaze", "tourmaline", "onyx", "gold", "quartz", "cristal", "peridot", "moonstone", "alexandrite", "lapis-lazuli", "rhodonite", "amazonite", "dioptaze"], // Etats-Unis
    "VN": ["rubis", "zircon"], // Vietnam
    "CN": ["jade", "turquoise", "gold"], // Chine
    "JP": ["jade", "opale", "topaze"], // Japon
    "NZ": ["jade"], // Nouvelle Zelande
    "GT": ["jade", "opale"], // Guatemala
    "MX": ["jade", "turquoise", "opale", "topaze", "onyx", "rhodonite"], // Mexique
    "AF": ["aquamarine", "turquoise", "tourmaline", "garnet", "lapis-lazuli"], // Afghanistan
    "UY": ["citrine", "amethyst", "onyx"], // Uruguay
    "FR": ["turquoise", "marbre", "quartz", "cristal", "zircon"], // France
    "IR": ["turquoise"], // Iran
    "IL": ["turquoise"], // Israel
    "PE": ["opale", "gold"], // Perou
    "HN": ["opale"], // Honduras
    "ZW": ["topaze", "tourmaline", "alexandrite"], // Rhodésie
    "MZ": ["tourmaline"], // Mozambique
    "GF": ["gold"], // Guyanne Française
    "BE": ["marbre"], // Belgique
    "PT": ["marbre"], // Portugal
    "IT": ["marbre"], // Italie
    "ES": ["quartz"], // Espagne
    "MA": ["quartz"], // Maroc
    "CZ": ["quartz", "garnet"], // République tchèque
    "NO": ["peridot"], // Norvège
    "ZR": ["peridot", "dioptaze"], // Zaire
    "KH": ["zircon"], // Cambodge
    "PF": ["pearl"], // Polynésie Française
    "CL": ["lapis-lazuli", "dioptaze"], // Chili
    "SE": ["rhodonite"], // Suède
  }
}