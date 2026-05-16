import React from "react"
import {
    PieChart,
    Pie,
    Cell,
    Tooltip
} from "recharts"

export default function Calculation(props){
  function chance(){
    let temp=20
    temp=temp+(props.fund*5)-(props.burn*3)+(props.ai*2)
    if(temp>100)temp=100
    else if(temp<0)temp=0
    return temp .toFixed(1)
  }
function survive(){
     let temp = 50
        temp+= (props.fund/100000) * 4
        temp -= (props.burn/100000) * 3
        return Math.min(100, Math.max(0, temp)).toFixed(1)
}

function risk(){
        let score = 30
        score += (props.burn/10000) * 5
        score -= (props.fund/10000) * 2
        return Math.min(100, Math.max(0, score)).toFixed(1)
 }

 function ai(){
 let aiPivot = 10
 aiPivot += (props.ai/20) * 4
 aiPivot += (props.inv/20) * 5
 aiPivot += (props.coffee/5)
 if(props.ai > 20){
     aiPivot += 20
 }
 if(aiPivot > 100){
     aiPivot = 100
 }
 if(aiPivot < 0){
     aiPivot = 0
 }
 return aiPivot.toFixed(1)
 }
  const data = [
  {
      name:"Unicorn",
      value:Number(chance())
  },
  {
      name:"Collapse",
      value:Number(risk())
  },
  {
      name:"AI Pivot",
      value:Number(ai())
  },{
    name:"Survive Next Round",
    value: Number(survive())
  }

]
 function runway(){
    if(props.burn === 0){
  return <span className="safe">
    🚀 Infinite runway
  </span>
}
  let months = Number(props.fund) / Number(props.burn)
  if(months < 6){
    return (<span className="danger">
      💀 {months.toFixed(1)} months
    </span>)
  }
  else if(months < 18){
    return (<span className="warning">
      ⚠️ {months.toFixed(1)} months
    </span>)
  }
  else{
    return( <span className="safe">
      🚀 {months.toFixed(1)} months
    </span>)
  }
}
function burnStatus(){
  let ratio = props.burn / props.fund
  if(ratio > 0.5){
    return <span className="danger">
      🔥 Burning faster than investor patience
    </span>
  }
  else if(ratio > 0.2){
    return <span className="warning">
      ⚠️ Moderate financial chaos
    </span>
  }
 else{
    return <span className="safe">
      🚀 Financially stable for now
    </span>
  }
}
    return (
        <>
        <div className="report-con">
            <div className="report-box">
        <h2 className="rep-head">Your Survival Report</h2>
        <div className="cards-box">
            
            <div className="card1">
            <h3 >Unicorn Chance</h3>
            <h1 >🦄</h1>
            <h3 > {chance()}%</h3>
            </div>
            <div className="card2">
            <h3 >Survive Next Round</h3>
            <h1 >📈</h1>
            <h3> {survive()}%</h3>
            </div>
            <div className="card3">
            <h3 >AI Pivot Probability</h3>
            <h1 >🤖</h1>
            <h3> {ai()}%</h3>
            </div>
            <div className="card4">
            <h3 >Collapse Risk</h3>
            <h1 >💀</h1>
            <h3> {risk()}%</h3>
            </div>
        </div>
        </div>
        <div className="chart-box">

  <PieChart width={340} height={340}>
      <Pie
          data={data}
          dataKey="value"
       outerRadius={90}
       fill="#8884d8"
       label
   >
       <Cell fill="#8b5cf6" />
       <Cell fill="#ef4444" />
       <Cell fill="#06b6d4" />
       <Cell fill="#22c55e" />
   </Pie>
   <Tooltip />
 </PieChart>

</div>
<div className="runway-box">
    <h3>Runway Remaining</h3>
   <h2>{runway()}</h2>
   <p>

{runway() < 3
 ? "🔥 Investors are panicking"
 : "😮‍💨 Startup still breathing"}

</p>
</div>
<div className="burn-box">
    <h3>Burn Rate Status</h3>
    <p>{burnStatus()}</p>
</div>
</div>
        </>
    )
}