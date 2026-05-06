import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-dark text-gray-300 pt-14 pb-6 mt-20">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-10">
        <div>
          <h3 className="font-serif text-white text-lg mb-3">Naby Traiteur</h3>
          <p className="text-sm leading-relaxed text-gray-400">
            Service traiteur haut de gamme pour vos événements les plus précieux.
          </p>
          <p className="text-gold text-xs italic mt-2">« Plus d'effort pour vous servir »</p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">Navigation</h4>
          <ul className="space-y-2 text-sm">
            {[['/', 'Accueil'], ['/services', 'Prestations'], ['/galerie', 'Réalisations'], ['/devis', 'Devis'], ['/contact', 'Contact']].map(([to, label]) => (
              <li key={to}><Link to={to} className="hover:text-gold transition">{label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex gap-2 items-center"><Phone size={14} className="text-gold" /> +221 XX XXX XX XX</li>
            <li className="flex gap-2 items-center"><Mail size={14} className="text-gold" /> contact@nabytraiteur.com</li>
            <li className="flex gap-2 items-start"><MapPin size={14} className="text-gold mt-0.5" /> Dakar, Sénégal</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">Suivez-nous</h4>
          <div className="flex gap-3">
            <a href="#" className="bg-white/10 hover:bg-gold/30 p-2 rounded-full transition"><Instagram size={18} /></a>
            <a href="#" className="bg-white/10 hover:bg-gold/30 p-2 rounded-full transition"><Facebook size={18} /></a>
          </div>
        </div>
      </div>
      <div className="mt-10 border-t border-white/10 pt-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Naby Traiteur. Tous droits réservés.
      </div>
    </footer>
  )
}
