import "../faust.config";
import React from "react";
import { useRouter } from "next/router";
import { FaustProvider } from "@faustwp/core";
import { WordPressBlocksProvider } from "@faustwp/blocks";
import blocks from "../wp-blocks";
import "../styles/global.scss";

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <FaustProvider pageProps={pageProps}>
      {/**
       * The WordPressBlocksProvider wraps the entire Faust app and provides the
       * proper context to WordPressBlocksViewer as to what blocks are available
       * in the wp-blocks directory. The "config" prop accepts a "blocks"
       * property which is the wp-blocks/index.js object.
       *
       * @see https://faustjs.org/docs/reference/WordPressBlocksProvider
       */}
      <WordPressBlocksProvider config={{ blocks }}>
        <Component {...pageProps} key={router.asPath} />
      </WordPressBlocksProvider>
    </FaustProvider>
  );
}
