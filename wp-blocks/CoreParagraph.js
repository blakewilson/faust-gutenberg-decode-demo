import { gql } from "@apollo/client";
import getStyles from "../utils/getStyles.js";

export default function CoreParagraph(props) {
  const attributes = props.attributes;
  const style = getStyles(attributes);
  return (
    <p
      style={style}
      className={attributes?.cssClassName}
      dangerouslySetInnerHTML={{ __html: attributes.content }}
    ></p>
  );
}

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
