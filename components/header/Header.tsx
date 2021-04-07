import React, {ReactComponentElement, ReactNode} from 'react';
import style from './Header.module.css';
import Image from 'next/image';
import ISiteMapNode from "../../static_data/static_data_interfaces/ISiteMapNode";

interface HeaderProps {
    siteMap: ISiteMapNode
}

function generateHeaderNavigationLinkBlock(siteMapNode: ISiteMapNode, depthLevel: number = 0):ReactNode {
    return (
        <div className={depthLevel.toString()}>
            <a href="">{siteMapNode.name}</a>
            {siteMapNode.childNodes && <div>
                {siteMapNode.childNodes.map(childNode => generateHeaderNavigationLinkBlock(childNode, depthLevel + 1))}
            </div>}
        </div>
    )
}

function generateHeaderNavigation(siteMap: ISiteMapNode, depthLevel:number = 0):ReactNode {
    return (
        <nav>
            {siteMap.childNodes.map(childNode => generateHeaderNavigationLinkBlock(childNode))}
        </nav>
    )
}

export default function Header(props:HeaderProps) {
    console.log(props);
    return (
       <div>
           <header className={style.header}>
               <img className={style.header__logo} src="/logo/header_logo.svg" alt=""/>
               {generateHeaderNavigation(props.siteMap)}
           </header>
       </div>
    );
}