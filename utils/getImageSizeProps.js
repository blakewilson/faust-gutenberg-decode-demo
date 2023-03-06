/**
 * Transforms an "attributes" object from a core/image block in
 * WPGraphQL Content Blocks into a usable React "style" object with the proper
 * width and height
 *
 * @param {Object} attributes Attributes object from a core/image block
 * @returns
 */
export default function getImageSizeProps(attributes) {
  const sizeSlug = attributes?.sizeSlug;
  if (sizeSlug) {
    return {
      width: attributes?.width ? attributes?.width : imageSizeToWidth[sizeSlug],
      height: attributes?.height
        ? attributes?.height
        : imageSizeToHeight[sizeSlug],
    };
  }
  return {
    width: attributes?.width ?? 683,
    height: attributes?.height ?? 1024,
  };
}

const imageSizeToWidth = {
  thumbnail: 150,
  medium: 200,
  large: 683,
  "full-size": 1707,
};

const imageSizeToHeight = {
  thumbnail: 150,
  medium: 300,
  large: 1024,
  "full-size": 2560,
};
