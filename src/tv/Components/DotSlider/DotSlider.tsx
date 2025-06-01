import React from "react";
import styles from "src/tv/Components/DotSlider/DotSlider.module.scss";

interface DotSliderProps {
  totalDots: number;
  activeIndex: number;
}

const DotSlider: React.FC<DotSliderProps> = ({ totalDots, activeIndex }) => {
  return (
    <div className={styles["dot-container"]}>
      {Array.from({ length: totalDots }, (_, index) => (
        <div
          key={index}
          className={`${styles.dot} ${index === activeIndex ? styles["active-dot"] : ""
            }`}
        ></div>
      ))}
    </div>
  );
};

export default DotSlider;
