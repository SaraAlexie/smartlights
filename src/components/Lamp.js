/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

const Lamp = () => {

    const lampShade = css`
        height: 9.8125em;
        width: 8.6875em;
        margin-bottom: 1em;
        position: absolute;
        right: 3%;
        z-index: 10;
    `

    const bulp = css`
        width: 22px;
        height: 22px;
        background: #ffd139;
        border-radius: 50%;
        position: relative;
        top: 70%;
        right: 240%;
        filter: drop-shadow(0px 3px 16px #ffc72f);
    `

    return (
        <section>
            <img css={lampShade} src="/imgs/lamp.png" alt="Lamp" />
            <div css={bulp}></div>
        </section>
    );
}
 
export default Lamp;