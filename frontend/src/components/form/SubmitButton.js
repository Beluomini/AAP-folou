import { StyleSubmitButton } from './styledSubmitButton';

function SubmitButton({ text }) {

    return (
        <StyleSubmitButton >
            <div>
                <button className='btn'>{text}</button>
            </div>
        </StyleSubmitButton >
    );
}

export default SubmitButton;