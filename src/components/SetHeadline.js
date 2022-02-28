/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'



const SetHeadline = ({title}) => {

    const headline = css`
        font-size: 1em;
        font-weight: bold;
        color: #002D67;
        padding-top: 1rem;
        padding-left: 1rem;
    `

    return (
        <h2 css={headline}>{title}</h2>
    );
}
 
export default SetHeadline;