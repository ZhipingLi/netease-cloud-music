import React from "react"
import type { RefObject } from "react"

import { IExp } from "@/views/player/player-bar"

const playBarContext = React.createContext<RefObject<IExp | null>>({
  current: null,
})

export default playBarContext
