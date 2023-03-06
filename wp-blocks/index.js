import CoreParagraph from "./CoreParagraph";
import CoreColumn from "./CoreColumn";
import CoreColumns from "./CoreColumns";
import CoreImage from "./CoreImage";

/**
 * This object acts as the registry of blocks in your React Gutenberg Bridge.
 * Any block that is added here may be used when rendering contentBlocks from
 * WPGraphQL Content Blocks.
 *
 * @see https://faustjs.org/docs/gutenberg/getting-started
 */
export default {
  CoreParagraph,
  CoreColumn,
  CoreColumns,
  CoreImage,
};
