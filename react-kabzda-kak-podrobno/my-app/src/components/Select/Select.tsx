import React, {ChangeEvent, ChangeEventHandler, useRef, useState} from 'react';


type SelectType = {
    dataSelect: Array<string>
    storage: any
}

function SelectCOMP(props: SelectType) {

    // let [state, setState] = useState('')

    return (
        <select onChange={ (e:ChangeEvent<HTMLSelectElement>) => props.storage(e.currentTarget.value) }>
            {
                props.dataSelect.map((el, ind) => <option key={ind} value={ind}>{el}</option>)
            }
        </select>
    )
}

export default SelectCOMP
