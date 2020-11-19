import auth from "./auth";
import posts from "./posts";
import alumni from "./alumni";
import events from "./events";
import {combineReducers} from "redux";

const unillegeApp = combineReducers({
    posts, auth, events, alumni
})

export default unillegeApp;
