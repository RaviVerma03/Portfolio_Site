import React, { useReducer, useEffect } from "react";
import reducer, { initialState } from "../state/reducer";
import context from "../context";
import { NEW_MESSAGE } from "../state/types";
import { newMessage } from "../state/actions";
import PublishMessage from "./PublishMessage";
import Messageboard from "./MessageBoard";
import Context from "../context";
//import PubSub from "../../pubsub";

//const pubsub = new PubSub();

function ReactionApp() {
    const [state, dispatch] = useReducer(reducer, initialState);

    console.log("state", state);
    return (
        <Context.Provider value={{ state, dispatch }}>
            <h2>Reaction</h2>
            <hr />
            <PublishMessage />
            <hr />
            <Messageboard />
        </Context.Provider>
    )
}

export default ReactionApp