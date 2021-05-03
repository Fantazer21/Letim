import React from 'react'
import {MouseEvent, useState, ChangeEvent} from "react";

type TypeAccordion = {
    nameMenu: string
    collapsed: boolean
    onChange: (collapsed: boolean) => void
}


function Accordion(props: TypeAccordion) {




    return (
        <div>
            <AccordionTitle
                nameMenu={props.nameMenu}
                onChange={props.onChange}
                 />
            {props.collapsed && <AccordionBody/>}
        </div>
    )
}



function AccordionBody(props: any) {
        return (
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        )
}



function AccordionTitle(props: any) {
   return <h3 onClick={props.onChange}> {props.nameMenu} </h3>
}

export default Accordion