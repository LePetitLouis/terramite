import { useState } from "react";
import { useTranslation } from "react-i18next";

import { Language } from "../enums/Language";

export const SelectorLanguage = () => {
  const [showLanguageSelector, setShowLanguageSelector] = useState(false);
  const { i18n } = useTranslation();
  const [lang, setLang] = useState<Language>(i18n.language as Language);

  let changeLanguage = (language: Language) => {
    switch (language) {
      case Language.EN:
        setLang(Language.EN);
        i18n.changeLanguage(Language.EN);
        break;
      case Language.ES:
        setLang(Language.ES);
        i18n.changeLanguage(Language.ES);
        break;
      case Language.FR:
      default:
        setLang(Language.FR);
        i18n.changeLanguage(Language.FR);
        break;
    }
    setShowLanguageSelector(false)
  };

  const handleLanguageSelector = () => {
    setShowLanguageSelector(!showLanguageSelector);
  };

  return (
    <div className="language-selector">
      <div className="selected-language" onClick={handleLanguageSelector}>
        <img
          className="language-selector__flag"
          src={`images/${lang}.png`}
          alt={`${lang} flag`}
        />
      </div>

      {showLanguageSelector && (
        <ul className="language-selector__select">
          <li>
            <img
              className={`language-selector__flag ${lang === Language.FR ? 'blur' : ''}`}
              src="images/fr.png"
              alt="french flag"
              onClick={() => changeLanguage(Language.FR)}
            />
          </li>
          <li>
            <img
              className={`language-selector__flag ${lang === Language.EN ? 'blur' : ''}`}
              src="images/en.png"
              alt="united states flag"
              onClick={() => changeLanguage(Language.EN)}
            />
          </li>
          <li>
            <img
              className={`language-selector__flag ${lang === Language.ES ? 'blur' : ''}`}
              src="images/es.png"
              alt="spain flag"
              onClick={() => changeLanguage(Language.ES)}
            />
          </li>
        </ul>
      )}
    </div>
  );
};
