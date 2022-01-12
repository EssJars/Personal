import React from 'react'
import styled from 'styled-components';

const Link = styled.a`
    &.under{
        position: relative;
    }
    &.under::before{
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        width: 0;
        height: 2.5px;
        background-color: #6196E4;
        transition: width 0.6s cubic-bezier(0.25, 1, 0.5, 1);
    }
    @media (hover: hover) and (pointer: fine) {
    &.under:hover::before{
        left: 0;
        right: auto;
        width: 100%;
    }
    }
`
const HoverLink = ({url,classNames,text}) => (
    <Link
        href={url}
        className={`${classNames} under text-white inline-block`}
        target="_blank"
        rel="noreferrer"
    >
        {text}
    </Link>
)
 
export default HoverLink;