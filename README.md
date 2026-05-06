# Naby Traiteur - Plateforme Web Full-Stack

> *« Plus d'effort pour vous servir »*

Plateforme web professionnelle pour **Naby Traiteur**, service de restauration événementielle haut de gamme à Dakar (mariages, événements privés et professionnels).

---

## ✨ Fonctionnalités

### 🌐 Site public
- Page d'accueil avec statistiques dynamiques et hero vidéo
- Catalogue des prestations par type d'événement
- Formulaire de demande de devis en ligne
- Galerie photos filtrable (stockée sur AWS S3)
- Calendrier de disponibilités
- Avis clients validés
- Formulaire de contact + Google Maps + WhatsApp flottant
- Multilingue FR / EN
- Conformité RGPD

### 🔐 Panel administrateur
- Tableau de bord avec statistiques
- Gestion des commandes (statuts, filtres, facturation PDF)
- Gestion des menus (activer/désactiver, CRUD)
- Gestion du calendrier (bloquer/débloquer des dates)
- Gestion des réalisations (upload S3)
- Modération des avis clients
- CMS : modification des textes et coordonnées

---

## 🛠️ Stack technique

| Couche | Technologie |
|--------|------------|
| Frontend | React 18, React Router, Tailwind CSS |
| Backend | Java 17, Spring Boot 3, Spring Security (JWT) |
| Base de données | MySQL 8 |
| Stockage media | AWS S3 |
| PDF | iText 8 |
| Email | Spring Mail (SMTP) |
| Déploiement | Docker (optionnel) |

---

## 📁 Structure du projet
naby-traiteur/
├── frontend/                  # Application React
│   ├── src/
│   │   ├── components/        # Navbar, Footer, WhatsApp
│   │   ├── pages/             # Home, Services, Devis, Galerie...
│   │   └── admin/             # Dashboard, Commandes, Menus...
│   └── package.json
├── backend/                   # API Spring Boot
│   └── src/main/java/com/nabytraiteur/
│       ├── entity/            # Entités JPA
│       ├── repository/        # Spring Data JPA
│       ├── service/           # Logique métier
│       ├── controller/        # Endpoints REST
│       ├── security/          # JWT Filter
│       └── config/            # CORS, S3, Security
├── docs/
│   ├── cahier-des-charges.pdf
│   └── erd.png
└── README.md

---

## 🚀 Démarrage rapide

### Prérequis
- Node.js 18+
- Java 17+
- MySQL 8+
- Compte AWS S3

### Frontend
```bash
cd frontend
npm install
npm run dev
# → http://localhost:5173
```

### Backend
```bash
cd backend
# Configurer src/main/resources/application.properties
./mvnw spring-boot:run
# → http://localhost:8080
```

### Base de données
```sql
CREATE DATABASE naby_traiteur CHARACTER SET utf8mb4;
-- Les tables sont créées automatiquement par Hibernate (ddl-auto=update)
```

---

## 🔑 Variables d'environnement (backend)

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/naby_traiteur
spring.datasource.username=root
spring.datasource.password=YOUR_PASSWORD

jwt.secret=YOUR_JWT_SECRET_KEY
jwt.expiration=86400000

aws.region=eu-west-3
aws.s3.bucket=naby-traiteur-media
aws.access-key=YOUR_ACCESS_KEY
aws.secret-key=YOUR_SECRET_KEY

spring.mail.username=contact@nabytraiteur.com
spring.mail.password=YOUR_APP_PASSWORD
```

---

## 📡 Endpoints API principaux

| Méthode | Endpoint | Accès | Description |
|---------|----------|-------|-------------|
| POST | `/api/auth/login` | Public | Connexion admin |
| POST | `/api/orders/public` | Public | Soumettre un devis |
| GET | `/api/orders` | ADMIN/STAFF | Lister commandes |
| PATCH | `/api/orders/{id}/status` | ADMIN/STAFF | Changer statut |
| GET | `/api/orders/{id}/pdf` | ADMIN/STAFF | Générer PDF |
| GET | `/api/menus/public` | Public | Menus actifs |
| GET | `/api/availability/public/blocked` | Public | Dates bloquées |
| GET | `/api/reviews/public` | Public | Avis validés |
| GET | `/api/events/public` | Public | Galerie |

---

## 👤 Comptes par défaut

| Email | Mot de passe | Rôle |
|-------|-------------|------|
| admin@nabytraiteur.com | Admin@1234 | ADMIN |

> ⚠️ Changer le mot de passe en production !

---

## 📋 Roadmap V2

- [ ] Espace client (login, historique commandes)
- [ ] Paiement en ligne (Wave, Orange Money)
- [ ] Application mobile (React Native)
- [ ] Notifications WhatsApp Business API

---

## 👩‍💻 Développement

Projet développé par **Marième Kamara** & **Idrissa Massaly**

---

## 📄 Licence

MIT License — voir [LICENSE](LICENSE)
