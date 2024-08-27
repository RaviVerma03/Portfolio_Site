import React, { useState } from "react";
import { useAppContext } from "./hooks";
import { newMessage } from "../state/actions";

function PublishMessage(){
    const {dispatch} = useAppContext();
    const [text, setText] = useState('')

    const updateText =event => {
        setText(event.target.value)
    }

    const publishMessage = () => {
        dispatch(newMessage(text))
    }

    const handleKeyPress = event => {
        if(event.key === 'Enter'){
            publishMessage()
        }
    }
    return (
        <div>
            <h3>Got something to say?</h3>
            <input value={text} onChange={updateText} onKeyPress={handleKeyPress}/>
            {' '}
            <button onClick={publishMessage}>Publish it!</button>
        </div>
    )
}

export default PublishMessage





var saveSurvey = function(surveyJSON, marsha_cd) {
    // Generate a unique survey ID
    var surveyID = getUUID();

    // Write to surveySubmission table
    var xml = <surveySubmission xtkschema="mar:surveySubmission" _operation="insertOrUpdate" _key="@surveyID" marsha_cd={marsha_cd} surveyID={surveyID} reservationNum={surveyJSON.reservation_num} confirmation_html={surveyJSON.confirmation_html}/>;
    xtk.session.Write(xml);

    // Query from surveySubmission table
    var query = xtk.queryDef.create(  
        <queryDef schema="mar:surveySubmission" operation="get">
            <select>      
                <node expr="@reservationNum"/>
                <node expr="@surveyID"/>
                <node expr="@marsha_cd"/>
            </select>    
            <where>      
                <condition expr={"[@surveyID]='" + surveyID + "'"}/>
            </where>  
        </queryDef>);
    var result = query.ExecuteQuery();        

    // Write to mar:surveySubmissionAnswers table
    for (var key in surveyJSON) {
        // Exclude confirmation_html field
        if (key !== "confirmation_html") {
            var surveyAnswer = surveyJSON[key];
            // Handle nested structures if needed
            if (typeof surveyAnswer === 'object') {
                // If the value is an array, iterate over each item
                if (Array.isArray(surveyAnswer)) {
                    for (var i = 0; i < surveyAnswer.length; i++) {
                        var answer = surveyAnswer[i];
                        var answersSubmission = <surveySubmissionAnswers xtkschema="mar:surveySubmissionAnswers" _operation="insert" _key="@surveyID" surveyID={surveyID} surveyAnswer={answer} surveyQuestionId={key}/>;
                        xtk.session.Write(answersSubmission);
                    }
                } else {
                    // Handle other nested structures here
                }
            } else {
                // For flat key-value pairs, write directly to mar:surveySubmissionAnswers table
                var answersSubmission = <surveySubmissionAnswers xtkschema="mar:surveySubmissionAnswers" _operation="insert" _key="@surveyID" surveyID={surveyID} surveyAnswer={surveyAnswer} surveyQuestionId={key}/>;
                xtk.session.Write(answersSubmission);
            }
        }
    }
    return surveyID;
};
