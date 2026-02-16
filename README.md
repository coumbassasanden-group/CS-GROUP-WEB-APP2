# CS-GROUP-WEB-APP

Site web du groupe Coumbassa & Sanden construit avec Nuxt 3.

## 🚀 Démarrage rapide

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Build pour la production
npm run build

# Prévisualiser la production
npm run preview
```

Le site sera accessible sur `http://localhost:3000/`

## 📁 Structure du projet

```
CS-GROUP-WEB-APP/
├── assets/
│   └── css/
│       └── main.css          # Styles globaux (CSS pur, pas de Tailwind)
├── components/
│   ├── Header.vue            # En-tête avec navigation et sélecteur de langue
│   ├── Hero.vue              # Section hero avec services (Conseil, Finance, Tech)
│   ├── DigitalServices.vue   # Services digitaux (Alt Connect, Alt Digit, Alt News)
│   ├── About.vue             # Section à propos avec stats
│   ├── VideoPlayer.vue       # Lecteur vidéo YouTube intégré
│   └── Footer.vue            # Pied de page avec newsletter
├── i18n/
│   └── locales/
│       ├── fr.json           # Traductions françaises
│       └── en.json           # Traductions anglaises
├── pages/
│   └── index.vue             # Page d'accueil
├── public/
│   ├── images/               # 📸 Images du site (voir section ci-dessous)
│   └── js/                   # Scripts JavaScript
├── app.vue                   # Composant racine
├── nuxt.config.ts            # Configuration Nuxt
└── package.json              # Dépendances
```

## 📸 Images requises

### Emplacement
Toutes les images doivent être placées dans le dossier `public/images/`

### Liste complète des images

#### 1. Logos principaux
- **`logo-default.png`** - Logo principal C&S Group (utilisé dans header et footer)
  - Dimensions recommandées: 200x50px
  - Format: PNG avec fond transparent
  - Utilisé dans: Header, Footer

#### 2. Hero Section
- **`ds-nimba.png`** - Image principale du hero (statue/sculpture)
  - Dimensions recommandées: 600x600px
  - Format: PNG avec fond transparent
  - Utilisé dans: Section Hero (côté droit)

#### 3. Services Cards (3 images)
- **`conseil-1000X600.png`** - Image pour CS Conseil
  - Dimensions: 1000x600px
  - Format: PNG ou JPG
  - Utilisé dans: Card "COUMBASSA & SANDEN CONSEIL"

- **`finance-1000X600.png`** - Image pour CS Finance
  - Dimensions: 1000x600px
  - Format: PNG ou JPG
  - Utilisé dans: Card "COUMBASSA & SANDEN FINANCE"

- **`tech-1000X600.png`** - Image pour CS Tech
  - Dimensions: 1000x600px
  - Format: PNG ou JPG
  - Utilisé dans: Card "COUMBASSA & SANDEN TECH"

#### 4. Services Digitaux (3 logos)
- **`connect.png`** - Logo Alt Connect
  - Dimensions recommandées: 200x80px
  - Format: PNG avec fond transparent
  - Utilisé dans: Card Alt Connect

- **`alt-digit.png`** - Logo Alt Digit
  - Dimensions recommandées: 200x80px
  - Format: PNG avec fond transparent
  - Utilisé dans: Card Alt Digit

- **`alt-news.png`** - Logo Alt News
  - Dimensions recommandées: 200x80px
  - Format: PNG avec fond transparent
  - Utilisé dans: Card Alt News

#### 5. Section À propos
- **`group.jpg`** - Photo de l'équipe/groupe
  - Dimensions recommandées: 800x600px
  - Format: JPG
  - Utilisé dans: Section "À propos de nous"

#### 6. Footer - Logos des entreprises (3 logos)
- **`logo-cs-conseil.png`** - Logo CS Conseil
  - Dimensions recommandées: 150x50px
  - Format: PNG avec fond transparent
  - Utilisé dans: Footer section "Voir aussi"

- **`logo-cs-finance.png`** - Logo CS Finance
  - Dimensions recommandées: 150x50px
  - Format: PNG avec fond transparent
  - Utilisé dans: Footer section "Voir aussi"

- **`logo-cs-tech.png`** - Logo CS Tech
  - Dimensions recommandées: 150x50px
  - Format: PNG avec fond transparent
  - Utilisé dans: Footer section "Voir aussi"

### 📋 Checklist des images

