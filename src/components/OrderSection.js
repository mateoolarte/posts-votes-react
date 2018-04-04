import React from "react";
import "../styles/OrderSection.css"

export default function OrderSection(props) {
  return (
    <div className="sortPosts">
      <span className="has-text-weight-semibold margin-right-1">Orden:</span>
      <button
        onClick={props.asc}
        className="button is-link is-outlined margin-right-1"
        id="asc-btn"
      >
        Ascendente
      </button>
      <button
        onClick={props.desc}
        className="button is-link"
        id="desc-btn"
      >
        Descendente
      </button>
    </div>
  );
}