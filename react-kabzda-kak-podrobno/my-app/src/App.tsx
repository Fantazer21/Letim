import React from 'react';


function App() {
    debugger
    return (
        <div>
            <AppTitle/>
            <Rating/>
            <Accordion/>
        </div>

    )
}

function AccordionTitle() {
    return <h3>Menu</h3>
}

function AccordionBody() {
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}

function AppTitle() {
    return <div>
        This is app component
    </div>
}

function Rating() {
    debugger
    return (
        <div>
            <div>star</div>
            <div>star</div>
            <div>star</div>
            <div>star</div>
            <div>star</div>
        </div>

    )
}

function Accordion() {
    return (
        <div>
            <AccordionTitle/>
            <AccordionBody/>
        </div>
)
}


export default App;
