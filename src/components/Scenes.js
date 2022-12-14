/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import BtnScene from './BtnScene';
import SetHeadline from "./SetHeadline";
import HueColors from './HueColors'
import { Animated } from 'react-animated-css';

const Scenes = () => {

    const wrapper = css`
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 1rem;
        padding: 0 1em;
    `

    return (
        <Animated animationIn="slideInLeft">
            <section>
                <SetHeadline title="Scenes" />
                <section css={wrapper}>
                    <BtnScene title="Birthday" color={HueColors.pink} />
                    <BtnScene title="Party" color={HueColors.purple} />
                    <BtnScene title="Relax" color={HueColors.blue} />
                    <BtnScene title="Fun" color={HueColors.green} />
                </section>
            </section>
        </Animated>
        
    );
}
 
export default Scenes;