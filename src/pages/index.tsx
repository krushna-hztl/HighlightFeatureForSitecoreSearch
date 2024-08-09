import Image from "next/image";
import { Inter } from "next/font/google";
import HighlightContentWithInputWidget from "../../HighlightContentWithInput";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <HighlightContentWithInputWidget rfkId="rfkid_111" />
    </>
  );
}
