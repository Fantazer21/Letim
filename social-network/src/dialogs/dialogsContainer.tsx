import {DialogsContainerType} from "../types";
import Dialogs from "./dialogs";
import {AddMessageAC, DeleteMessageAC} from "../redux/messages-reducer";
import {connect} from "react-redux";
import {AppDispatchType, AppStateType} from "../redux/redux-store";

// export function DialogsContainer(props: DialogsContainerType) {
//     let dialogs1 = props.state.messagesPage.dialogsItemData
//
//     let messages1 = props.state.messagesPage.messagesData
//
//     let AddPost1 = (state: string) => props.dispatch(AddMessageAC(state))
//
//     let DeletePost1 = () => props.dispatch(DeleteMessageAC())
//
//
//     return <Dialogs
//         dialogsItemData={dialogs1}
//         messagesData={messages1}
//         addPost={AddPost1}
//         deletePost={DeletePost1}/>
// }

let mapStateToProps = (state: AppStateType) => {
    return {
        dialogsItemData: state.messagesPage.dialogsItemData,
        messagesData: state.messagesPage.messagesData
    }
}

let mapDispatchToProps = (dispatch: AppDispatchType) => {
    return {
        addPost: (state: string) => {
            dispatch(AddMessageAC(state))
        },
        deletePost: () => {
            dispatch(DeleteMessageAC())
        }


    }
}

export const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs)