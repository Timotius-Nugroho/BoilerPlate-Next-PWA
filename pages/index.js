import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

export default function Home() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <button
        onClick={() => {
          router.push("/sample-page");
        }}
      >
        Go To Sample Page
      </button>
    </div>
  );
}
