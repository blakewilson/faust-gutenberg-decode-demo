import { getWordPressProps, WordPressTemplate } from "@faustwp/core";

/**
 * Setup the Faust Template Hierarchy system.
 *
 * @see https://faustjs.org/docs/templates#setting-up-the-template-system
 */
export default function Page(props) {
  return <WordPressTemplate {...props} />;
}

export function getStaticProps(ctx) {
  return getWordPressProps({ ctx });
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}
