$defaultValue = "src/components"

while (1) {
    
$path = read-host("Path [$defaultValue]")
if ($path -eq "") {$path=$defaultValue} else {
    $defaultValue=$path
}
$name = read-host("$path ")

mkdir "$path/$name"
pushd "$path/$name"
"export {default} from './$name'" > 'index.js'
".parent {

}" > "$name.module.css"
"
import styles from './$name.module.css';
import {useState,useEffect} from 'react';

import React from 'react';

export default function $name() {
    return <>
        <div className={styles.parent}>
        </div>
    </>;
}
">"$name.jsx"
popd

}