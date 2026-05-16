import Calculation from "./Calculations"
import React from "react"
export default function Form(){


    const [startupName, setStartupName] =
    React.useState("")

    const [burnRate, setBurnRate] =
    React.useState(0)

    const [fundRaised, setFundRaised] =
    React.useState(0)

    const [employee, setEmployee] =
    React.useState(0)

    const [founderSleep, setFounderSleep] =
    React.useState(0)

    const [coffee, setCoffee] =
    React.useState(0)

    const [aiBuzzword, setAiBuzzword] =
    React.useState(0)
    const [tf,settf]=React.useState(false)
    function toggle(e){
        e.preventDefault()
        settf(true)
    }
    const insights = [
    "🚀 Investors are emotionally confused but cautiously optimistic.",
    "☕ Coffee budget exceeds marketing budget.",
    "🤖 AI pivot detected automatically.",
    "🔥 Burn rate approaching dangerous levels.",
    "💸 Startup survives entirely on optimism."
]
const [index,setIndex] = React.useState(0)
function nextInsight(){

    setIndex((prev)=>

        (prev + 1) % insights.length
    )
}

function prevInsight(){

    setIndex((prev)=>

        prev === 0
        ? insights.length - 1
        : prev - 1
    )
}
    return (
        <>
        <div className="main-layout">
            <div className="left">
        <form  className="user-input" onSubmit={toggle}> 
            <div className="form-box">
                <p>Tell us about Startup</p>
        <label >Startup Name</label>
        <div className="input-emg">
            <span>🏢</span>
        <input type="text" className="in1" placeholder="sleepGPT"  onChange={(e)=>
    setStartupName(e.target.value)
} required/>
</div>
            <div className="lab">
                <label htmlFor="" className="">Burn Rate</label>
                <label htmlFor="" className="">Funding Raised</label>
           </div>
            <div className="inp">
                <div className="input-emg">
                    <span>💸</span>
                <input type="number" placeholder="$500,000"  onChange={(e)=>
                    setBurnRate(
                        Number(e.target.value)
                    )
                } required/>
                </div>
                <div className="input-emg">
                    <span>💰</span>
                <input type="number" placeholder="$2M"  onChange={(e)=>
                    setFundRaised(
                        Number(e.target.value)
                    )
                } required/>
                </div>
            </div>
            <div className="lab">
                <label htmlFor="" className="">Number of employees</label>
                <label htmlFor="" className="">Founder Sleep(hrs/night)</label>
             </div>
             <div className="inp">
                <div className="input-emg">
                    <span>👨‍💻</span>
                <input type="number" placeholder="3"  onChange={(e)=>
                    setEmployee(
                        Number(e.target.value)
                    )
                } required/>
                </div>
                <div className="input-emg">
                    <span>😴</span>
                <input type="number" placeholder="2"  onChange={(e)=>
                    setFounderSleep(
                        Number(e.target.value)
                    )
                } required/>
                </div>
            </div>
            <div className="lab">
                <label htmlFor="" className="">Coffee Consumption(cups/day)</label>                
                <label htmlFor="" className="">AI Buzz word in pitch desk</label>
            </div>
            <div className="inp">
    
                <div className="input-emg">
                    <span>☕</span>
                <input type="number" placeholder="11"  onChange={(e)=>
                    setCoffee(
                        Number(e.target.value)
                    )
                } required/>
                </div>
                <div className="input-emg">
                    <span>🤖</span>
                <input type="number" placeholder="47"  onChange={(e)=>
                    setAiBuzzword(
                        Number(e.target.value)
                    )
                } required/>
                </div>
            </div>
                <button type="submit"  className="btn2">Analyze My startup</button>
        </div>
        </form>
        <div className="insight-box">
    <h3>Random Consultant Insight</h3>
    <p >{insights[index]}</p>
    <div className="insight-btns">

    <button
      type="button"
      onClick={prevInsight}
    >
        ◀
    </button>

    <button
      type="button"
      onClick={nextInsight}
    >
        ▶
    </button>

</div>
    </div>
</div>

    {tf && <Calculation
        name={startupName}
        fund={fundRaised}
        burn={burnRate}
        ai={aiBuzzword}
        inv={employee}
        coffee={coffee}
        sleep={founderSleep}
    />}


    </div>
        </>
    )
}