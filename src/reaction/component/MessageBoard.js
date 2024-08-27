import React from "react";
import { useAppContext } from "./hooks";

function Messageboard() {
  const { state: { messages, reactionsMap } } = useAppContext();
    return (
        <div>
            {messages.map(messageItem =>{
                const {id, text, timestamp} = messageItem
                return (
                    <div key={id}>
                        <h4>{new Date(timestamp).toLocaleString()}</h4>
                        <p>{text}</p>
                        <hr />
                    </div>
                )
            })}
        </div>
    )
}

export default Messageboard