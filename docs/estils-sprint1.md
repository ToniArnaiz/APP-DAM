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
3. Obrir `Nou viatge`, crear un viatge i comprovar que **el modal es tanca** i el viatge nou apareix **al final** de la llista.
4. Crear diversos viatges i comprovar que **les targetes continuen en una sola columna i es desplacen verticalment dins de la llista** (`overflow-y: auto`), sense ampliar la pàgina. Es pot accedir al contenidor amb el teclat (`Tab`) i desplaçar-se amb les fletxes o Page Down.
5. `npm run build`: sense errors. Revisar consola del navegador.
6. La lògica d'eliminació i navegació no s'ha modificat.

## Correccions addicionals de la branca `s1-estilos`

- `src/pages/Home.jsx`: en crear un viatge, el formulari es tanca amb `setIsViaje_FormOpen(false)`. S'utilitza l'actualització funcional de `useState` i es calcula un ID nou també quan la llista s'ha quedat buida.
- El viatge acabat de crear s'afegeix al final de l'array perquè la llista mantingui l'ordre de creació.
- `src/index.css`: les targetes tornen a una columna (`display: flex; flex-direction: column`) i la llista té `overflow-y: auto` i una alçada limitada a l’espai disponible de la pantalla, amb el botó i la capçalera fixes.

## Pendents fora de CSS

- `navigate_to` només fa `console.log` (pendent connectar a la pantalla de detall).
- `rango_fechas` utilitza `getDay()` per al dia inicial, cosa que pot mostrar un dia de la setmana en lloc del dia del mes.
- La barra inferior i les pantalles d'itinerari, despeses i activitats s'implementaran en sprints posteriors.

## Ajustament final: scroll vertical en format llista

- Les targetes es mostren amb la mateixa amplada, una sota l’altra; ja no són un carrusel ni s’encongeixen.
- La llista ocupa l’espai lliure del mòbil i només ella fa scroll vertical, sense allargar la pantalla.
- Quan es crea un viatge, s’afegeix **a baix de la llista**; el formulari **es tanca automàticament**.
- Provar amb diversos viatges en una vista mòbil de 375 × 812 i comprovar que no hi ha scroll horitzontal global.
