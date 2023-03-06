export default function getFragmentDataFromBlocks(blocks) {
  const entries = Object.keys(blocks)
    .map((key) => {
      return blocks[key]?.fragments?.entry
        ? blocks[key]?.fragments?.entry
        : null;
    })
    .filter(Boolean);
  const blockKeys = Object.keys(blocks)
    .map((key) => {
      return blocks[key]?.fragments?.key ? blocks[key]?.fragments?.key : null;
    })
    .filter(Boolean);
  return {
    entries: entries
      .map((fragment) => `${getGqlString(fragment)}\n`)
      .join("\n"),
    keys: blockKeys.map((key) => `...${key}\n`).join("\n"),
  };
}

function normalize(string) {
  return string.replace(/[\s,]+/g, " ").trim();
}

function getGqlString(doc) {
  return doc.loc && normalize(doc.loc.source.body);
}
