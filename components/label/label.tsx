import React from "react";
import style from './style.module.css'
export default function Label(params) {
    return <label className={style.labels}>{params.text}</label>
}