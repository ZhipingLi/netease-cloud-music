import React, { Suspense, useRef } from "react"
import { useRoutes } from "react-router-dom"

import routes from "./router"
import AppHeader from "./components/app-header"
import AppFooter from "./components/app-footer"
import PlayBar from "./views/player/player-bar"
import type { IExp } from "./views/player/player-bar"
import { playBarContext } from "./global/context"

function App() {
  const playBarExpRef = useRef<IExp>(null)

  return (
    <div className="App">
      <AppHeader />
      <div className="main">
        <playBarContext.Provider value={playBarExpRef}>
          <Suspense fallback="loading...">{useRoutes(routes)}</Suspense>
        </playBarContext.Provider>
      </div>
      <AppFooter />
      <PlayBar ref={playBarExpRef} />
    </div>
  )
}

export default App
