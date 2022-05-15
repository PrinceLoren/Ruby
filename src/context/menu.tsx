import React, { createContext, FC, useContext, useState } from 'react'

interface IContext {
  isOpen: boolean
  toggleMenu: VoidFunction
}

const Context = createContext<IContext>({
  isOpen: false,
  toggleMenu: () => {
    /**/
  },
})

export const MenuProvider: FC = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const exposed = {
    isOpen,
    toggleMenu,
  }

  return <Context.Provider value={exposed}>{children}</Context.Provider>
}

export const useToggleMenu = () => useContext(Context)
