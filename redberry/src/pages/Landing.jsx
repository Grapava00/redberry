import './landing.css'
import redberryLogo from '../images/logo-redberry.png'
import landingMainImg from'../images/landing-main-img.png'

export default function Landing() {
  return (
    <div className='Landing'>
        <img className='Landing__logo' src={redberryLogo} alt="redberry logo" />
        <img className='Landing__main' src={landingMainImg} alt="landing page main image" />
        <div className="Landing__btns">
            <button className='Landing__btn'>ჩანაწერის დამატება</button>
            <button className='Landing__btn'>ჩანაწერების სია</button>
        </div>
    </div>
  )
}
