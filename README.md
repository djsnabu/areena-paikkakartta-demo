# Kivikylän Areenan paikkakartta – Vue 3

Upotettava Vue 3 + Vite -paikkakarttademo Kivikylän Areenan lohkoille.

## Rakenne

- `src/App.vue` – sovelluksen tila, paikkavalinta ja postMessage-rajapinta
- `src/components/ArenaMap.vue` – areenan yleiskartta ja 19 katsomolohkoa
- `src/components/SeatGrid.vue` – lohkon rivit ja valittavat paikat
- `src/components/CartPanel.vue` – valitut paikat, hinnat ja kassa
- `src/data/sections.js` – lohkojen rivi-, hinta- ja paikkatiedot
- `src/styles.css` – responsiivinen ulkoasu
- `reference/` – alkuperäinen katsomokartta-aineisto

## Kehitys

```bash
npm install
npm run dev
```

Kehityspalvelin avautuu Headscale-osoitteeseen:

`http://100.64.0.2:4173/`

## Tuotantobuild

```bash
npm run build
npm run preview
```

Build syntyy `dist/`-hakemistoon.

## Upotus

```html
<iframe
  src="https://LIPPUKAUPAN-DOMAIN/seatmap/"
  title="Valitse paikat Kivikylän Areenalta"
  style="width:100%;min-height:780px;border:0"
></iframe>
```

Sovellus lähettää upottavalle sivulle kaksi tapahtumaa:

- `kivikyla-seatmap:selection`
- `kivikyla-seatmap:checkout`

Tuotantoversiossa `postMessage`-kohde `'*'` vaihdetaan lippukaupan tarkaksi originiksi, ja paikan saatavuus sekä varaus vahvistetaan palvelimella.

## Nykyinen ympäristöhuomio

Vue-lähdekoodi on valmis, mutta tämän koneen ulospäin menevät HTTPS-yhteydet npm-rekisteriin ovat tällä hetkellä estyneet/aikakatkaisevat. Siksi `node_modules` ja tuotantobuild eivät ole vielä syntyneet. Macille portissa 4173 näkyvä demo palvellaan väliaikaisesti toimivasta staattisesta kopiosta hakemistossa `/home/nabil/areena-paikkakartta-live`.
