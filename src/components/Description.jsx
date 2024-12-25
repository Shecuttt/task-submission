// import React from 'react'
import ratu from "./../assets/img/ratu.png";
import genderuwo from "./../assets/img/genderuwo 1.png";
import ula from "./../assets/img/ular naga 1.png";

const Description = () => {
    return (
        <section className="bg-[#020202] text-white min-h-screen flex flex-col lg:flex-row justify-center items-center space-y-6 lg:space-y-0 lg:space-x-10 py-8 lg:px-20">
            <div className="w-full px-10 lg:px-0 lg:w-7/12">
                <h2 className="mb-6 text-teal-300 text-3xl font-semibold">
                    Description
                </h2>
                <p>
                    Sebuah Game yang menceritakan Si Bungkuk yang hidup dengan
                    kakek tua di suatu pedesaan kuno di tanah Jawa.
                    Ketertarikannya akan seorang wanita cantik menumbuhkan
                    ambisi dalam dirinya untuk berubah menjadi pria yang tegap
                    dan gagah. Meskipun banyak rintangan yang harus si bungkuk
                    lewati dan hal - hal yang perlu dikorbankan. Ia rela, demi
                    meminta pertolongan pada Ratu pantai selatan.
                </p>
            </div>
            <div className="lg:w-5/12 px-10 lg:px-0 h-[22rem]">
                <img src={ratu} className="ml-auto" />
                <img src={genderuwo} className="-mt-14 ml-36" />
                <img src={ula} className="-mt-72 ml-16" />
            </div>
        </section>
    );
};

export default Description;
