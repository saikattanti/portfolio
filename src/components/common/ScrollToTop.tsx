"use client";

import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import styles from "@/app/scroll.module.scss";

const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState<boolean>(false);

  useEffect(() => {
    const handleShowBtn = () => {
      setShowTopBtn(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleShowBtn);
    return () => window.removeEventListener("scroll", handleShowBtn);
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!showTopBtn) return null;

  return (
    <div className={styles.topToBottom}>
      <button
        type="button"
        onClick={goToTop}
        className={styles.btnStyle}
        aria-label="Scroll to top"
        title="Back to top"
      >
        <FontAwesomeIcon icon={faArrowUp} className={styles.iconStyle} />
      </button>
    </div>
  );
};

export default ScrollToTop;
