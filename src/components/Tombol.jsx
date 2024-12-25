// import React from 'react'

const Tombol = () => {
    return (
        <section className="min-h-80 flex flex-col justify-center items-center bg-[#304849]">
            <h1 className="text-2xl text-white font-semibold mb-12 text-center">
                Tombol - tombol yang digunakan untuk memainkan game
                <br /> The Hunchback From Land Of Java :
            </h1>
            <div className="flex flex-col lg:flex-row space-x-10">
                <div className="flex flex-col">
                    <kbd className="px-4 py-2 bg-gray-800 rounded-md cursor-pointer select-none active:translate-y-2 active:[box-shadow:0_0px_0_0_#8b8b8b] active:border-b-0 transition-all duration-150 [box-shadow:0_5px_0_0_#8b8b8b]">
                        <span className="flex flex-col justify-center items-center h-full text-white font-bold text-lg">
                            A
                        </span>
                    </kbd>
                    <p className="text-white text-center mt-3 font-bold">
                        Ke kiri
                    </p>
                </div>
                <div className="flex flex-col">
                    <kbd className="px-4 py-2 bg-gray-800 rounded-md cursor-pointer select-none active:translate-y-2 active:[box-shadow:0_0px_0_0_#8b8b8b] active:border-b-0 transition-all duration-150 [box-shadow:0_5px_0_0_#8b8b8b]">
                        <span className="flex flex-col justify-center items-center h-full text-white font-bold text-lg">
                            D
                        </span>
                    </kbd>
                    <p className="text-white text-center mt-3 font-bold">
                        Ke kanan
                    </p>
                </div>
                <div className="flex flex-col">
                    <kbd className="px-4 py-2 bg-gray-800 rounded-md cursor-pointer select-none active:translate-y-2 active:[box-shadow:0_0px_0_0_#8b8b8b] active:border-b-0 transition-all duration-150 [box-shadow:0_5px_0_0_#8b8b8b]">
                        <span className="flex flex-col justify-center items-center h-full text-white font-bold text-lg">
                            Klik kiri
                        </span>
                    </kbd>
                    <p className="text-white text-center mt-3 font-bold">
                        Menyerang
                    </p>
                </div>
                <div className="flex flex-col">
                    <kbd className="px-4 py-2 bg-gray-800 rounded-md cursor-pointer select-none active:translate-y-2 active:[box-shadow:0_0px_0_0_#8b8b8b] active:border-b-0 transition-all duration-150 [box-shadow:0_5px_0_0_#8b8b8b]">
                        <span className="flex flex-col justify-center items-center h-full text-white font-bold text-lg">
                            Space
                        </span>
                    </kbd>
                    <p className="text-white text-center mt-3 font-bold">
                        Melompat
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Tombol;
