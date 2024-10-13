"use client"
import  { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function Countdown() {

//.............................................variables...................................

const [duration,SetDuration] =  useState< string|number>()
const [timeleft,SetTimeleft] =  useState(0)
const [isactive,SetIsActive] =  useState<boolean>(false)
const timer = useRef<NodeJS.Timeout | null>(null)
//.............................................Timeformat..................................
const timeformat =(time:number):string=>{

const minutes = Math.floor (time/60);
const seconds = time%60;
return`${String(minutes).padStart(2,"0")}:${String(seconds).padStart(2,"0")}`
}
//.............................................Set buttion..................................
const setBtn=()=>{
if(typeof duration ==="number"  && duration > 0){
  SetTimeleft (duration)
}}
//.............................................Start buttion..................................
const startBtn=()=>{
  SetIsActive(true)
}

useEffect(()=>{
 if (isactive == true) {
  timer.current = setInterval(()=>{
  if(timeleft > 0){
    // SetTimeleft(
    //   timeleft -1)
    SetTimeleft((timeleft)=>timeleft -1)

  }
  else{
  clearInterval(timer.current!)
  // SetTimeleft((timeleft)=>timeleft -1)
  }
 },1000)
 }
 else{
  clearInterval(timer.current!)
 } 
},[isactive])


//.............................................Pause buttion..................................
const pauseBtn = () => {
  SetIsActive(false);
};
//.............................................Reset buttion..................................
const resetBtn = () => {
  SetIsActive(false);
  SetTimeleft(0);
  SetDuration("");
};

  return (
    <div className='h-[400px] w-[600px] bg-[#f1efef] rounded-[16px] flex justify-center  items-center  mt-5 ml-80  px-8 flex-col  border-[6px] border-[#030303]'>
       <h1 className="text-[40px] font-[800] font-sans hover:font-serif">Countdown Timer</h1>

       <div className="flex gap-[20px] mt-[30px]">    
       <Input className="w-[220px]" placeholder="Enter duration in seconds" type="number" onChange={(e)=>{SetDuration(Number(e.target.value))}} value={duration} />
       <Button className="bg-[#000000]" onClick={()=>{setBtn()}}>Set</Button>
       </div>

       <div className="text-[65px] gap-[20px]  font-[600]">{timeformat(timeleft)}</div>

      <div className="flex  gap-[20px] mt-[20px]">
      <Button className="bg-[#000000]" onClick={()=>{startBtn()}}>Start</Button>
      <Button className="bg-[#000000]"onClick={()=>{pauseBtn()}}>Pause</Button>
      <Button className="bg-[#000000]"onClick={()=>{resetBtn()}}>Reset</Button>
      </div>

    </div>
  )
}
