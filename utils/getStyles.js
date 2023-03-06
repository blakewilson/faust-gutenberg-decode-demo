import { colorsMap, fontSizesMap } from "../styles/variables.js";
import { cssToReactStyle } from "./cssToReactStyle.js";
import { compileCSS } from "@wordpress/style-engine";

/**
 * Transform an "attributes" object from WPGraphQL Content Blocks into a
 * usable React "style" object with proper colors and font sizes from the variables.js file.
 *
 * @param {Object} attributes Attributes object for a Block from WPGraphQL Content Blocks
 */
export default function getStyles(attributes) {
  return {
    backgroundColor: colorsMap[attributes?.backgroundColor],
    color: colorsMap[attributes?.textColor],
    fontSize: fontSizesMap[attributes?.fontSize],
    borderColor: colorsMap[attributes?.borderColor],
    ...(attributes.style &&
      cssToReactStyle(compileCSS(JSON.parse(attributes.style)))),
  };
}
