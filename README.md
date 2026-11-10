# Floral graduation invitation

React, TypeScript, and Vite. Run `npm run dev` for the local preview.

Click the wax seal to open the floral doors. After three seconds in the floral lagoon, mist reveals the graduation quote and year. The next shot introduces the dedication text sentence by sentence.

Swans gently bob on the water, nod their heads, and sway their hat tassels. Their reflections follow the movement. In the dedication scene the swan swims out of the frame while the text remains visible. Drinking and deep neck bending have been removed.

- `src/App.tsx`: scene sequence, doors, seal, and mist transitions.
- `src/SwanScene.tsx`: first lagoon, shared swan artwork and water filters.
- `src/GraduationScene.tsx`: graduation quote, swan and camera movement.
- `src/DedicationScene.tsx`: gentle swimming, departure, petals and sequential text.
- `src/index.css`: animation timing, typography, reflections and water effects.

Image assets and their generation prompts are in `public/images/`. Previously generated drinking and separated-layer assets are retained but are no longer loaded by the animation.

Build: `npm run build`. Lint: `npm run lint`.

Dedication typography uses local Cairo Light and Traditional Arabic font files, with extended Arabic connections to visually match the reference. The original typeface names cannot be verified from the screenshot alone. Sources are recorded in public/fonts/README.txt.

The final name scene appears when the dedication swan's departure animation ends. It displays the graduate's Arabic and English names with a right-facing swan and moving water. A reduced-motion fallback advances after the dedication's reading interval. FinalScene.tsx contains the editable names; the English signature font is bundled locally.
