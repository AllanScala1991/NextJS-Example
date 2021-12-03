import React from "react";
import style from './style.module.css'

export default function Link(params) {
    return <a className={style.link} href={params.href}>{params.text}</a>
}