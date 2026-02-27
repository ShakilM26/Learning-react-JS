// 5. Input Change Event

import { useState } from "react";

export default function Event(){
    const [text, setText] = useState('');

    function handleClick(e) {
        setText(e.target.value);
    }

    return(
        <div>
            <input type="text" onChange={handleClick} />
            <p>You typed: {text}</p>
        </div>
    );
}

// User type korle onChange fire holo
// e.target.value paowa gelo
// state update holo and UI update holo
// this is called controlled component