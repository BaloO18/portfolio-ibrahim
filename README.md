# Portfolio — Ibrahim Pascal Keïta

Site vitrine bilingue (FR / EN) en HTML, CSS et JavaScript, sans dépendance ni installation.

## Structure

```
portfolio-ibrahim/
├── index.html      → contenu de la page (texte français)
├── css/style.css   → couleurs, typographies, mise en page
├── js/main.js      → traductions anglaises, menu mobile, animations
└── img/            → dépose ici ta photo (photo.jpg)
```

## Lancer le site sur ton ordinateur

**Option 1, la plus simple :** double-clique sur `index.html`. Il s'ouvre dans ton navigateur.

**Option 2, avec un petit serveur local** (plus proche du site en ligne) :

```bash
cd portfolio-ibrahim
python3 -m http.server 8000
```

Puis ouvre http://localhost:8000 dans ton navigateur.

## Mettre le site en ligne gratuitement (Netlify)

1. Crée un compte sur https://app.netlify.com (tu peux te connecter avec Gmail).
2. Va dans **Sites** → **Add new site** → **Deploy manually**.
3. Glisse-dépose le dossier `portfolio-ibrahim` entier dans la zone prévue.
4. Ton site est en ligne en quelques secondes, à une adresse du type `ibrahim-keita.netlify.app` (modifiable dans **Site settings**).

Plus tard, tu pourras brancher un nom de domaine (par exemple `ibrahimkeita.com`).

## Personnaliser

- **Ta photo :** remplace `img/photo.jpg` par une nouvelle photo portant le même nom.
- **Ton LinkedIn :** déjà relié dans la section Contact de `index.html`.
- **Textes en français :** directement dans `index.html`.
- **Textes en anglais :** dans `js/main.js`, en face de la même clé (`data-i18n`).
- **Couleurs :** en haut de `css/style.css` (variables `--terre`, `--ocre`, `--vert`…).
"# portfolio-ibrahim" 
