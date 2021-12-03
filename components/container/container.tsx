import React from "react";
import Button from "../button/button";
import Input from "../input/input";
import Label from "../label/label";
import Link from "../link/link";
import Logo from "../logo/logo";
import style from './style.module.css'

export default function Container() {
    return (
        <div className={style.container}>

            <div className={style.boxLeft}>
                <Logo/>
                <Input text={"Usuário"} placeholder={"Digite seu usuário"} type={"text"}/>
                <Input text={"Senha"} placeholder={"Digite sua senha"} type={"password"}/>
                <Button text={"ACESSAR"}/>
            </div>

            <div className={style.boxRight}>
                <Label text={"Ainda não possui conta ?"}/>
                <Link text={'Registre - se'} href={'#'}/>
            </div>

        </div>
    )
}