import s from "./users.module.css";
import React from "react";
import {UserType} from "../redux/users-reducer";

type  UsersType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    users: Array<UserType>
    usersFollow: (userId: number) => void
    usersUnFollow: (userId: number) => void
    onPageChanged: (pageNumber: number) => void
}

export const Users = (props: UsersType) => {


    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)}

        return (
            <div>
                <div>
                    {pages.map(p => {
                        return <span className={props.currentPage === p ? s.selectedPage : ''}
                                     onClick={(e) => {
                                         return props.onPageChanged(p)
                                     }}> {p} </span>
                    })}
                </div>
                {
                    props.users.map((el, ind) => {
                        return <div className={s.Users}>
                            <PhotoButton key={ind + 10} id={el.id} followed={el.followed}
                                         usersFollow={props.usersFollow}
                                         usersUnFollow={props.usersUnFollow}/>
                            <UsersArea id={el.id}
                                       key={ind + 100}
                                       name={el.name}
                                       message={el.message}
                                       country={el.country}
                                       city={el.city}
                            />
                        </div>
                    })
                }
            </div>
        )


}


type PhotoButtonType = {
    id: number
    followed: boolean
    usersFollow: (userId: number) => void
    usersUnFollow: (userId: number) => void
}

const PhotoButton = (props: PhotoButtonType) => {
    let a = 'data:image/jpeg;base64,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'

    return <div className={s.PhotoButton}>
        <div>
            <img className={s.UsersMainPh} src={a} alt={'ProfilePh'}/>
        </div>
        {props.followed ?
            <button className={s.UsersButton} onClick={() => props.usersUnFollow(props.id)
            }>unsubscribe</button> :
            <button className={s.UsersButton} onClick={() => props.usersFollow(props.id)}>subscribe</button>
        }

    </div>
}

type UsersAreaType = {
    id: number
    name: string
    message: string
    country: string
    city: string
}

const UsersArea = (props: UsersAreaType) => {
    return <div className={s.UsersArea}>
        <div className={s.UsersInfo}>
            <div className={s.UsersInfoName}>{props.name}</div>
            <div className={s.UsersInfoMessage}>{props.message}</div>
        </div>
        <div className={s.UsersLocation}>
            <div className={s.UsersInfoCity}>{props.city}</div>
            <div className={s.UsersInfoCountry}>{props.country}</div>
        </div>
    </div>
}