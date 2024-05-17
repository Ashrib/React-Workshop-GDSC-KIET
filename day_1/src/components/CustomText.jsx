function CustomText(props){
    return (
        <p style={{color: 'red', fontSize: 20}}>
            {props.children}
        </p>
    )
}

export default CustomText;