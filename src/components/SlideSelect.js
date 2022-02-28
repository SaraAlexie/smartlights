/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import WhatLight from './WhatLight';
import { Animated } from "react-animated-css";
import { useEffect, useState } from 'react';
import axios from 'axios';

const SlideSelect = ({roomName}) => {

    const wrapper = css`
        margin: 0 0.5rem;
        display: flex;
        overflow: hidden;
        //width: 27em;
    `

    const [lights, setLights] = useState();
    const [lightIsOn, setLightIsOn] = useState();
    const [currentLight, setCurrentLight] = useState();

    useEffect(() => {
        axios(`http://192.168.8.100/api/${process.env.REACT_APP_USERNAME}/groups/${roomName}`)
            .then(response => {
                setLights(response.data.lights)
                setLightIsOn(response.data.lights.all_on)
            })
    }, [roomName]);

    return (
        <Animated animationIn="slideInLeft">
            <section css={wrapper}>
                {lights?.map(light => (
                    <WhatLight 
                        key={light}
                        title={light}
                        light={light}
                        setLightIsOn={setLightIsOn}
                        lightIsOn={lightIsOn}
                        setCurrentLight={setCurrentLight}
                        currentLight={currentLight}
                    />
                ))}
            </section>
        </Animated>
    );
}
 
export default SlideSelect;

//<WhatLight title="Bed light" />