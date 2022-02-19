import React, { createContext, useState } from "react"

export const GlobalContext = createContext()

export const GlobalProvider = ({ children }) => {
  const [isNightMode, setIsNightMode] = useState(false)
  return (
    <GlobalContext.Provider
      value={{ nightMode: { isNightMode, setIsNightMode } }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
