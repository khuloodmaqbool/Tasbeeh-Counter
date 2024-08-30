export const Duas = () => {
    let div3 = [
        {
            english: "SubhanAllah",
            urdu: " سُبْحَانَ اللّٰہِ",
            image_link: "img1.svg",
            alt: "SubhanAllah"
        },
        {
            english: "Alhamdulillah",
            urdu: "اَلْحَمْدُ لِلّٰہِ",
            image_link: "img2.svg",
            alt: "Alhamdulillah"
        },
        {
            english: "Allahu Akbar",
            urdu: "اَللّٰہُ اَکْبَر",
            image_link: "img3.svg",
            alt: "Allahu Akbar"
        },
        {
            english: "Astaghfirullah",
            urdu: "اَسْتَغْفِرُ اللّٰہَ",
            image_link: "img4.svg",
            alt: "Astaghfirullah"
        },
        {
            english: "La ilaha illallah",
            urdu: " لَا اِلٰہَ اِلَّا اللّٰہُ",
            image_link: "img5.svg",
            alt: "La ilaha illallah"
        }
    ]
    return (
        <>
            <div className="relative top-24 w-80 main-div h-full m-10 p-4 rounded-3xl mx-auto flex items-end justify-center  shadow-lg shadow-gray-400">

                <div className="w-full">
                    {
                        div3.map((crntele) => {
                            return (
                                <>
                                    <div className="bg-white text-black flex justify-between items-center px-4 my-4 mx-2 rounded-full py-2">
                                        <p>{crntele.english}</p>
                                        <img src={crntele.image_link} alt={crntele.alt} />
                                    </div>
                                </>
                            )
                        })
                    }
                </div>

            </div>
        </>
    )
}