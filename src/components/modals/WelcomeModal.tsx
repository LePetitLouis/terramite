import { useTranslation } from "react-i18next";

import { BaseModal } from "./BaseModal";
import { StoneCard } from "../cards/StoneCard";

export const WelcomeModal = ({ closeModal }: { closeModal: () => void }) => {
  const { t } = useTranslation();

  const tips = ["zoom", "touch", "view"];

  return (
    <BaseModal
      showModal={true}
      position="middle"
      title={t("commun.welcome")}
      className="modal-wrapper__content"
      closeModal={closeModal}
      children={tips.map((tip) => {
        return (
          <StoneCard
            key={tip}
            name={t(`commun.tips.${tip}.name`)}
            picture={t(`commun.tips.${tip}.image`)}
            description={t(`commun.tips.${tip}.description`)}
          />
        );
      })}
    />
  );
};
