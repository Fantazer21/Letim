
 // App types

 import { AppDispatchType, AppStateType } from "./redux/redux-store"
 import {MessageType} from "./redux/state";

 export type profileType = {
     posts: Array<PostDataType>
     addPostProfile: (state: string) => void,
     deletePostProfile: () => void,
 }
 export type PostDataType = {
     id: number,
     title: string,
     state: string,
     path: string
 }

 // Header types
 export type typeHeader = {
     src: string,
 }

 // profile types
 export type contentType = {
     state: AppStateType
     dispatch: AppDispatchType
 }
 export type ProfileStateType = {
     posts: Array<PostDataType>
 }

 export type ProfileContainerType ={
     dispatch: AppDispatchType
     state: AppStateType
 }
 export type DialogsContainerType ={
     dispatch: AppDispatchType
     state: AppStateType
 }

 export type AppPropsType = {
     dispatch: AppDispatchType
     state: AppStateType
 }

 export type typePerson = {
     title: string | undefined,
     state: string | undefined
 }

 export type MessagesStateType = {
     messagesData: Array<MessageType>
     dialogsItemData: Array<any>
 }