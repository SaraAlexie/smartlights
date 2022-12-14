/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useState } from 'react';
import { throttle } from 'lodash'
import SetHeadline from './SetHeadline';


const Intensity = ({ setBrightness, brightness }) => {

    const slider = css`
        display: flex;
    `

    const lightBulb = css`
        padding: 1rem;
    `

    const slideRange = css`
        margin-top: 1.5rem;
        width: 20em;
    `

    const handleBrightness = e => setBrightness(Number(e.target.value))
    const [brightValue] = useState(brightness)
    const throttleHandle = throttle(value => handleBrightness(value), 500, { 'leading': false })

    return (
        <section>
            <SetHeadline title="Intensity" />
            <div css={slider}>
                <img css={lightBulb} src="/imgs/lightoff.png" alt="off" />
                <input css={slideRange} type="range" min="0" max="254" onChange={throttleHandle} value={brightValue} />
                <img css={lightBulb} src="/imgs/lighton.png" alt="on" />
            </div>
        </section>
    );
}
 
export default Intensity;