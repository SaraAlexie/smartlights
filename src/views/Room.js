/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import RoomControl from '../components/RoomControl';
import RoomHeader from '../components/RoomHeader';
import SlideSelect from '../components/SlideSelect';
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios';

const Room = ({color}) => {
    
    const wrapper = css`
        background-color: #0A4DA2;
    `

    let roomName = useParams().groupId

    const [room, setRoom] = useState();
    const [IsOn, setIsOn] = useState();
    const [brightness, setBrightness] = useState();

    useEffect(() => {
        axios(`http://192.168.8.100/api/${process.env.REACT_APP_USERNAME}/groups/${roomName}`)
            .then(response => {
                setRoom(response.data)
                setIsOn(response.data.state.all_on)
            })
    }, [roomName]);

    useEffect(() => {
        axios.put(`http://192.168.8.100/api/${process.env.REACT_APP_USERNAME}/groups/${roomName}/action`, {
            on: IsOn
        })
    }, [IsOn, roomName]);

    useEffect(() => {
        axios.put(`http://192.168.8.100/api/${process.env.REACT_APP_USERNAME}/groups/${roomName}/action`, {
            bri: brightness
        })
    }, [brightness, roomName]);

    


    return (
        <main css={wrapper}>
            <RoomHeader 
                name={room?.name} 
                number={room?.lights.length} 
            /> {/*Spørgsmålstegnet er optional chaining*/}
            <SlideSelect 
                roomName={roomName}
            />
            <RoomControl 
                setIsOn={setIsOn} 
                IsOn={IsOn}
                setBrightness={setBrightness} 
                brightness={brightness}
                color={color}
                roomName={roomName}
            />
        </main>
    );
}
 
export default Room;