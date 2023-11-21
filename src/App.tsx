import { Routes, Route } from "react-router-dom"
import { Container } from "react-bootstrap"
import { Home } from "./pages/Home"
import { Store } from "./pages/Store"
import { Navbar } from "./components/Navbar"
import { ShoppingCartProvider } from "./context/ShoppingCartContext"
import { Footer } from "./components/Footer"
import LoginPage from "./pages/Login"
import RegistrationPage from "./components/Registration"

function App() {
  return (
    <>
    <ShoppingCartProvider>
      <Navbar />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/cadastro" element={<RegistrationPage />} />
        </Routes>
      </Container>
      <Footer />
    </ShoppingCartProvider>
    </>
  )
}

export default App
