import { Link } from 'react-router-dom'
import { ChefHat, Star, Users, CalendarCheck, Award } from 'lucide-react'

const stats = [
  { icon: <Users size={28} />, value: '500+', label: 'Clients satisfaits' },
  { icon: <CalendarCheck size={28} />, value: '300+', label: 'Événements réalisés' },
  { icon: <Star size={28} />, value: '4.9/5', label: 'Note moyenne' },
  { icon: <Award size={28} />, value: '10+', label: 'Années d\'expérience' },
]

const services = [
  { title: 'Mariages', img: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400&q=80', desc: 'Un jour inoubliable mérite une gastronomie d\'exception.' },
  { title: 'Événements d\'entreprise', img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&q=80', desc: 'Professionnalisme et raffinement pour vos séminaires et conférences.' },
  { title: 'Fêtes privées', img: 'https://images.unsplash.com/photo-1555244162-803834f70033?w=400&q=80', desc: 'Anniversaires, baptêmes, réunions — chaque moment devient festin.' },
]

export default function Home() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&q=80')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative text-center text-white px-4 max-w-3xl mx-auto">
          <p className="text-gold font-serif italic text-lg mb-3">Bienvenue chez</p>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-4">Naby Traiteur</h1>
          <p className="text-xl md:text-2xl text-gold font-serif italic mb-2">« Plus d'effort pour vous servir »</p>
          <p className="text-gray-300 text-lg mb-8 max-w-xl mx-auto">
            Service traiteur haut de gamme pour vos mariages, événements privés et professionnels à Dakar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/devis" className="bg-primary hover:bg-red-900 text-white px-8 py-3 rounded-full font-semibold text-lg transition">
              Demander un devis
            </Link>
            <Link to="/services" className="border-2 border-white text-white hover:bg-white hover:text-dark px-8 py-3 rounded-full font-semibold text-lg transition">
              Nos prestations
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-primary text-white py-12">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <div className="text-gold">{s.icon}</div>
              <div className="text-3xl font-bold font-serif">{s.value}</div>
              <div className="text-sm text-red-200">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-gold text-sm uppercase tracking-widest mb-2">Ce que nous faisons</p>
          <h2 className="text-4xl font-serif text-dark">Nos Prestations</h2>
          <div className="w-16 h-0.5 bg-gold mx-auto mt-4" />
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div key={i} className="group rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition">
              <div className="overflow-hidden h-56">
                <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
              </div>
              <div className="p-6 bg-white">
                <h3 className="font-serif text-xl text-dark mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/services" className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-full font-semibold transition">
            Voir toutes les prestations
          </Link>
        </div>
      </section>

      {/* CTA Devis */}
      <section className="bg-[url('https://images.unsplash.com/photo-1567521464027-f127ff144326?w=1400&q=80')] bg-cover bg-center py-24 relative">
        <div className="absolute inset-0 bg-dark/70" />
        <div className="relative text-center text-white max-w-2xl mx-auto px-4">
          <ChefHat size={48} className="text-gold mx-auto mb-4" />
          <h2 className="text-4xl font-serif mb-4">Votre événement mérite le meilleur</h2>
          <p className="text-gray-300 mb-8">Contactez-nous pour un devis personnalisé et gratuit sous 24h.</p>
          <Link to="/devis" className="bg-gold hover:bg-yellow-600 text-dark px-10 py-4 rounded-full font-bold text-lg transition">
            Demander un devis gratuit
          </Link>
        </div>
      </section>
    </div>
  )
}
