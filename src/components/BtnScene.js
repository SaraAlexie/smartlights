/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'


const BtnScene = ({ title, color }) => {

    const btn = css`
        color: #ffffff;
        border-radius: 1.5625em;
        background-color: ${color};
        width: 10.3125em;
        height: 5.875em;
        display: flex;
        justify-content: center;
        align-items: center;
    `

    const icon = css`
        height: 1.4em;
        width: 1.4em;
    `

    return (
        <div css={btn}>
            <img css={icon} src="/imgs/whitebulb.png" alt="lightbulb" />
            <h3>{title}</h3>
        </div>
    );
}
 
export default BtnScene;