import React from "react";
import { useInView } from "react-intersection-observer";
import styles from "./ScrollBanner.module.css";
import SeasonoffBanner from "./SeasonoffBanner";
import LookbookBanner from "./LookbookBanner";
import OffLineBanner from "./OffLineBanner";

const components = {
  seasonoffbanner: SeasonoffBanner,
  lookbookbanner: LookbookBanner,
  offlinebanner: OffLineBanner,
};

export default function ScrollBanner({ type }) {
  const { ref, inView } = useInView({
    root: null,
    threshold: 0.3,
  });

  const DynamicComponent = components[type];
  return (
    <div ref={ref} className={styles.container}>
      {inView && (
        <div className={styles.bannercontainer}>
          {DynamicComponent && <DynamicComponent />}
        </div>
      )}
    </div>
  );
}
