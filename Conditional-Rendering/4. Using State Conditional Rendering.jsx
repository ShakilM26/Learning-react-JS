// 4. Using State Conditional Rendering
import { useState } from "react";

export default function Rendering() {
    const [isVisible, setIsVisible] = useState(false);

    return(
        <div>
            <button onClick={() => setIsVisible(!isVisible)}>
                Toggle
            </button>

            {isVisible && <p>This is visible now</p>}
        </div>
    );
}

// Button click korle state change
// state change hole re-render
// condition -> UI show/hide
