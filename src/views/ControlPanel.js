/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import AllRooms from "../components/AllRooms";
import HeadSection from '../components/HeadSection'


const ControlPanel = () => {

    const wrapper = css`
        background-color: #0A4DA2;
    `

    return (
        <main css={wrapper}>
            <HeadSection />
            <AllRooms />
        </main>
    );
}
 
export default ControlPanel;