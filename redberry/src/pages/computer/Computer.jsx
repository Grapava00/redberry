import './computer.css'
import React from "react"
import {Link} from 'react-router-dom'
import arrowLeft from '../../images/workmate/arrow-left.png'
import arrowDown from '../../images/workmate/arrow-down.png'
import logo from '../../images/workmate/logo.png'

// (/^[ა-ჰ]+$/) -ქართული ვალიდაცია

export default function Computer() {
    const [formData, setFormData] = React.useState(
        {
            img:"",
            name: "", 
            brand: "", 
            cpu: "", 
            kernel: "", 
            flow: "",
            ram: "",
            memory: false,
            date:"",
            price:"",
            condition:false
            
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
        <div className='Cbody'>
            <div className='Computer'>
                    <div className='Computer__top'>
                        <Link to="/Workmate"className="Computer__top--arrow" >
                            <img src={arrowLeft} alt="left arrow"/>
                        </Link>
                    <div className='Computer__top--texts'>
                        <span className='Computer__top--text  none-mobile '>თანამშრომლის ინფო</span>
                        <span className='Computer__top--text underline'>ლეპტოპის მახასიათებლები</span>
                    </div>
                </div>
                <form>
                <div className='Computer__input--r1'>
                    <div className='computer__input--r1-desc'>
                        <span>ჩააგდე ან ატვირთე </span>
                        <span>ლეპტოპის ფოტო</span>
                    </div>
                    <input
                        id='file'
                        type="file"
                        className='m-37'
                        onChange={handleChange}
                        name="img"
                        value={formData.img}
                        />
                    <label htmlFor='file' className='Computer__input--r1-upload'>ატვირთე</label>
                </div>
                <div className='Computer__input--r2 flex-wrap'>
                    <div className='Computer__input--r2-1'>
                        <p>ლეპტოპის სახელი</p>
                        <input
                            type="text"
                            className='p-19 focus border'
                            placeholder="HP"
                            onChange={handleChange}
                            name="name"
                            value={formData.name}
                        />
                        <span>ლათინური ასოები, ციფრები, !@#$%^&*()_+= </span>
                    </div>
                    <select 
                        id="brand" 
                        className='p-19'
                        value={formData.brand}
                        onChange={handleChange}
                        name="brand"
                    >
                        <option value="">ლეპტოპის ბრენდი</option>
                        <option value="orange">Orange</option>
                        <option value="yellow">Yellow</option>
                        <option value="green">Green</option>
                        <option value="blue">Blue</option>
                        <option value="indigo">Indigo</option>
                        <option value="violet">Violet</option>
                    </select>
                    <img className="Computer__arrow--down"src={arrowDown} alt="arrow down" />
                </div>
                <div className='Computer__input--r3 flex-wrap'>
                    <div>
                        <select 
                            id="cpu" 
                            className='p-19'
                            value={formData.cpu}
                            onChange={handleChange}
                            name="cpu"
                        >
                            <option value="">CPU</option>
                            <option value="orange">Orange</option>
                            <option value="yellow">Yellow</option>
                            <option value="green">Green</option>
                            <option value="blue">Blue</option>
                            <option value="indigo">Indigo</option>
                            <option value="violet">Violet</option>
                        </select>
                        <img className="Computer__arrow--down"src={arrowDown} alt="arrow down" />
                    </div>
                    <div>
                        <input
                            type="text"
                            className='border focus p-19'
                            placeholder="14"
                            onChange={handleChange}
                            name="kernel"
                            value={formData.kernel}
                        />
                        <p>მხოლოდ ციფრები</p>
                    </div>
                    <div>
                        <input
                            type="text"
                            className='border focus p-19'
                            placeholder="365"
                            onChange={handleChange}
                            name="flow"
                            value={formData.flow}
                        />
                         <p>მხოლოდ ციფრები</p>
                    </div>
                </div>
                <div className='Computer__input--r4 flex-wrap'>
                    <div className='input__container'>
                        <p>ლეპტოპის RAM (GB)</p>
                        <div className='Computer__input--r4-1'>
                            <input
                                type="text"
                                placeholder="16"
                                className='border p-19 focus'
                                onChange={handleChange}
                                name="ram"
                                value={formData.ram}
                            />
                            <span>მხოლოდ ციფრები</span>
                        </div>
                    </div>
                    <div className='Computer__input--r4-2'>
                        <p>მეხსიერების ტიპი</p>
                        <div className='radio__container'>
                            <div>
                                <input 
                                    type="radio"
                                    id="ssd"
                                    name="memory"
                                    value="SSD"
                                    checked={formData.memory === "SSD"}
                                    onChange={handleChange}
                                />
                                <label htmlFor="unemployed">SSD</label>
                            </div>
                            <div>
                                <input 
                                    type="radio"
                                    id="hdd"
                                    name="memory"
                                    value="HDD"
                                    checked={formData.memory === "HDD"}
                                    onChange={handleChange}
                                />
                                <label htmlFor="part-time">HDD</label>
                            </div>
                        </div>
                    </div>
                 </div>
                 <div className='Computer__input--r5 flex-wrap'>
                    <div className='w-100'>
                        <p>შეძენის რიცხვი (არჩევითი)</p>
                        <input
                            type="text"
                            className='border p-19 focus date'
                            onFocus = {(e)=>(e.target.type="date")}
                            style = {{display:"block"}}
                            placeholder="დდ/თთ/წწწწ"
                            onChange={handleChange}
                            name="date"
                            value={formData.date}
                         />
                    </div>
                    <div>
                        <p>ლეპტოპის ფასი</p>
                        <input
                            type="text"
                            className='border p-19 focus margin-bottom'
                            placeholder="0000"
                            onChange={handleChange}
                            name="price"
                            value={formData.price}
                          />
                          <span>მხოლოდ ციფრები</span>
                    </div>
                </div>
                <div className='Computer__input--r6'>
                    <p>ლეპტოპის მდგომარეობა</p>
                    <div className='container'>
                        <div className='radio__container radio'>
                            <input 
                                type="radio"
                                id="new"
                                name="condition"
                                value="ახალი"
                                checked={formData.condition === "ახალი"}
                                onChange={handleChange}
                            />
                            <label htmlFor="unemployed">ახალი</label>
                        </div>
                        <div className='radio'>
                            <input 
                                type="radio"
                                id="old"
                                name="condition"
                                value="მეორადი"
                                checked={formData.condition === "მეორადი"}
                                onChange={handleChange}
                            />
                            <label htmlFor="part-time">მეორადი</label>
                        </div>
                    </div>
                </div>
                <div className='Computer__bottom--links'>
                    <div>
                        <Link to='/Workmate' className='back-link'>
                            უკან
                        </Link>
                    </div>
                    <div className='Computer__next'>
                        <Link to='/'>
                            <input className="Computer__btn" type="button"  value={"დამახსოვრება"}/>
                        </Link>
                    </div>
                </div>
                </form>
                <div className='Computer__bottom none-mobile'>
                    <img src={logo} alt="logo" />
                </div>
            </div>
        </div>
    )
}

