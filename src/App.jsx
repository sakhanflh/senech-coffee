import { BrowserRouter, Route, Routes } from "react-router-dom"
import MainLayout from "./layouts/MainLayout"
import { Home } from "./pages/Home"
import { Menu } from "./pages/Menu"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
