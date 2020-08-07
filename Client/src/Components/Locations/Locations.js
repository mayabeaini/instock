import React from "react";
import "./Locations.scss";
import SearchIcon from "../../assets/Icons/SVG/Icon-search.svg";
import Warehouses from "./Warehouses";

export default function Locations() {
  return (
    <div className="locations">
      <div className="locations__header">
        <h1>Locations</h1>

        <div className="locations__header--search">
          <img
            className="locations__header--search__icon"
            src={SearchIcon}
            alt="Icon"
          />

          <input
            className="locations__header--search__box"
            type="text"
            name="Search"
            placeholder="Search"
          />
        </div>
      </div>

      <Warehouses />
    </div>
  );
}
