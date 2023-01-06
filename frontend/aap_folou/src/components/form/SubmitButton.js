import { StyleSubmitButton } from './styledSubmitButton';

function SubmitButton(props) {
    const { text } = props;
    return (
        <StyleSubmitButton >
            <div>
                <button className='btn'>{text}</button>
            </div>
        </StyleSubmitButton >
    );
}

export default SubmitButton;