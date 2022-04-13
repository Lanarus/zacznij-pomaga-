import './Decoration.scss';
import DecorationImg from './Decoration.svg';

export const Decoration = ({ size, text }) => {
    const sizeClass = size === 'big' ? 'Decoration--big' : 'Decoration--small';

    return <div className={`Decoration ${sizeClass}`}>
        <span className="Decoration-text">{text}</span>
        <div><img src={DecorationImg}/></div>
    </div> 
};