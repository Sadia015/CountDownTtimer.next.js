import Countdown from "@/components/count";

export default function Home() {
  return (
<div>
<h1 className="cursor-pointer text-5xl  flex justify-center align-center ml-80 px-4 py-4 w-max  text-white ease duration-300 hover:text-green-400 font-bold">DAY 1 COUNTDOWN TIMER</h1>
<p className="cursor-pointer text-5xl flex justify-center align-center  ml-80  px-4  py-4 w-max  text-white ease duration-300 hover:text-purple-600"><span className="text-white font-bold ease duration-300 hover:text-blue-600">Regards:</span>Syeda Sadia Naseer</p>
<Countdown/>
</div>
  );
}
