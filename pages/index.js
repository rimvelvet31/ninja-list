import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta nam
          ipsum deserunt inventore distinctio quam voluptates voluptate
          reiciendis, aliquam laboriosam, eaque, officia aspernatur quidem
          similique enim ipsa. Vitae, sequi temporibus.
        </p>
        <p className={styles.text}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta nam
          ipsum deserunt inventore distinctio quam voluptates voluptate
          reiciendis, aliquam laboriosam, eaque, officia aspernatur quidem
          similique enim ipsa. Vitae, sequi temporibus.
        </p>
        <Link href="/ninjas" className={styles.btn}>
          See Ninja Listing
        </Link>
      </div>
    </>
  );
}
