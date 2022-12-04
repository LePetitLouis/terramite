import { useContext } from "react"

import modalContext from "../contexts/modalContext"

export const Navbar = () => {
  const { updateShowBannerModal } = useContext(modalContext)

  return (
    <header className="header" onClick={() => updateShowBannerModal(false)}>
      <section>
        <h1 className="header__title">Terramite</h1>
      </section>
    </header>
  )
}