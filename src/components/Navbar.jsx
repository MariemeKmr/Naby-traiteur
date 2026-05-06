import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, Globe } from 'lucide-react'

const links = [
  { to: '/', label: 'Accueil' },
  { to: '/services', label: 'Prestations' },
  { to: '/galerie', label: 'Réalisations' },
  { to: '/devis', label: 'Devis' },
  { to: '/a-propos', label: 'À propos' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur border-b border-gold/20 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo.png" alt="Naby Traiteur" className="h-10 w-10 rounded-full object-cover" />
          <span className="font-serif text-xl text-primary font-bold">Naby Traiteur</span>
        </Link>
        <div className="hidden md:flex gap-6 items-center">
          {links.map(l => (
            <NavLink key={l.to} to={l.to}
              className={({ isActive }) => `text-sm font-medium transition hover:text-primary ${isActive ? 'text-primary border-b-2 border-primary' : 'text-gray-700'}`}>
              {l.label}
            </NavLink>
          ))}
          <Link to="/devis" className="ml-2 bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-red-900 transition">
            Demander un devis
          </Link>
          <button className="text-gray-500 hover:text-primary"><Globe size={18} /></button>
        </div>
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-white border-t px-4 pb-4 flex flex-col gap-3">
          {links.map(l => (
            <NavLink key={l.to} to={l.to} onClick={() => setOpen(false)}
              className="text-sm py-2 border-b border-gray-100 text-gray-700 hover:text-primary">
              {l.label}
            </NavLink>
          ))}
          <Link to="/devis" onClick={() => setOpen(false)}
            className="bg-primary text-white text-center py-2 rounded-full text-sm font-semibold">
            Demander un devis
          </Link>
        </div>
      )}
    </nav>
  )
}
