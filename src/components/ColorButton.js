/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import axios from 'axios';
import convert from 'color-convert';
import { useEffect, useState } from 'react';


const ColorButton = ({color, roomName}) => {

    const hues = css`
        padding-left: 1rem;
        border-radius: 50%;
        height: 1.8125em;
        width: 1.8125em;
        margin: 0 0.6rem;
    `

    const [hsvValue, setHsvValue] = useState();

    useEffect(() => {
        setHsvValue(convert.hex.hsv(color))
    }, [color]);

    const handleClick = () => {
        if(hsvValue) {
            /*console.log("Hue", hsvValue[0] * 182);
            console.log("Sat", Math.ceil(hsvValue[1] * 2.54));
            console.log("Bri", Math.ceil(hsvValue[2] * 2.54))*/
            axios.put(`http://192.168.8.100/api/${process.env.REACT_APP_USERNAME}/groups/${roomName}/action`, {
                hue: hsvValue[0] * 182.04,
                sat: Math.ceil(hsvValue[1] * 2.54),
                bri: Math.ceil(hsvValue[2] * 2.54),
        })
        }
    }

    return (
        <div css={hues} onClick={handleClick} style={{backgroundColor: color}}></div>
    );
}
 
export default ColorButton;