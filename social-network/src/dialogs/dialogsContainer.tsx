import {DialogsContainerType} from "../types";
import Dialogs from "./dialogs";
import {AddMessageAC, DeleteMessageAC} from "../redux/messages-reducer";

export function DialogsContainer(props: DialogsContainerType) {
    let dialogs1 = props.state.messagesPage.dialogsItemData

     let messages1 = props.state.messagesPage.messagesData

     let AddPost1 = (state: string) => props.dispatch(AddMessageAC(state))

     let DeletePost1 =  () => props.dispatch(DeleteMessageAC())


    return <Dialogs
        dialogsItemData={dialogs1}
        messagesData={messages1}
        addPost={AddPost1}
        deletePost={DeletePost1}/>
}

