import React from 'react';
import style from './Header.module.css';
import Image from 'next/image';

interface HeaderProps {
    navLinks: Array<string>
}

export default function Header(props:HeaderProps) {
    console.log(props);
    return (
       <div>
           <header className={style.header}>
               <img className={style.header__logo} src="/logo/header_logo.svg" alt=""/>
               <ul>{props.navLinks.map(link => <li>{link}</li>)}</ul>
           </header>
       </div>
    );
}