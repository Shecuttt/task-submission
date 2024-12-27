// import React from 'react'
import folderIcon from "./../assets/folder.png";
import kresna from "./../assets/img/kresna.jpg";
import saya from "./../assets/img/husni.jpg";
import zulia from "./../assets/img/zulia.jpg";

const links = [
    {
        icon: folderIcon,
        name: "Game Narrative",
        url: "https://drive.google.com/file/d/1D78AAnGVWL1FmBA6KIVSHk-quO3-hEjb/view?usp=sharing",
    },
    {
        icon: folderIcon,
        name: "Level Design",
        url: "https://drive.google.com/file/d/1DKr2iDBWOmklw8AQszHEOLmLWM7P1kiU/view?usp=sharing",
    },
    {
        icon: folderIcon,
        name: "Game Mechanics",
        url: "https://drive.google.com/file/d/19xwU5OKgZbKwz19smfo7D_5HcdviWnDz/view?usp=sharing",
    },
    {
        icon: folderIcon,
        name: "The Hunchbeck From Land of Java",
        url: "https://drive.google.com/file/d/1l2lTeU8DVyV4YcMWqwsV7w1hs4jJ6rES/view?usp=sharing",
    },
    {
        icon: folderIcon,
        name: "Assets",
        url: "https://drive.google.com/drive/folders/1lCVwIC95ydoyx6jTIZ38AcMUUyqlSl5w?usp=sharing",
    },
    {
        icon: folderIcon,
        name: "Game Testing",
        url: "https://drive.google.com/file/d/1DYznyYlrt6Wu5EU2_bql2JSgZAVTfYp4/view?usp=sharing",
    },
];

const OurTeam = () => {
    return (
        <footer className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-[#304849] to-black py-16">
            <h1 className="text-3xl lg:text-5xl font-bold text-center text-white uppercase mb-16">
                great game made by <br />
                passionate people
            </h1>
            <div className="flex items-start space-x-8 lg:w-3/5 px-4 lg:px-0">
                <div className="flex flex-col items-center space-y-4 w-1/3">
                    <img
                        className="h-16 w-16 lg:h-24 lg:w-24 rounded-full object-cover transition hover:scale-125 duration-300"
                        src={saya}
                        alt="team member 1"
                    />
                    <h2 className="text-sm font-medium text-white text-center">
                        Zaid Husni Abdillah
                    </h2>
                    <p className="text-sm text-gray-400 text-center">
                        As a leader
                    </p>
                </div>
                <div className="flex flex-col items-center space-y-4 w-1/3">
                    <img
                        className="h-16 w-16 lg:h-24 lg:w-24 rounded-full object-cover transition hover:scale-125 duration-300"
                        src={kresna}
                        alt="team member 1"
                    />
                    <h2 className="text-sm font-medium text-white text-center">
                        Muhammad Kresna Mahardhika
                    </h2>
                    <p className="text-sm text-gray-400 text-center">
                        As a Game Designer and Game Developer
                    </p>
                </div>
                <div className="flex flex-col items-center space-y-4 w-1/3">
                    <img
                        className="h-16 w-16 lg:h-24 lg:w-24 rounded-full object-cover transition hover:scale-125 duration-300"
                        src={zulia}
                        alt="team member 1"
                    />
                    <h2 className="text-sm font-medium text-white text-center">
                        Siti Laeli Nuzul L
                    </h2>
                    <p className="text-sm text-gray-400 text-center">
                        As a Game Designer and Game Tester
                    </p>
                </div>
            </div>
            <div className="flex flex-col mt-20 px-6 lg:px-0">
                <h2 className="text-5xl font-bold text-white mb-12 text-center">
                    Documents Link
                </h2>
                <div className="grid grid-cols-2 gap-8">
                    {links.map((item) => (
                        <div
                            key={item.name}
                            className="flex items-start space-x-4 hover:bg-white/15 py-2 px-4 rounded-lg"
                        >
                            <img
                                className="h-12 w-12"
                                src={item.icon}
                                alt={item.name}
                            />
                            <div className="flex flex-col space-y-1">
                                <h3 className="text-sm font-medium text-white">
                                    {item.name}
                                </h3>
                                <a
                                    href={item.url}
                                    target="_blank"
                                    className="text-sm font-medium underline text-blue-500 hover:text-teal-600 hover:uppercase transition ease-in-out hover:-translate-y-1 hover:scale-110"
                                >
                                    url
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default OurTeam;
