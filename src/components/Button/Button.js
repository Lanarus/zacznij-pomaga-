import './Button.scss';

export const Button = ({size, ...rest}) => {
    const sizeClass = size === 'big' ? 'Button--big' : 'Button--small';
    return <button className={`Button ${sizeClass}`} {...rest}/>
};