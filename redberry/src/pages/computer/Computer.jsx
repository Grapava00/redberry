import './computer.css'
import React from "react"

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
        <form>
         <input
                type="file"
                onChange={handleChange}
                name="img"
                value={formData.img}
            />
            <input
                type="text"
                placeholder="HP"
                onChange={handleChange}
                name="name"
                value={formData.name}
            />
             <select 
                id="brand" 
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
             <select 
                id="cpu" 
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
            
            <input
                type="text"
                placeholder="14"
                onChange={handleChange}
                name="kernel"
                value={formData.kernel}
            />
            <input
                type="text"
                placeholder="365"
                onChange={handleChange}
                name="flow"
                value={formData.flow}
            />
            <input
                type="text"
                placeholder="16"
                onChange={handleChange}
                name="ram"
                value={formData.ram}
            />
                <input 
                    type="radio"
                    id="ssd"
                    name="memory"
                    value="SSD"
                    checked={formData.memory === "SSD"}
                    onChange={handleChange}
                />
                <label htmlFor="unemployed">SSD</label>
                <input 
                    type="radio"
                    id="hdd"
                    name="memory"
                    value="HDD"
                    checked={formData.memory === "HDD"}
                    onChange={handleChange}
                />
                <label htmlFor="part-time">HDD</label>
                <input
                    type="text"
                    onFocus = {(e)=>(e.target.type="date")}
                    style = {{display:"block"}}
                    placeholder="დდ/თთ/წწწწ"
                    onChange={handleChange}
                    name="date"
                    value={formData.date}
            />
                <input
                    type="text"
                    placeholder="0000"
                    onChange={handleChange}
                    name="price"
                    value={formData.price}
            />
            <input 
                    type="radio"
                    id="new"
                    name="condition"
                    value="ახალი"
                    checked={formData.condition === "ახალი"}
                    onChange={handleChange}
                />
                <label htmlFor="unemployed">ახალი</label>
                <input 
                    type="radio"
                    id="old"
                    name="condition"
                    value="მეორადი"
                    checked={formData.condition === "მეორადი"}
                    onChange={handleChange}
                />
                <label htmlFor="part-time">მეორადი</label>
        </form>
    )
}

