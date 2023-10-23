import React from "react";
import useScreen from "./useScreen";
const ScreenComponent = () =>{
    const screenSize = useScreen();
    return(
        <div>
            <h1>
                Screen Componenet
            </h1>
            <h2>We are in {screenSize} Screen</h2>
        </div>
    )
}
export default ScreenComponent;