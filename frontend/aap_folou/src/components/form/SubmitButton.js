import { StyleSubmitButton } from './styledSubmitButton';

function SubmitButton({ text, oncClick }) {

    function criar(onClick) {
        //criar no banco
    }

    return (
        <StyleSubmitButton >
            <div>
                <button className='btn'>{text}</button>
            </div>
        </StyleSubmitButton >
    );
}

export default SubmitButton;