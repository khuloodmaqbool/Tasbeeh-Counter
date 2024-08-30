import { Counter } from "./Counter";
import { Duas } from "./Duas";
import "./Tasbeeh.css"

export const Tasbeeh = () => {
    return (
        <>
            <div className=" w-full grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 p-3 gap-10 justify-center items-center">

                <div className="w-80 main-div bg-black mx-auto p-4 rounded-3xl flex items-center shadow-lg shadow-gray-400">
                    <div>
                        <img src="Bismillah-img.svg" alt="Bismillah" />
                        <p className="text-center text-sm px-1 py-2">In the name of Allah, the Most Gracious, the Most Merciful.</p>
                    </div>
                </div>

                <Counter />
                <Duas />
            </div>
        </>
    )
}
