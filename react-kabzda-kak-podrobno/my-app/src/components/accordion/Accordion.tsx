import React from 'react'
import {MouseEvent, useState, ChangeEvent} from "react";

type TypeAccordion = {
    nameMenu: string
    collapsed: boolean
    onChange: (collapsed: boolean) => void
    list: Array<string>
}


function Accordion(props: TypeAccordion) {
    return <div>
        <AccordionTitle
            nameMenu={props.nameMenu}
            onChange={props.onChange}
        />
        {props.collapsed && <AccordionBody list={props.list}/>}
    </div>

}

type TypeAccordionBody = {
    list: Array<string>
}

function AccordionBody(props: TypeAccordionBody) {
    return (
        <ul>
            {
                props.list.map( (e,index) => <li key={index}>{index} {e}</li>)
            }
        </ul>
    )
}


function AccordionTitle(props: any) {
    return <h3 onClick={props.onChange}> {props.nameMenu} </h3>
}

export default Accordion