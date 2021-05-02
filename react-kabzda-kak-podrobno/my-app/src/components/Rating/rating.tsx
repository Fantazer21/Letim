function Rating(props: any) {

    return (
        <div>
            <Star selected={props.value} id={1}/>
            <Star selected={props.value} id={2}/>
            <Star selected={props.value} id={3}/>
            <Star selected={props.value} id={4}/>
            <Star selected={props.value} id={5}/>
        </div>

    )
}

type PropsTypeStar = {
    selected: Number
    id: Number
}

export function Star(props: PropsTypeStar) {
    if (props.selected >= props.id) return <span><b>star </b></span>
    return <span>star </span>
}

export default Rating