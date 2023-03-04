import styles from "./Musica.module.css";
import { useState, useEffect } from "react";

import React from "react";

import { Fieldset } from "primereact/fieldset";

import { Button } from "primereact/button";

export default function Musica() {
  return (
    <>
      <div className={styles.parent}>
        {" "}
        <div className="card">
          <Fieldset legend="Musica" toggleable>
            <p className="m-0">
              <div className="card flex justify-content-center">
                <span className="p-buttonset">
                  <Button label="Previous" icon="pi pi-arrow-circle-left" />
                  <Button label="Pause" icon="pi pi-pause" />
                  <Button label="Next" icon="pi pi-arrow-circle-right" />
                </span>
              </div>
            </p>
          </Fieldset>
        </div>
      </div>
    </>
  );
}
