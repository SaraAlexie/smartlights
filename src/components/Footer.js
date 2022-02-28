/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'


const Footer = () => {

    const footer = css`
        background-color: #ffffff;
        width: 100%;
        border-top: #707070;
        box-shadow: -5px -5px 5px -5px #707070;
    `

    const wrapper = css`
        width: 15rem;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
    `

    const icon = css`
        padding: 1rem;
    `

    return (
        <footer css={footer}>
            <div css={wrapper}>
                <img css={icon} src="/imgs/bulb.png" alt="bulb" />
                <img css={icon} src="/imgs/home.png" alt="home" />
                <img css={icon} src="/imgs/settings.png" alt="settings" />
            </div>
        </footer>
    );
}
 
export default Footer;