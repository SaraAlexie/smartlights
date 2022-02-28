/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import PanelRoom from './PanelRoom'
import { useContext } from 'react'
import { LightContext } from "../contexts/LightContext";
import { Link } from 'react-router-dom'

const AllRooms = () => {

    const {groups} = useContext(LightContext)

    const wrapper = css`
        background-color: #F6F8FB;
        border-radius: 2.0625em 2.0625em 0 0;
        padding-bottom: 1.5rem;
    `

    const headline = css`
        color: #002D67;
        font-size: 1.2rem;
        padding: 1rem;
        margin: 0;
    `

    const grid = css`
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 1rem 0;
        justify-items: center;
    `

    const linkStyle = css`
        text-decoration: none;
    `

    return !groups ? <p>loading..</p> : (
        <section css={wrapper}>
            <h2 css={headline}>All Rooms</h2>
            <section css={grid}>
            {Object.keys(groups).map(groupId => (
                <Link to={`/room/${groupId}`} key={groupId} css={linkStyle}>
                    <PanelRoom 
                        name={groups[groupId].name}
                        lights={groups[groupId].lights.length}
                        img="imgs/balcony.png"
                    />
                </Link>
            ))}
            </section>
        </section>
    );
}
 
export default AllRooms;