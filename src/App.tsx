import React, { Suspense } from "react"
import { useRoutes } from "react-router-dom"

import routes from "./router"
import AppHeader from "./components/app-header"
import AppFooter from "./components/app-footer"
import PlayBar from "./views/player/player-bar"

function App() {
  return (
    <div className="App">
      <AppHeader />
      <div className="main">
        <Suspense fallback="loading...">{useRoutes(routes)}</Suspense>
      </div>
      <AppFooter />
      <PlayBar />
    </div>
  )
}

export default App
