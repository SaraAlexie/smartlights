/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import Intensity from './Intensity';
import Colors from '../components/Colors';
import Scenes from './Scenes';
import TurnOff from './TurnOff';


const RoomControl = ({setIsOn, IsOn, setBrightness, brightness, color, roomName}) => {

    const wrapper = css`
        background-color: #F6F8FB;
        border-radius: 2.0625em 2.0625em 0 0;
        padding-bottom: 1.5rem;
        margin-top: 2em;
        position: relative;
    `

    return (
        <section css={wrapper}>
            <TurnOff setIsOn={setIsOn} IsOn={IsOn} />
            <Intensity setBrightness={setBrightness} brightness={brightness} />
            <Colors color={color} roomName={roomName} />
            <Scenes />
        </section>
    );
}
 
export default RoomControl;