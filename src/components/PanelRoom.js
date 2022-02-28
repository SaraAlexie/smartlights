/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'


const PanelRoom = ({ name, lights, img }) => {

    const wrapper = css`
        height: 10rem;
        width: 10rem;
        background-color: #ffffff;
        border-radius: 25%;
        box-shadow: 3px 3px 17px rgba(112,112,112,0.2);
    `

    const roomLogo = css`
        padding: 1em 0 0 1.5em;
    `

    const header = css`
        color: #393939;
        padding-left: 1.5rem;
        margin: 0.5rem 0 0 0;
    `

    const roomLights = css`
        color: #FFA939;
        font-weight: bold;
        padding-left: 1.5rem;
        margin: 0;
    `

    return (
        <div css={wrapper}>
            <img css={roomLogo} src={img} alt="Logo" />
            <h3 css={header}>{name}</h3>
            <p css={roomLights}>{lights}</p>
        </div>
    )
    ;
}
 
export default PanelRoom;