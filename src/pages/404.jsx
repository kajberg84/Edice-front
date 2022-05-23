// imports
import Link from "next/link";

// components
import { Seo } from "../components/seo/Seo";
import { Wrapper } from "../components/layout/wrapper/Wrapper";

// helpers
import { RoutingPath } from "../helpers/RoutingPath";

// styles
import styles from "../styles/pages/NotFound.module.scss";

export default function NotFound() {
  return (
    <>
      <Seo
        title="E-dice - page not found"
        description="Lorem ipsum dolor sit amtet"
        image="/vercel.svg"
        pageUrl={RoutingPath.home}
      />
      <Wrapper>
        <div className={styles.notfound_wrapper}>
          <div className={styles.notfound_img_wrapper}>
            <img
              className={styles.notfound_img}
              src="/logos/Edice_logo_1.svg"
              alt="20 sided die showing face with 1"
            />
          </div>
          <div className={styles.notfound_text_wrapper}>
            <h1>We rolled a one on perception to find this page.</h1>
            <p> Critical fail - 404 - page not found </p>
            <Link href={RoutingPath.Home}>
              <a className={styles.notfound_button}>Go back to the homepage</a>
            </Link>
          </div>
        </div>
      </Wrapper>
    </>
  );
}
