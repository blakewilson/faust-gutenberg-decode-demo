import { gql } from "@apollo/client";
import Head from "next/head";
import EntryHeader from "../components/entry-header";
import Footer from "../components/footer";
import Header from "../components/header";
import { WordPressBlocksViewer } from "@faustwp/blocks";
import blocks from "../wp-blocks";
import flatListToHierarchical from "../utils/flatListToHierarchical";
import getFragmentDataFromBlocks from "../utils/getFragmentDataFromBlocks";

export default function Component(props) {
  // Loading state for previews
  if (props.loading) {
    return <>Loading...</>;
  }

  const { title: siteTitle, description: siteDescription } =
    props.data.generalSettings;
  const menuItems = props.data.primaryMenuItems.nodes;
  const { title, contentBlocks } = props.data.nodeByUri;

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

Component.query = gql`
  ${Header.fragments.entry}
  ${getFragmentDataFromBlocks(blocks).entries}
  query GetSingular($uri: String!) {
    nodeByUri(uri: $uri) {
      ... on NodeWithTitle {
        title
      }
      ... on NodeWithContentBlocks {
        contentBlocks(flat: true) {
          cssClassNames
          isDynamic
          name
          id: nodeId
          parentId
          renderedHtml

          ${getFragmentDataFromBlocks(blocks).keys}
        }
      }
    }
    ...HeaderFragment
  }
`;
