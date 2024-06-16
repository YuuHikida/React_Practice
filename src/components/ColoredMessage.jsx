export const ColoredMessage= (props) =>{
    
    const {color,children} = props;
        const contentStyle={
        color:color,
        fontSize:"10px"
    };
    // return <p style={contentStyle}>お元気ですか？</p>;
    // return <p style={contentStyle}>{props.message}</p>
    return <p style={contentStyle}>{children}</p>
}
