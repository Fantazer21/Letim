import React, {useState} from 'react';
import Accordion from './components/accordion/Accordion';
import Rating, {Star} from './components/Rating/rating'
import OnOff from "./components/OnOff/OnOff";
import Input from "./05_12";
import SelectCOMP from './components/Select/Select';

type TypeAccordion = {
    PageTitle: (title: string) => void
}

let dataList = ['MSC', 'KIEV', 'MINSK', 'TORONTO']

let dataSelect = ['MSC', 'KIEV', 'MINSK', 'TORONTO']

function App() {
    let [collapsed, setCollapsed] = useState(true)
    let [on, setOn] = useState(true)

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
            <SelectCOMP dataSelect={dataSelect}/>
        </div>

    )
}


export default App;
