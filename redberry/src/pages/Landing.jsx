import './landing.css'
import '../fonts/font.css'
import redberryLogo from '../images/logo-redberry.png'
import landingMainImg from'../images/landing-main-img.png'
import landingMainMobile from '../images/landing-main-mobile.png'
import React from 'react'

export default function Landing() {

  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)
    
    React.useEffect(() => {
        function watchWidth() {
            setWindowWidth(window.innerWidth)
        }
        
        window.addEventListener("resize", watchWidth)
        
        return function() {
            window.removeEventListener("resize", watchWidth)
        }
    }, [])

    let width = true

    if(windowWidth <= 390){
      width = true
    }else{
      width=false
    }
   
  return (
    <div className='Landing'>
        <img className='Landing__logo' src={redberryLogo} alt="redberry logo" />
        <img className='Landing__main' src={width ? landingMainMobile : landingMainImg} alt="redberry logo" />
        <div className="Landing__btns">
            <button className='Landing__btn'>ჩანაწერის დამატება</button>
            <button className='Landing__btn Landing__btn--margin'>ჩანაწერების სია</button>
        </div>
    </div>
  )
}
