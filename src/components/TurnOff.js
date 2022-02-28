/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

const TurnOff = ({setIsOn, IsOn}) => {

    const turnOff = css`
        filter: drop-shadow(0px 3px 6px rgba(0, 45, 103, 0.1));
        position: absolute;
        right: 3%;
        bottom: 94.5%;
    `

    return (
        <img 
            css={turnOff} 
            src="/imgs/poweroff.png" 
            alt="Turn off lights" 
            onClick={() => setIsOn(!IsOn)}
        />
    );
}
 
export default TurnOff;