import Link from "next/link";
import Footer from "../components/footer";
import Header from "../components/header";

export default function Page() {
  return (
    <div>
      React Gutenberg Bridge Example Project. Please visit a page (e.g.{" "}
      <Link href="/sample-page">/sample-page</Link>) to see the example.
    </div>
  );
}
