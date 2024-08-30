import { MdSunny } from "react-icons/md";
import { HiMiniMoon } from "react-icons/hi2";
import { useState } from "react";
export const SwitchMode = () => {

    const [switchBtn, setSwitchBtn] = useState(true);
    const [theme, setTheme] = useState("light-theme")

    const handleswitchBtn = () => {
        theme == "light-theme" ? setTheme("dark-theme") : setTheme("light-theme")
        setSwitchBtn(!switchBtn)
    }

    document.body.className = theme;
    return (
        <>
            <div style={{
                backgroundColor: `${switchBtn == true ? "rgba(250, 233, 177, 1)" : "rgba(9, 46, 64, 1)"}`
            }}
                onClick={handleswitchBtn} className="togglebtn ms-auto my-4 me-8 border-2 border-white">

                <div className={`btn2 ${switchBtn == true ? "lightbtn" : "darkbtn"} flex justify-center items-center p-2`}>
                    {switchBtn == true ? <MdSunny className="w-full h-full" /> : <HiMiniMoon className="w-full h-full" />}
                </div>


            </div>
        </>
    )

}

