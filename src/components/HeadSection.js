/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'


const HeadSection = () => {

    const header = css`
        display: flex;
        justify-content: space-between;
        width: 20rem;
        margin: 0 auto;
    `

    const headline = css`
        color: #ffffff;
        width: 6rem;
    `

    const user = css`
        width: 5em;
        height: 5em;
        padding: 1.25em 0;
    `

    return (
        <section css={header}>
            <h1 css={headline}>Control Panel</h1>
            <img css={user} src="/imgs/user.png" alt="user" />
        </section>
    );
}
 
export default HeadSection;