import './Decoration.scss';
import DecorationImg from './Decoration.svg';

export const Decoration = ({ size, text }) => {
    return <div className="Decoration">
        <span className="Decoration-text">{text}</span>
        <div><img src={DecorationImg}/></div>
    </div> 
};