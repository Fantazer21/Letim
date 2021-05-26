import React, {useRef, useState} from 'react';


type SelectType =  {
    dataSelect: Array<string>
}

function SelectCOMP(props: SelectType)  {
    return (
      <select>
          {
              props.dataSelect.map( (el, ind) => <option value={ind}>{el}</option>)
          }
      </select>
    )
}

export default SelectCOMP
