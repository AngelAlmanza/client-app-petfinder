import { ReactNode, useState } from "react";
import { Header } from "./components/Header";

type Props = {
  children: ReactNode;
}

export const MainLayout = ({ children }: Props) => {
  const [openMenu, setOpenMenu] = useState<boolean>(false)
  const [opacity, setOpacity] = useState<string>('')

  const handleMenu = () => {
    setOpenMenu(!openMenu)
    if (openMenu) {
      setOpacity('')
    } else {
      setOpacity('dark-background')
    }
  }

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Header handleMenu={handleMenu} openMenu={openMenu} />
      <main className={`bg-primary-gray flex-1 rounded-3xl px-6 py-4 ${opacity}`}>
        { children }
      </main>
    </div>
  )
}
