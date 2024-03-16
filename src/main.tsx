import './index.scss'
import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './Pages/Home'
import { Render } from './hooks/render'
import BackgroundVideo from './components/backgroundVideo'
import { ButtonBar } from './components/ButtonBar'
import { NavButton } from './components/NavButton'
import { About } from './Pages/About'
import { Contact } from './Pages/Contact'

// eslint-disable-next-line react-refresh/only-export-components
const Main = () => {
  const logo = <img src="/LOGO_Blank.png" className="w-20 logo-image" alt="logo" />

  const NavButtons = [<NavButton text="About" to="/about" />, <NavButton text="Contact" to="/contact" />]

  const [scroll, setScroll] = useState<number>(0)

  return (
    <BrowserRouter>
      <BackgroundVideo videoSource="/.Sunset.mp4" playbackSpeed={1} setScrollPosition={setScroll}>
        <ButtonBar buttons={NavButtons} logo={logo} className={''} fillBg={scroll !== 0} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BackgroundVideo>
    </BrowserRouter>
  )
}

Render(<Main />)
