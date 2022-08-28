import './workmate.css'
import arrowLeft from '../../images/workmate/arrow-left.png'
import logo from '../../images/workmate/logo.png'
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
    <div className='Workmate'>
        <div className='Workmate__top'>
            <img className="Workmate__top--arrow" src={arrowLeft} alt="left arrow"/>
            <div className='Workmate__top--texts'>
                <span className='Workmate__top--text'>თანამშრომლის ინფო</span>
                <span className='Workmate__top--text'>ლეპტოპის მახასიათებლები</span>
            </div>
        </div>
        <form>
            <div className='Workmate__inputs--r1'>
                <input
                    type="text"
                    placeholder="გრიშა"
                    onChange={handleChange}
                    name="firstName"
                    value={formData.firstName}
                />
                <input
                    type="text"
                    placeholder="ბაგრატიონი"
                    onChange={handleChange}
                    name="lastName"
                    value={formData.lastName}
                />
            </div>
            <div className='Workmate__select--r2'>
                <select 
                    id="team" 
                    value={formData.team}
                    onChange={handleChange}
                    name="team"
                >
                    <option value="">თიმი</option>
                    <option value="orange">Orange</option>
                    <option value="yellow">Yellow</option>
                    <option value="green">Green</option>
                    <option value="blue">Blue</option>
                    <option value="indigo">Indigo</option>
                    <option value="violet">Violet</option>
                </select>
            </div>
            <div className='Workmate__select--r3'>
                <select 
                    id="position" 
                    value={formData.favColor}
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
            </div>
            <div className='Workmate__input--r4'>
                <input
                    type="email"
                    placeholder="Email"
                    onChange={handleChange}
                    name="email"
                    value={formData.email}
                />
            </div>
            <div className='Workmate__input--r5'>
                <input
                    type="text"
                    placeholder="+995 598 00 07 01"
                    onChange={handleChange}
                    name="call"
                    value={formData.call}
                />
            </div>
        </form>
        <div className='Workmate__next'>
            <input className="Workmate__btn" type="button"  value={"შემდეგი"}/>
        </div>
        <div className='Workmate__bottom'>
            <img src={logo} alt="logo" />
        </div>
    </div>
  )
}

