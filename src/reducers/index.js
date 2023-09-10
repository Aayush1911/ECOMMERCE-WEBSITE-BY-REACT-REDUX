import showmessage  from "./message";
import changenumber from "./updown";
import { combineReducers } from "redux";

const rootreducer=combineReducers({
    changenumber,
    showmessage
})
export default rootreducer