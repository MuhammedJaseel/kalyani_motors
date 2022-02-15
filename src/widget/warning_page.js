import React from "react";
import "../style/wp1.css";
import loadingIcon from "../asset/loading.gif";

export function LoadingPage() {
  return (
    <div className="wp1_a">
      <div>
        <img src={loadingIcon} width="180" />
        {/* <div className="wp1_b">Loading...</div> */}
      </div>
    </div>
  );
}

export function ErrorPage({ e }) {
  return (
    <div className="wp1_a">
      <div>
        <img
          loading="lazy"
          width="170"
          src="https://www.kalyanimotors.com/application/themes/maruti/assets/img/logo.png"
          alt="Kalyani"
        />
        <div className="wp1_b">Error: {e}</div>
      </div>
    </div>
  );
}
