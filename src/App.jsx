import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import Home from './pages/Home'
import Services from './pages/Services'
import Devis from './pages/Devis'
import Galerie from './pages/Galerie'
import Contact from './pages/Contact'
import APropos from './pages/APropos'
import AdminLayout from './admin/AdminLayout'
import Login from './admin/Login'
import Dashboard from './admin/Dashboard'
import Commandes from './admin/Commandes'
import Menus from './admin/Menus'
import Calendrier from './admin/Calendrier'
import Realisations from './admin/Realisations'
import Avis from './admin/Avis'

function PublicLayout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* PUBLIC */}
        <Route path="/" element={<PublicLayout><Home /></PublicLayout>} />
        <Route path="/services" element={<PublicLayout><Services /></PublicLayout>} />
        <Route path="/devis" element={<PublicLayout><Devis /></PublicLayout>} />
        <Route path="/galerie" element={<PublicLayout><Galerie /></PublicLayout>} />
        <Route path="/contact" element={<PublicLayout><Contact /></PublicLayout>} />
        <Route path="/a-propos" element={<PublicLayout><APropos /></PublicLayout>} />
        {/* ADMIN */}
        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="commandes" element={<Commandes />} />
          <Route path="menus" element={<Menus />} />
          <Route path="calendrier" element={<Calendrier />} />
          <Route path="realisations" element={<Realisations />} />
          <Route path="avis" element={<Avis />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
