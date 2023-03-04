import styles from "./Basic.module.css";
import { useState, useEffect } from "react";
import React from "react";
import GridLayout from "react-grid-layout";

import { useDispatch, useSelector } from "react-redux";

export default function Basic() {
  const layout = useSelector((state) => state.layout);
  const Beans = useSelector((state) => state.Beans);

  return (
    <div className={styles.parent}>
      <GridLayout cols={12} rowHeight={30} className={`${styles.grid} layout`}>
        {Beans.names.map((x, i) => (
          <div key={x} data-grid={Beans.layouts[x].layout}>
            {Beans.BeansList[x]}
          </div>
        ))}{" "}
      </GridLayout>
    </div>
  );
}
