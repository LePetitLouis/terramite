export const BaseModal = ({
  children,
  showModal,
  position,
  title,
  className,
  closeModal,
}: {
  children: any;
  showModal: boolean;
  position?: string;
  title: string;
  className?: string;
  closeModal: () => void;
}) => {
  return (
    <>
      {showModal && (
        <div className="modal-container">
          <div className="modal-mask" onClick={closeModal}></div>
          <div className={`modal-wrapper ${position}`}>
            <div className="modal-wrapper__header">
              <h1 className="modal-wrapper__header__title">{title}</h1>
              <div className="modal-wrapper__header__content-icon" onClick={closeModal}>
                <img className="modal-wrapper__header__icon" src="icons/X.svg" alt="icon close" />
              </div>
            </div>
            <div className={className}>
              {children}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
