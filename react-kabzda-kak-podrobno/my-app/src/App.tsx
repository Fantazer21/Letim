import React, {useState} from 'react';
import Accordion from './components/accordion/Accordion';
import Rating, {Star} from './components/Rating/rating'
import OnOff from "./components/OnOff/OnOff";
import Input from "./05_12";
import SelectCOMP from './components/Select/Select';
import s from './select.module.css'

type TypeAccordion = {
    PageTitle: (title: string) => void
}

let dataList = ['MSC', 'KIEV', 'MINSK', 'TORONTO']

let dataSelect = ['MSC', 'KIEV', 'MINSK', 'TORONTO']

function App() {
    let [collapsed, setCollapsed] = useState(true)

    let [on, setOn] = useState(true)

    let [select, setSelect] = useState('')

    function setValueSelect(value: string) {
        setSelect(value)
    }

    function condition() {
        if (+select === 1) return s.select
    }



    return (
        <div>
            <OnOff onChange={() => setOn(!on)} value={on}/>
            <Rating/>
            <Accordion
                list={dataList}
                nameMenu={'--Menu--'}
                collapsed={collapsed}
                onChange={() => setCollapsed(!collapsed)}
            />
            <Input/>
            <SelectCOMP dataSelect={ dataSelect} storage={setValueSelect}/>
            <h1  className={condition()}>{
                dataSelect[+select]
            }</h1>
        </div>

    )
}


export default App;
