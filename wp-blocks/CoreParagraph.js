import { gql } from "@apollo/client";
import getStyles from "../utils/getStyles.js";

/**
 * This React component is used for rendering any "CoreParagraph"s that are
 * requested from WPGraphQL Content Blocks.
 */
export default function CoreParagraph(props) {
  const attributes = props.attributes;

  /**
   * getStyles is a helper function to map the attributes data to an
   * actual styles object that can be used in React.
   *
   * @see ../utils/getStyles.js
   */
  const style = getStyles(attributes);

  return (
    <p
      style={style}
      className={attributes?.cssClassName}
      dangerouslySetInnerHTML={{ __html: attributes.content }}
    ></p>
  );
}

/**
 * The Block's fragment. This is the data requirements for this block. Any of
 * this data can be accessed in the Block's "props". For instance, if I wanted
 * to access the textColor, I could call "props.attributes.textColor" in
 * the React component above.
 *
 * @see https://faustjs.org/docs/gutenberg/tutorial/create-a-block-from-wordpress-core
 */
CoreParagraph.fragments = {
  entry: gql`
    fragment CoreParagraphFragment on CoreParagraph {
      attributes {
        content
        fontSize
        textColor
        backgroundColor
        cssClassName
        style
      }
    }
  `,
  key: `CoreParagraphFragment`,
};
