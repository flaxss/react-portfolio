import { useEffect, useState } from "react"
import Content from "./components/Content"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"

function App() {
    const [color, setColor] = useState('bg-primary');
    const [textColor, setTextColor] = useState('text-quatenary');
    const [nightMode, setNightMode] = useState(false);

    function changeMode(){
        setNightMode(!nightMode);
    }

    useEffect(() => {
        if(!nightMode){
            setColor('bg-primary')
            setTextColor('text-white')
        }else{
            setColor('bg-white')
            setTextColor('text-primary')
        }
    }, [nightMode])
    return (
        <>
            <div className={`transition duration-600 ${textColor} ${color} font-mono`}>
                <Navbar changeMode={changeMode} />
                <Content />
                <Footer />
            </div>
        </>
    )
}

export default App
