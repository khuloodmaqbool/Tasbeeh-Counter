import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
export const Counter = () => {

    const [inpVal, setInpVal] = useState(1);
    const [count, setCount] = useState(0)
    const btnClass = "rounded-full  border-2 border-white flex justify-center items-center";

    const handleInpVal = (val) => {
        setInpVal(parseInt(val))
    }

    const handlePlusVal = (val) => {
        setCount(count + val)
    }

    const handleMinusVal = (val) => {
        setCount(count - val)
    }

    return (
        <>
            <div className="relative top-12 flex items-end justify-center main-div bg-black w-80 p-4 rounded-3xl mx-auto  shadow-lg shadow-gray-400">

                <div className="w-full ">
                    <div style={{ backgroundColor: "rgba(0, 40, 78, 1)" }} className="border-4 border-white flex items-center justify-center bg-white w-36 h-36 rounded-full p-6 mx-auto my-3 shadow-md shadow-white">
                        <h1 className="text-6xl">{count}</h1>
                    </div>

                    <div className="flex items-center justify-center px-3 my-9">
                        <span>Steps:</span>   <input className="rounded-full mx-auto p-2 text-black" type="number" placeholder="Steps" value={inpVal} onChange={(event) => handleInpVal(event.target.value)} />
                    </div>

                    <div className="flex justify-around pb-4">
                        <button onClick={() => handleMinusVal(inpVal)} disabled={count <= 0} className={`${btnClass} p-4 w-16 h-16 btn`} ><FaMinus /></button>
                        <button onClick={() => setCount(0)} className={` ${btnClass} px-3 w-24 btn`}>Reset</button>
                        <button onClick={() => handlePlusVal(inpVal)} disabled={count >= 100} className={`${btnClass} p-4 w-16 h-16 btn`} ><FaPlus /></button>
                    </div>

                </div>

            </div>
        </>
    )
}
