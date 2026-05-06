const categories = [
  {
    title: 'Mariages',
    img: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&q=80',
    desc: 'De la mise en bouche aux desserts, chaque détail est pensé pour sublimer votre jour J.',
    items: ['Cocktail d\'accueil', 'Dîner de gala', 'Buffet froid & chaud', 'Pièce montée personnalisée']
  },
  {
    title: 'Événements d\'entreprise',
    img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80',
    desc: 'Séminaires, conférences, team buildings — une restauration à la hauteur de votre image.',
    items: ['Pauses café & snacking', 'Déjeuners d\'affaires', 'Cocktails de networking', 'Galas et soirées de gala']
  },
  {
    title: 'Fêtes privées',
    img: 'https://images.unsplash.com/photo-1555244162-803834f70033?w=600&q=80',
    desc: 'Anniversaires, baptêmes, réunions de famille — moments précieux, saveurs exceptionnelles.',
    items: ['Menus sénégalais traditionnels', 'Buffets internationaux', 'Grillades & BBQ', 'Desserts & pâtisseries']
  },
]

export default function Services() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-gold text-sm uppercase tracking-widest mb-2">Notre expertise</p>
          <h1 className="text-5xl font-serif text-dark">Nos Prestations</h1>
          <div className="w-16 h-0.5 bg-gold mx-auto mt-4" />
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">Une gastronomie raffinée pour chaque occasion, avec des produits frais sélectionnés avec soin.</p>
        </div>
        <div className="space-y-16">
          {categories.map((cat, i) => (
            <div key={i} className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-10 items-center`}>
              <div className="md:w-1/2 rounded-2xl overflow-hidden shadow-xl">
                <img src={cat.img} alt={cat.title} className="w-full h-72 object-cover hover:scale-105 transition duration-500" />
              </div>
              <div className="md:w-1/2">
                <h2 className="text-3xl font-serif text-dark mb-3">{cat.title}</h2>
                <p className="text-gray-500 leading-relaxed mb-5">{cat.desc}</p>
                <ul className="space-y-2">
                  {cat.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-2 text-gray-700 text-sm">
                      <span className="w-2 h-2 bg-gold rounded-full flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
