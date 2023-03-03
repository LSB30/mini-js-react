import "./src/styles/settings/colors.css"
import "./src/styles/elements/base.css"
import "./src/styles/generic/reset.css"

import CardGame from "./src/components/Cardgame";

const $root = document.querySelector("#app");
const $htmlCardGame = CardGame();


$root.insertAdjacentHTML('beforeend', $htmlCardGame);