import React from "react"

function About({ aboutInfo, imgSrc = "https://pbs.twimg.com/media/EBgjK0PW4AAuIpO.jpg" }) {

    return ( <
        aside >
        <
        img src = { imgSrc }
        alt = "IM A STRING MOTHERFUCKER" >
        <
        /img> <
        p > { aboutInfo } < /p> <
        /aside>

    )

}

export default About