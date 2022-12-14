/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from 'react-router-dom';
import Lamp from './Lamp';

const RoomHeader = ({ name, number }) => {

    const header = css`
        display: flex;
        justify-content: space-between;
        margin: 0 1rem;
    `

    const flexHead = css`
        display: flex;
        align-items: center;
    `

    const headline = css`
        color: #ffffff;
        width: 3rem;
        font-size: 2rem;
    `

    const lights = css`
        font-weight: bold;
        color: #FFD239;
    `

    return (
        <section css={header}>
            <article css={flexHead}>
                <Link to="/" css={headline}>
                    <AiOutlineArrowLeft />
                </Link>
                <section>
                    <h1 css={headline}>{name}</h1>
                    <p css={lights}>{number} lights</p>
                </section>
            </article>
            <Lamp />
        </section>
    );
}
 
export default RoomHeader;