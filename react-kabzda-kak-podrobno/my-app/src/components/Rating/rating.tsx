import {useState, MouseEvent} from "react";

function Rating(props: any) {


    let [value, setValue] = useState(1)

    function changeValue(value: number) {
        return setValue(value)
    }

    return (
        <div>
            <Star selected={value >= 1} changeValue={setValue} id={1}/>
            <Star selected={value >= 2} changeValue={setValue} id={2}/>
            <Star selected={value >= 3} changeValue={setValue} id={3}/>
            <Star selected={value >= 4} changeValue={setValue} id={4}/>
            <Star selected={value >= 5} changeValue={setValue} id={5}/>
        </div>

    )
}

type PropsTypeStar = {
    id: 1 | 2 | 3 | 4 | 5
    changeValue: (value: 1 | 2 | 3 | 4 | 5) => void
    selected: boolean
}

export function Star(props: PropsTypeStar) {

    return <span onClick={() => {props.changeValue(props.id)} }> {props.selected ? <b>STAR</b> : "STAR" }     </span>

}

export default Rating