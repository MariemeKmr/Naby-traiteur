import { useState } from 'react'
import { CheckCircle } from 'lucide-react'

export default function Devis() {
  const [form, setForm] = useState({
    fullname: '', email: '', phone: '', eventType: '',
    eventDate: '', location: '', guests: '', menus: '',
    message: '', rgpd: false
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = e => {
    const { name, value, type, checked } = e.target
    setForm(f => ({ ...f, [name]: type === 'checkbox' ? checked : value }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (!form.rgpd) { alert('Veuillez accepter la politique de confidentialité.'); return }
    console.log('Devis soumis:', form)
    setSubmitted(true)
  }

  if (submitted) return (
    <div className="pt-32 min-h-screen flex items-center justify-center">
      <div className="text-center p-12 bg-white rounded-2xl shadow-xl max-w-md">
        <CheckCircle size={64} className="text-green-500 mx-auto mb-4" />
        <h2 className="text-2xl font-serif text-dark mb-3">Demande envoyée !</h2>
        <p className="text-gray-500">Nous vous recontacterons sous 24h pour votre devis personnalisé.</p>
      </div>
    </div>
  )

  return (
    <div className="pt-24 pb-20 bg-[#faf8f5] min-h-screen">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-10">
          <p className="text-gold text-sm uppercase tracking-widest mb-2">Gratuit & sans engagement</p>
          <h1 className="text-4xl font-serif text-dark">Demande de Devis</h1>
          <div className="w-16 h-0.5 bg-gold mx-auto mt-4" />
        </div>
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8 space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Nom complet *</label>
              <input name="fullname" required value={form.fullname} onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
              <input type="email" name="email" required value={form.email} onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Téléphone *</label>
              <input name="phone" required value={form.phone} onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Type d'événement *</label>
              <select name="eventType" required value={form.eventType} onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition bg-white">
                <option value="">-- Choisir --</option>
                <option>Mariage</option>
                <option>Anniversaire</option>
                <option>Événement d'entreprise</option>
                <option>Baptême</option>
                <option>Autre</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Date de l'événement *</label>
              <input type="date" name="eventDate" required value={form.eventDate} onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Lieu *</label>
              <input name="location" required value={form.location} onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Nombre d'invités *</label>
              <input type="number" name="guests" required min="1" value={form.guests} onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Menu souhaité</label>
              <select name="menus" value={form.menus} onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition bg-white">
                <option value="">-- Choisir --</option>
                <option>Menu Prestige Mariage</option>
                <option>Buffet Gala</option>
                <option>Menu Sénégalais Traditionnel</option>
                <option>Menu International</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Message complémentaire</label>
            <textarea name="message" rows={4} value={form.message} onChange={handleChange}
              placeholder="Précisez vos envies, contraintes alimentaires, thème..."
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition resize-none" />
          </div>
          <label className="flex items-start gap-3 cursor-pointer">
            <input type="checkbox" name="rgpd" checked={form.rgpd} onChange={handleChange}
              className="mt-1 accent-primary" />
            <span className="text-sm text-gray-600">
              J'accepte la <a href="#" className="text-primary underline">politique de confidentialité</a> et le traitement de mes données personnelles pour le traitement de ma demande. *
            </span>
          </label>
          <button type="submit"
            className="w-full bg-primary hover:bg-red-900 text-white py-3 rounded-full font-semibold text-lg transition">
            Envoyer ma demande
          </button>
        </form>
      </div>
    </div>
  )
}
