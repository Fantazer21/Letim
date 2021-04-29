import React from 'react'

type TypeAccordion = {
    accordionTitle: string
    accordionTitleBody: string
    collapsed: boolean
}


function Accordion(props: TypeAccordion) {
    if(props.collapsed !== true) {
        return (
            <div>
                <AccordionTitle accordionTitleValue={props.accordionTitle} />
            </div>
        )
    }

    return (
        <div>
            <AccordionTitle accordionTitleValue={props.accordionTitle} />
            <AccordionBody
                accordionTitleBodyValue={props.accordionTitleBody}
            />
        </div>
    )
}

function AccordionBody(props: any) {
    return <ul>
        <h4>{props.accordionTitleBodyValue}</h4>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}

function AccordionTitle(props: any) {
    return <h3>{props.accordionTitleValue}</h3>
}

export default Accordion