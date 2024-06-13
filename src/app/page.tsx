import Image from "next/image";
import styles from "./page.module.css";
import { IndeterminateLoader } from "@/components/IndeterminateLoader/IndeterminateLoader";

export default function Home() {
  return (
    <div className="layout-wrapper">
      <IndeterminateLoader type="horizontal"></IndeterminateLoader>
    </div>
  );
}
