import isObject from "lodash/isObject";
import map from "lodash/map";
import camelCase from "lodash/camelCase";

/**
 * Converts a CSS string into a usable React style.
 *
 * @example background-color: #728b51; -> { backgroundColor: "#728b51" }
 *
 * @param {string} css The CSS string.
 */
export const cssToReactStyle = (css) => {
  // If object is given, return object (could be react style object mistakenly provided)
  if (isObject(css)) {
    return css;
  }

  // If falsy, then probably empty string or null, nothing to be done there
  if (!css) {
    return {};
  }

  // Only accepts strings
  if (typeof css !== "string") {
    // TODO sentry
    console.error(
      `Unexpected type "${typeof css}" when expecting string, with value "${css}"`
    );
    return {};
  }

  const style = {};
  const rules = css.split(";");
  map(rules, (rule) => {
    let [key, value] = rule.split(":");

    if (key && value) {
      key = key.trim();
      value = value.trim();

      style[camelCase(key)] = value;
    }
  });

  return style;
};