```
public/images/
├── ✅ logo-default.png          (Logo principal)
├── ✅ ds-nimba.png              (Hero image)
├── ✅ conseil-1000X600.png      (Service Conseil)
├── ✅ finance-1000X600.png      (Service Finance)
├── ✅ tech-1000X600.png         (Service Tech)
├── ✅ connect.png               (Alt Connect)
├── ✅ alt-digit.png             (Alt Digit)
├── ✅ alt-news.png              (Alt News)
├── ✅ group.jpg                 (Photo équipe)
├── ✅ logo-cs-conseil.png       (Footer - Conseil)
├── ✅ logo-cs-finance.png       (Footer - Finance)
└── ✅ logo-cs-tech.png          (Footer - Tech)
```

### 🔄 Comment ajouter les images

**Option 1: Copier depuis le site existant**
```bash
# Si vous avez accès aux images du site actuel
cp /chemin/vers/images/* CS-GROUP-WEB-APP/public/images/
```

**Option 2: Télécharger depuis les URLs**
Vous pouvez télécharger les images depuis les sites existants:
- https://group.coumbassa-sanden.com/_nuxt/
- https://conseil.coumbassa-sanden.com/
- https://finance.coumbassa-sanden.com/
- https://tech.coumbassa-sanden.com/

**Option 3: Créer des placeholders temporaires**
En attendant les vraies images, vous pouvez utiliser des placeholders:
- https://via.placeholder.com/1000x600.png?text=CS+Conseil
- https://via.placeholder.com/200x80.png?text=Alt+Connect

### ⚠️ Notes importantes

1. **Formats acceptés**: PNG (recommandé pour logos), JPG (pour photos)
2. **Optimisation**: Compressez les images avant de les ajouter (utilisez TinyPNG ou ImageOptim)
3. **Nommage**: Respectez exactement les noms de fichiers indiqués (sensible à la casse)
4. **Poids**: Essayez de garder chaque image sous 500KB pour de meilleures performances
5. **Responsive**: Les images s'adaptent automatiquement aux différentes tailles d'écran

## ✨ Fonctionnalités

- ✅ Multilingue (Français/Anglais) avec @nuxtjs/i18n
- ✅ Design responsive (mobile, tablette, desktop)
- ✅ Navigation avec ancres et smooth scroll
- ✅ Sections: Hero, Services, Services digitaux, À propos, Footer
- ✅ Intégration vidéo YouTube
- ✅ Newsletter avec formulaire
- ✅ Animations et transitions CSS
- ✅ Footer avec liens vers les autres sites du groupe

## 🎨 Design

- **Palette de couleurs**:
  - Or principal: `#d4af37`
  - Or foncé: `#c19b2e`
  - Noir: `#0a0a0a`
  - Gris foncé: `#1a1a1a`

- **Polices**:
  - Poppins (texte principal)
  - Montserrat (titres)

- **Style**: Moderne, élégant, professionnel avec accents dorés

## 🔗 Liens externes

- **CS Conseil**: https://conseil.coumbassa-sanden.com
- **CS Finance**: https://finance.coumbassa-sanden.com
- **CS Tech**: https://tech.coumbassa-sanden.com
- **Alt Connect**: https://altconnect.africa
- **Alt News**: https://conseil.coumbassa-sanden.com/alt-news/

## 🛠️ Technologies

- **Nuxt 3** - Framework Vue.js
- **Vue 3** - Framework JavaScript
- **TypeScript** - Typage statique
- **@nuxtjs/i18n** - Internationalisation
- **CSS pur** - Pas de framework CSS (Tailwind supprimé)
- **Bootstrap Icons** - Icônes
- **Font Awesome** - Icônes supplémentaires

## 📝 Configuration

Le fichier `nuxt.config.ts` contient:
- Configuration i18n (FR/EN)
- Meta tags SEO
- Scripts externes (jQuery, Bootstrap)
- Variables d'environnement

## 🌍 Variables d'environnement

Créez un fichier `.env` à la racine:
```env
API_BASE_URL=https://nextapi.coumbassa-sanden.com
```

## 🐛 Dépannage

**Les images ne s'affichent pas?**
- Vérifiez que les images sont bien dans `public/images/`
- Vérifiez les noms de fichiers (sensible à la casse)
- Rechargez la page avec Ctrl+F5

**Le site ne démarre pas?**
```bash
# Supprimez node_modules et réinstallez
rm -rf node_modules
npm install
npm run dev
```

**Erreur de compilation CSS?**
- Vérifiez qu'il n'y a pas de Tailwind installé
- Le projet utilise uniquement du CSS pur

## 📄 Licence

© 2025 COUMBASSA & SANDEN GROUP. Tous droits réservés.

