import { BrowserRouter, Route, Routes } from "react-router-dom"
import MainLayout from "./layouts/MainLayout"
import { Home } from "./pages/Home"
import { Menu } from "./pages/Menu"
import { MenuDetailPage } from "./pages/MenuDetailPage"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
          </Route>
          <Route path="/menu/:slug" element={<MenuDetailPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
