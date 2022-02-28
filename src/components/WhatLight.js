/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useEffect } from 'react'
import axios from 'axios'


const WhatLight = ({ title, light, lightIsOn, setLightIsOn, currentLight, setCurrentLight }) => {

    const select = css`
        background-color: ${light === currentLight ? "blue" : "white"};
        border: none;
        display: flex;
        justify-content: space-between;
        justify-content: center;
        align-items: center;
        width: 8em;
        height: 3em;
        border-radius: 0.75em;
        margin: 0 0.5em;
    `

    const lightTitle = css`
        color: #002D67;
        margin-left: 0.5rem;
        font-size: 1.1rem;
    `

    useEffect(() => {
        axios.put(`http://192.168.8.100/api/${process.env.REACT_APP_USERNAME}/lights/${currentLight}/state`, {
            on: lightIsOn
        })
    }, [lightIsOn, currentLight]);

    const handleClick = () => {
        setLightIsOn(!lightIsOn)
        setCurrentLight(light)
    }

    return (
        <div css={select} onClick={handleClick}>
            <img src="/imgs/bluebulb.png" alt="Bulb" />
            <h3 css={lightTitle}>{title}</h3>
        </div>
    );
}
 
export default WhatLight;