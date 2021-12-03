import React from "react";
import style from './style.module.css'

export default function Button(param) {
    return <button className={style.buttons}>{param.text}</button>
}