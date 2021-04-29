

 function Rating(props: any) {
    if (props.value === 0) {}
    return (
        <div>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={false}/>
            <Star selected={false}/>
        </div>

    )
}

function Star(props: any) {
    if (props.selected === true) {
        return <span><b>star </b></span>
    } else {
       return <span>star </span>
    }
}

export default Rating