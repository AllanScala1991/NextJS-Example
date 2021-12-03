import React from "react";
import style from './style.module.css'

export default function Input(params) {
    return( 
        <>
        <label className={style.labels} >{params.text}</label>
        <input className={style.inputs} type={params.type} placeholder={params.placeholder}/>
        </>
    )
}