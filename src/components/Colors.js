import SetHeadline from './SetHeadline';
import SelectColor from './SelectColor';

const Colors = ({color, roomName}) => {

    return (
        <section>
            <SetHeadline title="Colors" />
            <SelectColor color={color} roomName={roomName} />
        </section>
    );
}
 
export default Colors;