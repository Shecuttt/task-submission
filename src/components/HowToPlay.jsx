// import React from 'react'
import awal from "./../assets/img/awal.png";
import boss from "./../assets/img/boss.png";
import wit from "./../assets/img/wit.png";
import ula from "./../assets/img/ula.png";

const HowToPlay = () => {
    return (
        <section className="min-h-screen flex flex-col justify-center items-center py-16 lg:space-y-8 bg-gradient-to-b from-black to-[#304849]">
            <h1 className="px-10 py-2 rounded-full uppercase text-3xl lg:text-5xl font-bold text-white mb-10">
                How to play
            </h1>
            <div className="flex flex-col lg:flex-row items-center lg:space-x-16 lg:mr-16">
                <div className="w-4/5 lg:w-2/5">
                    <img src={awal} alt="Demo1" className="" />
                    <img src={boss} alt="Demo2" />
                </div>
                <p className="text-center lg:text-right lg:font-semibold text-white w-4/5 mt-6 lg:mt-0 lg:w-3/5 lg:pl-4">
                    Game berjumlah 11 level ini, mengharuskan pemain
                    menyelesaikan tantangan atau musuh - musuh yang muncul dalam
                    setiap level. Tentunya dengan memiliki power yang terbatas.
                    Serta suasana, musuh - musuh, elemen - elemen, efek suara
                    yang ada tidak menjadikan game ini game yang membosankan.
                </p>
            </div>
            <div className="flex flex-col-reverse lg:flex-row items-center lg:space-x-16 lg:ml-16">
                <p className="text-center lg:text-left lg:font-semibold text-white w-4/5 lg:w-3/5 mt-6 lg:mt-0">
                    Dengan senjata dari si pemain adalah keris sakti. Mampu
                    meyerang dan membunuh musuh - musuh dengan beberapa teknik
                    serang yang dimilikinya. Pemain juga dapat mengisi kembali
                    energi atau powernya ketika menemukan bangunan berbentuk
                    candi dalam perjalanannya.
                </p>
                <div className="w-4/5 lg:w-2/5 mt-6 lg:mt-0">
                    <img src={wit} alt="Demo1" />
                    <img src={ula} alt="Demo2" />
                </div>
            </div>
        </section>
    );
};

export default HowToPlay;
