import { colorsMap, fontSizesMap } from "../styles/variables.js";
import { cssToReactStyle } from "./cssToReactStyle.js";
import { compileCSS } from "@wordpress/style-engine";

export default function getStyles(attributes) {
  console.log(attributes.style);

  return {
    backgroundColor: colorsMap[attributes?.backgroundColor],
    color: colorsMap[attributes?.textColor],
    fontSize: fontSizesMap[attributes?.fontSize],
    borderColor: colorsMap[attributes?.borderColor],
    ...(attributes.style && cssToReactStyle(compileCSS(attributes.style))),
  };
}
