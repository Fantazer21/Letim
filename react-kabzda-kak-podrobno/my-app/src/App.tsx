import React from 'react';
import Accordion from './components/accordion/Accordion';
import Rating, { Star } from './components/Rating/rating'
import OnOff from "./components/OnOff/OnOff";

type TypeAccordion = {
    PageTitle: (title: string) => void
}

function App() {

    return (
        <div>


            {/*<PageTitle title={'This app component'}/>*/}
            {/*<Accordion accordionTitle={'Header'}*/}
            {/*           accordionTitleBody={'menu'}*/}
            {/*           collapsed={false}/>*/}
            {/*<Accordion accordionTitle={'Header2'}*/}
            {/*           accordionTitleBody={'menu2'}*/}
            {/*           collapsed={true}/>*/}
            <Rating value={4}/>
            <OnOff/>


        </div>

    )
}

function AccordionTitle() {
    return <h3>Menu</h3>
}


type PageAccordion = {
    title: string
}

function PageTitle(props: PageAccordion) {
    return <div>{props.title} </div>
}


export default App;
