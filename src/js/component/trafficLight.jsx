// 1. Import React, Hooks and whatever I need for the component
import React, {useState} from "react";



// 2. Declare the function/component
const TrafficLight = ()=>{
        // 3. Javascript code
        const [glow,setGlow]= useState("yellow");

        
        // 4. Return one html code
        return(
        <div>
            <div className="rectangle1">

            </div>
            <div className="rectangle2">

                <div className={"redCircle " + (glow==="red"? "glow": "")} onClick={()=>setGlow("red")}> </div>
                <div className={"yellowCircle " + (glow==="yellow"? "glow" : "")} onClick={()=>setGlow("yellow")}></div>
                <div className={"greenCircle " + (glow==="green"? "glow" : "")} onClick={()=>setGlow("green")}></div>

            </div>
        </div>
        );
}

// 5. Export function/ Component
export default TrafficLight;