import { gql } from "@apollo/client";
import Head from "next/head";
import EntryHeader from "../components/entry-header";
import Footer from "../components/footer";
import Header from "../components/header";
import { WordPressBlocksViewer } from "@faustwp/blocks";
import blocks from "../wp-blocks";
import flatListToHierarchical from "../utils/flatListToHierarchical";
import getFragmentDataFromBlocks from "../utils/getFragmentDataFromBlocks";

/**
 * This is a Faust Template for resolving singular templates (posts, pages).
 *
 * If you are unfamiliar with Faust Templates, they resolve much like the
 * WordPress Template Hierarchy.
 *
 * @see https://faustjs.org/docs/templates
 */
export default function Component(props) {
  const { title: siteTitle, description: siteDescription } =
    props.data.generalSettings;
  const menuItems = props.data.primaryMenuItems.nodes;
  const { title, contentBlocks } = props.data.nodeByUri;

  /**
   * Get contentBlocks from props.data and pass them through
   * flatListToHierarchical() to re-assemble them into a proper
   * node hierarchy.
   */
  const blocks = flatListToHierarchical(contentBlocks);

  return (
    <>
      <Head>
        <title>{`${title} - ${siteTitle}`}</title>
      </Head>

      <Header
        siteTitle={siteTitle}
        siteDescription={siteDescription}
        menuItems={menuItems}
      />

      <main className="container">
        <EntryHeader title={title} />

        {/**
         * This component accepts contentBlocks data from WPGraphQL
         * and resolves the block data with blocks that exist in
         * your wp-blocks directory.
         *
         * If a block is found in the contentBlocks data but not in
         * wp-blocks directory, WordPressBlocksViewer will fallback
         * to renderedHtml for that block.
         *
         * @see https://faustjs.org/docs/reference/WordPressBlocksViewer
         */}
        <WordPressBlocksViewer contentBlocks={blocks} />
      </main>

      <Footer />
    </>
  );
}

Component.variables = ({ uri }, ctx) => {
  return {
    uri,
  };
};

/**
 * Compose the GraphQL query for our page's data.
 */
Component.query = gql`
  # Header component fragment
  ${Header.fragments.entry}

  # Get all block fragments and add them to the query
  ${getFragmentDataFromBlocks(blocks).entries}

  query GetSingular($uri: String!) {
    nodeByUri(uri: $uri) {
      ... on NodeWithTitle {
        title
      }
      ... on NodeWithContentBlocks {
        # Get contentBlocks with flat=true and the nodeId and parentId
        # so we can reconstruct them later using flatListToHierarchical()
        contentBlocks(flat: true) {
          cssClassNames
          isDynamic
          name
          id: nodeId
          parentId
          renderedHtml

          # Get all block fragment keys and call them in the query
          ${getFragmentDataFromBlocks(blocks).keys}
        }
      }
    }
    ...HeaderFragment
  }
`;
