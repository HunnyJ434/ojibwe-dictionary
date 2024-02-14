import React, {useEffect, useState} from "react"
import SuggestCorrect from './suggest-correction'
const GetContent = (props:any) => {

    const [mainData , setMainData] = useState(props?.data?.EngOjib)
    const [keys, setKeys] = useState(Object?.keys(mainData)?.sort())
    const [buttonPopup, setButtonPopup] = useState(false)
    const [correctionKey, setCorrectionKey] = useState("")
    const [correctionValue, setCorrectionValue] = useState("")
    const [correctionType, setCorrectionType] = useState("")
    useEffect(()=> {
        if(props?.dicType === "OjibEng"){
            setMainData(props?.data?.OjibEng)
            setKeys(Object.keys(props?.data?.OjibEng).sort())
        }
        else{
            setMainData(props?.data?.EngOjib)
            setKeys(Object.keys(props?.data?.EngOjib).sort())

        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props?.dicType])
   
    
     
     const [activeKey, setActiveKey] = useState([-1,-1,-1,-1,-1,-1,-1,-1,-1,-1
        -1,-1,-1,-1,-1,-1,-1,-1,-1,-1
        -1,-1,-1,-1,-1,-1])
	const findNewKeys = (key:String) => {
			if (key[0] == props?.value){
				return key
			}
		
	}
    const handleCorrection = (valueKey:any) => {
        setCorrectionKey(valueKey)
        setCorrectionValue(mainData[valueKey])
        setCorrectionType(props?.dicType)
        setButtonPopup(true)
        
    }
    return (
        <div>
            <SuggestCorrect value={correctionValue} valueKey={correctionKey} type={correctionType} trigger={buttonPopup} setTrigger={setButtonPopup} />

        
        <div className="grid gap-x-[3rem] grid-cols-3 text-[0.4rem] md:text-[0.7rem] lg:text-[1rem] xl:text-[1.2rem]">
        {keys?.filter(findNewKeys).map((item:any, key:any) => {
            // eslint-disable-next-line react/jsx-key
            return <div >
                <button className=" text-[blue]" onClick={() => {activeKey[0] == key ? setActiveKey([-1,-1,-1,-1,-1,-1,-1,-1,-1,-1-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]) : setActiveKey([key,-1,-1,-1,-1,-1,-1,-1,-1,-1-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1])} }>{item}</button>
                <div className={`rounded-[1.5rem] flex flex-col  w-[100%] rounded bg-[#e1e9f5] transition-all shadow-lg delay-3000 duration-3000 ease-in-out overflow-hidden ${key == activeKey[0]? "p-3 h-[7rem] lg:h-[9rem] xl:h-[10rem] mb-3" : "h-[0rem]"}`}>
                <span className="self-end cursor-pointer h-[0.3rem] relative" onClick={() => setActiveKey([])}>X</span>
                <div className="flex flex-col h-[9rem] justify-between">
                    <p className="">{item}: {mainData[item]}</p>
                    <button onClick={() => (handleCorrection(item))} className="inset-x-0  top-max bottom-0">Suggest correction</button>
                </div>
                </div>
                </div>
                
        })}
        </div>
        </div>
    )
}

export default GetContent