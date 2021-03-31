import React, {useState} from 'react'

type TypeUnContr = {

}
function UnContr(props: TypeUnContr) {

    let [collapsed, setCollapsed] = useState(false)

    return <div>
        <LiTitle title='Menu' onClick={ () => {setCollapsed(!collapsed)} } />
        {!collapsed && <List/>}
    </div>
}
type PropsLiTitle = {
    title: string
    onClick: () => void
}

function LiTitle(props: PropsLiTitle) {
    return <h3 onClick={  props.onClick }>{props.title}</h3>
}

function List() {
    return <div>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    </div>

}


export default UnContr