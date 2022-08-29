import './workmate.css'
import arrowLeft from '../../images/workmate/arrow-left.png'
import arrowDown from '../../images/workmate/arrow-down.png'
import logo from '../../images/workmate/logo.png'
import '../../fonts/font.css'
import React from 'react'


export default function Workmate() {

    const [formData, setFormData] = React.useState(
        {
            firstName: "", 
            lastName: "", 
            team: "",
            position: "",
            email: "", 
            call : ""
        }
    )
    
    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }



  return (
    <div className='Wbody'>
    <div className='Workmate'>
        <div className='Workmate__top'>
            <a className="Workmate__top--arrow" href="#">
            <img src={arrowLeft} alt="left arrow"/>
            </a>
            <div className='Workmate__top--texts'>
                <span className='Workmate__top--text underline'>თანამშრომლის ინფო</span>
                <span className='Workmate__top--text none-mobile'>ლეპტოპის მახასიათებლები</span>
            </div>
        </div>
        <span className='none-desktop'>1/2</span>
        <form>
            <div className='Workmate__inputs--r1'>
                <div className='Workmate__inputs--r1-1 w-100'>
                    <label htmlFor='firstName'>სახელი</label>
                    <br/>
                    <input
                        id="firstName"
                        className='p-19 border'
                        type="text"
                        placeholder="გრიშა"
                        onChange={handleChange}
                        name="firstName"
                        value={formData.firstName}
                    />
                    <span className="Workmate__desc">მინიმუმ 2 სიმბოლო, ქართული ასოები</span>
                </div>
                <div className='Workmate__inputs--r1-2 w-100'>
                    <label htmlFor='lastName'>გვარი</label>
                    <br/>
                    <input
                        id="lastName"
                        className='p-19 border'
                        type="text"
                        placeholder="ბაგრატიონი"
                        onChange={handleChange}
                        name="lastName"
                        value={formData.lastName}
                    />
                    <span className="Workmate__desc">მინიმუმ 2 სიმბოლო, ქართული ასოები</span>
                </div>
            </div>
            <div className='Workmate__select--r2 w-100 m-37'>
                <select 
                    id="team" 
                    className='p-19'
                    value={formData.team}
                    onChange={handleChange}
                    name="team"
                >
                    <option value="">თიმი</option>
                    <option className="option" value="orange">Orange</option>
                    <option className="option" value="yellow">Yellow</option>
                    <option className="option" value="green">Green</option>
                    <option className="option" value="blue">Blue</option>
                    <option className="option" value="indigo">Indigo</option>
                    <option className="option"  value="violet">Violet</option>
                </select>
                <img className="Workmate__arrow--down"src={arrowDown} alt="arrow down" />
            </div>
            <div className='Workmate__select--r3 w-100 m-37'>
                <select 
                    id="position" 
                    className="p-19"
                    value={formData.position}
                    onChange={handleChange}
                    name="position"
                >
                    <option value="">პოზიცია</option>
                    <option value="orange">Orange</option>
                    <option value="yellow">Yellow</option>
                    <option value="green">Green</option>
                    <option value="blue">Blue</option>
                    <option value="indigo">Indigo</option>
                    <option value="violet">Violet</option>
                </select>
                <img className="Workmate__arrow--down"src={arrowDown} alt="arrow down" />
            </div>
            <div className='Workmate__input--r4 w-100 m-37' >
            <label htmlFor='email'>მეილი</label>
                    <br/>
                <input
                   className=" p-19 border"
                    id="email"
                    type="email"
                    placeholder="Email"
                    onChange={handleChange}
                    name="email"
                    value={formData.email}
                />
                 <span className="Workmate__desc">უნდა მთავრდებოდეს @redberry.ge-ით</span>
            </div>
            <div className='Workmate__input--r5 w-100 m-37'>
                <label htmlFor='call'>ტელეფონის ნომერი</label>
                <br/>
                <input
                    id="call"
                    className=" p-19 border"
                    type="text"
                    placeholder="+995 598 00 07 01"
                    onChange={handleChange}
                    name="call"
                    value={formData.call}
                />
                 <span className="Workmate__desc">უნდა აკმაყოფილებდეს ქართული მობ-ნომრის ფორმატს</span>
            </div>
            <div className='Workmate__next'>
                <input className="Workmate__btn" type="button"  value={"შემდეგი"}/>
            </div>
        </form>
        <div className='Workmate__bottom none-mobile'>
            <img src={logo} alt="logo" />
        </div>
    </div>
    </div>
  )
}

