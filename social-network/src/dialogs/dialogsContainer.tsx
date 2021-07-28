
import Dialogs from "./dialogs";
import {AddMessageAC, DeleteMessageAC} from "../redux/messages-reducer";
import {connect} from "react-redux";
import {AppDispatchType, AppStateType} from "../redux/redux-store";

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