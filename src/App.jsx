// import React from 'react'

import Description from "./components/Description";
import HowToPlay from "./components/HowToPlay";
import OurTeam from "./components/OurTeam";
import Title from "./components/Title";
import Tombol from "./components/Tombol";

export default function App() {
    return (
        <main>
            <Title />
            <Description />
            <HowToPlay />
            <Tombol />
            <OurTeam />
        </main>
    );
}
