import react, { useEffect, useState } from 'react'

function DigitalClock (){

    const [time, setTime] = useState(new Date());

    useEffect( () =>{
        const intervalId = setInterval(() =>{
            setTime(new Date());
        })

        return() => {
            clearInterval(intervalId);
        }



    },[])

    function formatTime() {
        let hours = time.getHours();
        let mintues = time.getMinutes();
        let seconds = time.getSeconds();
        let merdiam = hours > 12 ? "PM" : "AM"

        hours = hours % 12 || 12

        return(`${padZero(hours)} : ${padZero(mintues)} : ${padZero(seconds)}  ${merdiam}`)

    }

    function padZero(number){
        return( number < 10 ? "0" : "") + number
    }


    return(
       <div className='clock-cointainer'>
        <div className='Clock' >
            <span>{formatTime()}</span>
            


        </div>
       </div>

    )
}

export default DigitalClock;