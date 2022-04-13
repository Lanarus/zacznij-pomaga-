import './Button.scss';

export const Button = ({
    className = "", 
    forceBorder,
    size, 
    style: elementStyle = {},
    width,
    height,
    ...rest
}) => {
    const borderClass = forceBorder ? 
        "Button--bordered" : "";
    const sizeClass = size === 'big' ? 
        'Button--big' : 'Button--small';
    const style = {
        ...elementStyle,
        height: height ? height : 'auto',
        width: width ? width : 'auto'
    };
    
    return <button
        className={`Button ${borderClass} ${sizeClass} ${className}`} 
        style={style}
        {...rest}
    />
};