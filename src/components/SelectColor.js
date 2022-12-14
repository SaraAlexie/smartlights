/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import ColorButton from './ColorButton'
import HueColors from './HueColors'
import {Animated} from "react-animated-css";


const SelectColor = ({color, roomName}) => {

    const wrapper = css`
        display: flex;
        justify-content: space-between;
        justify-content: center;
        align-items: center;
        margin: 0 1rem;
    `

    const hues = css`
        padding-left: 1rem;
        border-radius: 50%;
        height: 1.8125em;
        width: 1.8125em;
        margin: 0 0.6rem;
        background-color: white;
        position: relative;
    `

    const plus = css`
        font-weight: bold;
        font-size: 1em;
        line-height: 1.185em;
        position: absolute;
        top: -42%;
        left: 34%;
    `

    return (
        <Animated animationIn="slideInLeft">
            <section css={wrapper}>
                <ColorButton color={HueColors.pink} roomName={roomName} />
                <ColorButton color={HueColors.green} roomName={roomName} />
                <ColorButton color={HueColors.blue} roomName={roomName} />
                <ColorButton color={HueColors.purple} roomName={roomName} />
                <ColorButton color={HueColors.magenta} roomName={roomName} />
                <ColorButton color={HueColors.yellow} roomName={roomName} />
                <div css={hues}>
                    <p css={plus}>+</p>
                </div>
            </section>
        </Animated>
        
    );
}
 
export default SelectColor;
