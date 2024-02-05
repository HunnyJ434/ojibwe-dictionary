import React, { useState } from "react";
import GetContent  from "./get-content";

  
const Content = (props:any) => {
	
	const [mainData, setMainData] = useState(props.EngOjib)
	const [dicType, setDicType] = useState("EngOjib")
	const [keys, setKeys] = useState(Object.keys(mainData).sort())
	const [searchingKey, setSearchingKey] = useState(false)
	const [activeChar, setActiveChar] = useState("A")
	const [activeBtn, setActiveBtn] = useState(1)
    const [activeKey, setActiveKey] = useState([-1,-1,-1,-1,-1,-1,-1,-1,-1,-1
        -1,-1,-1,-1,-1,-1,-1,-1,-1,-1
        -1,-1,-1,-1,-1,-1])
	
	const handleSearch =(value:any) =>{
		
		if(value != ""){
			setSearchingKey(true)
		}
		else{
			setSearchingKey(false)
		}
		const findNewKeys = (key:String) => {
			if (key.includes(value.toUpperCase())){
				return key
			}
		}
		
		if(dicType == "EngOjib"){
			setMainData(props.EngOjib)
		}
		else{
			setMainData(props.OjibEng)
		}
		let newKeys = Object.keys(mainData).sort().filter(findNewKeys)
		console.log(newKeys)
		setKeys(newKeys)
	}


	return (
		<div >
			
			{/* Top buttons */}
			<div className="flex">
				<button onClick={() => {setDicType("EngOjib"); setActiveBtn(1)}} className={`rounded-md p-1 w-[50%] ${activeBtn == 1? "bg-[#d3def0] border-b-[8px] border-b-[#e1e9f5]" : ""}`}>English to Ojibwe</button>
				<button onClick={() => {setDicType("OjibEng"); setActiveBtn(0)}} className={`rounded-md p-1 w-[50%]  ${activeBtn == 0? "bg-[#d3def0] border-b-[8px] border-b-[#e1e9f5]" : ""}`}>Ojibwe to English</button>
			</div>
			{/* Search Input */}
			<div className="flex justify-end mt-3">
				<input className="rounded-md  w-[100%]  pl-[43%] text-black border-[1px] border-[black]" placeholder="Search" type="field" onChange={(e) => handleSearch(e.target.value)}/>	
			</div>
			<div className={`${searchingKey? "block" : "hidden"}`}>
			<div className="grid gap-x-[3rem] grid-cols-3">
        {keys.map((item:any, key:any) => {
            // eslint-disable-next-line react/jsx-key
            return <div >
                <button className=" text-[blue]" onClick={() => {activeKey[0] == key ? setActiveKey([-1,-1,-1,-1,-1,-1,-1,-1,-1,-1-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]) : setActiveKey([key,-1,-1,-1,-1,-1,-1,-1,-1,-1-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1])} }>{item}</button>
                <div className={`rounded-[1.5rem] flex flex-col  w-[100%] rounded bg-[#e1e9f5] transition-all shadow-lg delay-3000 duration-3000 ease-in-out overflow-hidden ${key == activeKey[0]? "p-3 h-[10rem] " : "h-[0rem]"}`}>
                <span className="self-end cursor-pointer h-[0.3rem] relative" onClick={() => setActiveKey([])}>X</span>
                <div className="flex flex-col h-[9rem] justify-between">
                    <p className="">{item}: {mainData[item]}</p>
                    <button className="inset-x-0  top-max bottom-0">Suggest correction</button>
                </div>
                </div>
                </div>
                
        })}
        </div>
			</div>
	
			{/* Main Content  */}
			<h1 className="text-[1.5rem]">Dictionary</h1>
			<div className="">
				<div>
					<p onClick={() => activeChar == "A" ? setActiveChar("") : setActiveChar("A")} className={`bg-[#d3def0] border-b-[8px] border-b-[#e1e9f5] rounded-[1rem] pl-3 my-1 cursor-pointer ${activeChar != "A"? "text-[1.5rem]" : "text-[3rem]" } text-[blue]`}>A</p>
					<div className={`transition-all delay-5000 duration-5000 ease-in-out overflow-hidden ${activeChar == "A"? "h-max" : "h-0"}`}><GetContent data={props} dicType={dicType} value={dicType === "EngOjib"? "A" : "a"}/></div>
				</div>
				<div>
					<p onClick={() => activeChar == "B" ? setActiveChar("") : setActiveChar("B")} className={`bg-[#d3def0] border-b-[8px] border-b-[#e1e9f5] rounded-[1rem] pl-3 cursor-pointer ${activeChar != "B"? "text-[1.5rem]" : "text-[3rem]"} text-[blue]`}>B</p>
					<div className={`transition-all delay-5000 duration-5000 ease-in-out overflow-hidden ${activeChar == "B"? "" : "h-0"}`}><GetContent data={props} dicType={dicType} value={dicType === "EngOjib"? "B" : "b"}/></div>
				</div>
				<div>
					<p onClick={() => activeChar == "C" ? setActiveChar("") : setActiveChar("C")} className={`bg-[#d3def0] border-b-[8px] border-b-[#e1e9f5] rounded-[1rem] pl-3 my-1 cursor-pointer ${activeChar != "C"? "text-[1.5rem]" : "text-[3rem]"} text-[blue]`}>C</p>
					<div className={`transition-all delay-5000 duration-5000 ease-in-out overflow-hidden ${activeChar == "C"? "" : "h-0"}`}><GetContent data={props} dicType={dicType} value={dicType === "EngOjib"? "C" : "c"}/></div>
				</div>
				<div>
					<p onClick={() => activeChar == "D" ? setActiveChar("") : setActiveChar("D")} className={`bg-[#d3def0] border-b-[8px] border-b-[#e1e9f5] rounded-[1rem] pl-3 my-1 cursor-pointer ${activeChar != "D"? "text-[1.5rem]" : "text-[3rem]"} text-[blue]`}>D</p>
					<div className={`transition-all delay-5000 duration-5000 ease-in-out overflow-hidden ${activeChar == "D"? "" : "h-0"}`}><GetContent data={props} dicType={dicType} value={dicType === "EngOjib"? "D" : "d"}/></div>
				</div>
				<div>
					<p onClick={() => activeChar == "E" ? setActiveChar("") : setActiveChar("E")} className={`bg-[#d3def0] border-b-[8px] border-b-[#e1e9f5] rounded-[1rem] pl-3 my-1 cursor-pointer ${activeChar != "E"? "text-[1.5rem]" : "text-[3rem]"} text-[blue]`}>E</p>
					<div className={`transition-all delay-5000 duration-5000 ease-in-out overflow-hidden ${activeChar == "E"? "" : "h-0"}`}><GetContent data={props} dicType={dicType} value={dicType === "EngOjib"? "E" : "e"}/></div>
				</div>
				<div>
					<p onClick={() => activeChar == "F" ? setActiveChar("") : setActiveChar("F")} className={`bg-[#d3def0] border-b-[8px] border-b-[#e1e9f5] rounded-[1rem] pl-3 my-1 cursor-pointer ${activeChar != "F"? "text-[1.5rem]" : "text-[3rem]"} text-[blue]`}>F</p>
					<div className={`transition-all delay-5000 duration-5000 ease-in-out overflow-hidden ${activeChar == "F"? "" : "h-0"}`}><GetContent data={props} dicType={dicType} value={dicType === "EngOjib"? "F" : "f"}/></div>
				</div>
				<div>
					<p onClick={() => activeChar == "G" ? setActiveChar("") : setActiveChar("G")} className={`bg-[#d3def0] border-b-[8px] border-b-[#e1e9f5] rounded-[1rem] pl-3 my-1 cursor-pointer ${activeChar != "G"? "text-[1.5rem]" : "text-[3rem]"} text-[blue]`}>G</p>
					<div className={`transition-all delay-5000 duration-5000 ease-in-out overflow-hidden ${activeChar == "G"? "" : "h-0"}`}><GetContent data={props} dicType={dicType} value={dicType === "EngOjib"? "G" : "g"}/></div>
				</div>
				<div>
					<p onClick={() => activeChar == "H" ? setActiveChar("") : setActiveChar("H")} className={`bg-[#d3def0] border-b-[8px] border-b-[#e1e9f5] rounded-[1rem] pl-3 my-1 cursor-pointer ${activeChar != "H"? "text-[1.5rem]" : "text-[3rem]"} text-[blue]`}>H</p>
					<div className={`transition-all delay-5000 duration-5000 ease-in-out overflow-hidden ${activeChar == "H"? "" : "h-0"}`}><GetContent data={props} dicType={dicType} value={dicType === "EngOjib"? "H" : "h"}/></div>
				</div>
				<div>
					<p onClick={() => activeChar == "I" ? setActiveChar("") : setActiveChar("I")} className={`bg-[#d3def0] border-b-[8px] border-b-[#e1e9f5] rounded-[1rem] pl-3 my-1 cursor-pointer ${activeChar != "I"? "text-[1.5rem]" : "text-[3rem]"} text-[blue]`}>I</p>
					<div className={`transition-all delay-5000 duration-5000 ease-in-out overflow-hidden ${activeChar == "I"? "" : "h-0"}`}><GetContent data={props} dicType={dicType} value={dicType === "EngOjib"? "I" : "i"}/></div>
				</div>
				<div>
					<p onClick={() => activeChar == "J" ? setActiveChar("") : setActiveChar("J")} className={`bg-[#d3def0] border-b-[8px] border-b-[#e1e9f5] rounded-[1rem] pl-3 my-1 cursor-pointer ${activeChar != "J"? "text-[1.5rem]" : "text-[3rem]"} text-[blue]`}>J</p>
					<div className={`transition-all delay-5000 duration-5000 ease-in-out overflow-hidden ${activeChar == "J"? "" : "h-0"}`}><GetContent data={props} dicType={dicType} value={dicType === "EngOjib"? "J" : "j"}/></div>
				</div>
				<div>
					<p onClick={() => activeChar == "K" ? setActiveChar("") : setActiveChar("K")} className={`bg-[#d3def0] border-b-[8px] border-b-[#e1e9f5] rounded-[1rem] pl-3 my-1 cursor-pointer ${activeChar != "K"? "text-[1.5rem]" : "text-[3rem]"} text-[blue]`}>K</p>
					<div className={`transition-all delay-5000 duration-5000 ease-in-out overflow-hidden ${activeChar == "K"? "" : "h-0"}`}><GetContent data={props} dicType={dicType} value={dicType === "EngOjib"? "K" : "k"}/></div>
				</div>
				<div>
					<p onClick={() => activeChar == "L" ? setActiveChar("") : setActiveChar("L")} className={`bg-[#d3def0] border-b-[8px] border-b-[#e1e9f5] rounded-[1rem] pl-3 my-1 cursor-pointer ${activeChar != "L"? "text-[1.5rem]" : "text-[3rem]"} text-[blue]`}>L</p>
					<div className={`transition-all delay-5000 duration-5000 ease-in-out overflow-hidden ${activeChar == "L"? "" : "h-0"}`}><GetContent data={props} dicType={dicType} value={dicType === "EngOjib"? "L" : "l"}/></div>
				</div>
				<div>
					<p onClick={() => activeChar == "M" ? setActiveChar("") : setActiveChar("M")} className={`bg-[#d3def0] border-b-[8px] border-b-[#e1e9f5] rounded-[1rem] pl-3 my-1 cursor-pointer ${activeChar != "M"? "text-[1.5rem]" : "text-[3rem]"} text-[blue]`}>M</p>
					<div className={`transition-all delay-5000 duration-5000 ease-in-out overflow-hidden ${activeChar == "M"? "" : "h-0"}`}><GetContent data={props} dicType={dicType} value={dicType === "EngOjib"? "M" : "m"}/></div>
				</div>
				<div>
					<p onClick={() => activeChar == "N" ? setActiveChar("") : setActiveChar("N")} className={`bg-[#d3def0] border-b-[8px] border-b-[#e1e9f5] rounded-[1rem] pl-3 my-1 cursor-pointer ${activeChar != "N"? "text-[1.5rem]" : "text-[3rem]"} text-[blue]`}>N</p>
					<div className={`transition-all delay-5000 duration-5000 ease-in-out overflow-hidden ${activeChar == "N"? "" : "h-0"}`}><GetContent data={props} dicType={dicType} value={dicType === "EngOjib"? "N" : "n"}/></div>
				</div>
				<div>
					<p onClick={() => activeChar == "O" ? setActiveChar("") : setActiveChar("O")} className={`bg-[#d3def0] border-b-[8px] border-b-[#e1e9f5] rounded-[1rem] pl-3 my-1 cursor-pointer ${activeChar != "O"? "text-[1.5rem]" : "text-[3rem]"} text-[blue]`}>O</p>
					<div className={`transition-all delay-5000 duration-5000 ease-in-out overflow-hidden ${activeChar == "O"? "" : "h-0"}`}><GetContent data={props} dicType={dicType} value={dicType === "EngOjib"? "O" : "o"}/></div>
				</div>
				<div>
					<p onClick={() => activeChar == "P" ? setActiveChar("") : setActiveChar("P")} className={`bg-[#d3def0] border-b-[8px] border-b-[#e1e9f5] rounded-[1rem] pl-3 my-1 cursor-pointer ${activeChar != "P"? "text-[1.5rem]" : "text-[3rem]"} text-[blue]`}>P</p>
					<div className={`transition-all delay-5000 duration-5000 ease-in-out overflow-hidden ${activeChar == "P"? "" : "h-0"}`}><GetContent data={props} dicType={dicType} value={dicType === "EngOjib"? "P" : "p"}/></div>
				</div>
				<div>
					<p onClick={() => activeChar == "Q" ? setActiveChar("") : setActiveChar("Q")} className={`bg-[#d3def0] border-b-[8px] border-b-[#e1e9f5] rounded-[1rem] pl-3 my-1 cursor-pointer ${activeChar != "Q"? "text-[1.5rem]" : "text-[3rem]"} text-[blue]`}>Q</p>
					<div className={`transition-all delay-5000 duration-5000 ease-in-out overflow-hidden ${activeChar == "Q"? "" : "h-0"}`}><GetContent data={props} dicType={dicType} value={dicType === "EngOjib"? "Q" : "q"}/></div>
				</div>
				<div>
					<p onClick={() => activeChar == "R" ? setActiveChar("") : setActiveChar("R")} className={`bg-[#d3def0] border-b-[8px] border-b-[#e1e9f5] rounded-[1rem] pl-3 my-1 cursor-pointer ${activeChar != "R"? "text-[1.5rem]" : "text-[3rem]"} text-[blue]`}>R</p>
					<div className={`transition-all delay-5000 duration-5000 ease-in-out overflow-hidden ${activeChar == "R"? "" : "h-0"}`}><GetContent data={props} dicType={dicType} value={dicType === "EngOjib"? "R" : "r"}/></div>
				</div>
				<div>
					<p onClick={() => activeChar == "S" ? setActiveChar("") : setActiveChar("S")} className={`bg-[#d3def0] border-b-[8px] border-b-[#e1e9f5] rounded-[1rem] pl-3 my-1 cursor-pointer ${activeChar != "S"? "text-[1.5rem]" : "text-[3rem]"} text-[blue]`}>S</p>
					<div className={`transition-all delay-5000 duration-5000 ease-in-out overflow-hidden ${activeChar == "S"? "" : "h-0"}`}><GetContent data={props} dicType={dicType} value={dicType === "EngOjib"? "S" : "s"}/></div>
				</div>
				<div>
					<p onClick={() => activeChar == "T" ? setActiveChar("") : setActiveChar("T")} className={`bg-[#d3def0] border-b-[8px] border-b-[#e1e9f5] rounded-[1rem] pl-3 my-1 cursor-pointer ${activeChar != "T"? "text-[1.5rem]" : "text-[3rem]"} text-[blue]`}>T</p>
					<div className={`transition-all delay-5000 duration-5000 ease-in-out overflow-hidden ${activeChar == "T"? "" : "h-0"}`}><GetContent data={props} dicType={dicType} value={dicType === "EngOjib"? "T" : "t"}/></div>
				</div>
				<div>
					<p onClick={() => activeChar == "U" ? setActiveChar("") : setActiveChar("U")} className={`bg-[#d3def0] border-b-[8px] border-b-[#e1e9f5] rounded-[1rem] pl-3 my-1 cursor-pointer ${activeChar != "U"? "text-[1.5rem]" : "text-[3rem]"} text-[blue]`}>U</p>
					<div className={`transition-all delay-5000 duration-5000 ease-in-out overflow-hidden ${activeChar == "U"? "" : "h-0"}`}><GetContent data={props} dicType={dicType} value={dicType === "EngOjib"? "U" : "u"}/></div>
				</div>
				<div>
					<p onClick={() => activeChar == "V" ? setActiveChar("") : setActiveChar("V")} className={`bg-[#d3def0] border-b-[8px] border-b-[#e1e9f5] rounded-[1rem] pl-3 my-1 cursor-pointer ${activeChar != "V"? "text-[1.5rem]" : "text-[3rem]"} text-[blue]`}>V</p>
					<div className={`transition-all delay-5000 duration-5000 ease-in-out overflow-hidden ${activeChar == "V"? "" : "h-0"}`}><GetContent data={props} dicType={dicType} value={dicType === "EngOjib"? "V" : "v"}/></div>
				</div>
				<div>
					<p onClick={() => activeChar == "W" ? setActiveChar("") : setActiveChar("W")} className={`bg-[#d3def0] border-b-[8px] border-b-[#e1e9f5] rounded-[1rem] pl-3 my-1 cursor-pointer ${activeChar != "W"? "text-[1.5rem]" : "text-[3rem]"} text-[blue]`}>W</p>
					<div className={`transition-all delay-5000 duration-5000 ease-in-out overflow-hidden ${activeChar == "W"? "" : "h-0"}`}><GetContent data={props} dicType={dicType} value={dicType === "EngOjib"? "W" : "w"}/></div>
				</div>
				<div>
					<p onClick={() => activeChar == "X" ? setActiveChar("") : setActiveChar("X")} className={`bg-[#d3def0] border-b-[8px] border-b-[#e1e9f5] rounded-[1rem] pl-3 my-1 cursor-pointer ${activeChar != "X"? "text-[1.5rem]" : "text-[3rem]"} text-[blue]`}>X</p>
					<div className={`transition-all delay-5000 duration-5000 ease-in-out overflow-hidden ${activeChar == "X"? "" : "h-0"}`}><GetContent data={props} dicType={dicType} value={dicType === "EngOjib"? "X" : "x"}/></div>
				</div>
				<div>
					<p onClick={() => activeChar == "Y" ? setActiveChar("") : setActiveChar("Y")} className={`bg-[#d3def0] border-b-[8px] border-b-[#e1e9f5] rounded-[1rem] pl-3 my-1 cursor-pointer ${activeChar != "Y"? "text-[1.5rem]" : "text-[3rem]"} text-[blue]`}>Y</p>
					<div className={`transition-all delay-5000 duration-5000 ease-in-out overflow-hidden ${activeChar == "Y"? "" : "h-0"}`}><GetContent data={props} dicType={dicType} value={dicType === "EngOjib"? "Y" : "y"}/></div>
				</div>
				<div>
					<p onClick={() => activeChar == "Z" ? setActiveChar("") : setActiveChar("Z")} className={`bg-[#d3def0] border-b-[8px] border-b-[#e1e9f5] rounded-[1rem] pl-3 my-1 cursor-pointer ${activeChar != "Z"? "text-[1.5rem]" : "text-[3rem]"} text-[blue]`}>Z</p>
					<div className={`transition-all delay-5000 duration-5000 ease-in-out overflow-hidden ${activeChar == "Z"? "" : "h-0"}`}><GetContent data={props} dicType={dicType} value={dicType === "EngOjib"? "Z" : "z"}/></div>
				</div>
			</div>
		</div>
	);
};

export default Content