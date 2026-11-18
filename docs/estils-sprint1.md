# S1 · Estils

## Canvis inclosos

- `src/index.css`: estil mobile-first, variables, reset, capçalera, targetes, botó principal, formulari modal i classes base dels pròxims sprints.
- `index.html`: títol Vianda i idioma `ca` (l'app es presenta en català); font Inter.
- `Home.jsx`, `Viaje_Card.jsx`, `Viaje_Form.jsx`: únicament ajustos d'estructura de presentació i `className` necessaris per aplicar els estils; no es canvia la gestió d'estat ni les dades.
- `App.jsx`: retirada de l'import de `App.css` buit, perquè el professor demana CSS a `index.css`.
- `src/assets/covers/`: dues il·lustracions locals per a les targetes dels viatges de mostra, sense necessitat d'APIs ni d'imatges remotes.

## Referència del professor

La guia d'arrencada explica que s'ha de copiar `css/estilos.css` de **la referència assignada pel professor**. Aquí s'ha utilitzat **el prototip propi** com a font visual, tal com ha demanat l'equip. Abans d'integrar la branca cal contrastar-la amb la referència assignada i confirmar si el professor accepta aquesta adaptació; la rúbrica permet apropar-se més al Figma, però les diferències respecte a la referència s'han de consensuar.

## Validacions recomanades

1. `npm install` i `npm run dev`; obrir `http://localhost:5173`.
2. Mode mòbil (375 × 812): cap desbordament horitzontal; capçalera, dues targetes i botó visibles.
3. Obrir `Nou viatge`: formulari correcte, amb etiquetes, focus i botó de tancar.
4. `npm run build`: sense errors. Revisar consola del navegador.
5. La lògica d'eliminació i navegació no s'ha modificat.

## Pendents fora de CSS

- `navigate_to` només fa `console.log` (pendent connectar a la pantalla de detall).
- El formulari de creació no es tanca automàticament en desar; aquesta és una decisió funcional de l'equip.
- `rango_fechas` utilitza `getDay()` per al dia inicial, cosa que pot mostrar un dia de la setmana en lloc del dia del mes.
- La barra inferior i les pantalles d'itinerari, despeses i activitats s'implementaran en sprints posteriors.
