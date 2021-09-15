import React from 'react'
import Message from "./Message";

const messageData = {
    avatar: 'https://avatars.mds.yandex.net/get-zen_doc/3531091/pub_606317443ebe7f2d78e227b9_6069651d09a6b7170285d3d6/scale_1200',
    name: 'Terminator',
    message: 'I will be back',
    time: '20:00',
}


function HW1() {
    return (
        <div>
            <hr/>
            homeworks 1

            should work (должно работать)

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr/>
        </div>
    )
}

export default HW1
