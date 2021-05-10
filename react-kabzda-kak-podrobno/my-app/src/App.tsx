import React, {useState} from 'react';
import Accordion from './components/accordion/Accordion';
import Rating, {Star} from './components/Rating/rating'
import OnOff from "./components/OnOff/OnOff";
import Input from "./05_12";

type TypeAccordion = {
    PageTitle: (title: string) => void
}

function App() {
    let [collapsed, setCollapsed] = useState(true)
    let [on,setOn]= useState(true)

    return (
        <div>
            <OnOff onChange={ () => setOn(!on) } value={on} />
            <Rating />
            <Accordion nameMenu={'--Menu--'}
                       collapsed={collapsed}
                       onChange={ () => setCollapsed(!collapsed)}
            />
            <Input/>
        </div>

    )
}



export default App;
