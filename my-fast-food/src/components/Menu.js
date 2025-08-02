import React,{useState} from "react";
import'./Menu.css';
import { FaShoppingCart } from "react-icons/fa";

const menuItems =[
    {category:'Pizza',Name: 'Delicious Pizza',Price:'₹200',Image:'/images/f1.png'},
    {category:'Burger',Name: 'Tasty Burger',Price:'₹150',Image:'/images/f2.png'},
    {category:'Pizza',Name: 'Delicious Pizza',Price:'₹205',Image:'/images/f3.png'},
    {category:'Pasta',Name: 'Delicious Pasta',Price:'₹159',Image:'/images/f4.png'},
    {category:'Fries',Name: 'French Fries',Price:'₹456',Image:'/images/f5.png'},
    {category:'Pizza',Name: 'Delicious Pizza',Price:'₹400',Image:'/images/f6.png'},
    {category:'Burger',Name: 'Tasty Burger',Price:'₹454',Image:'/images/f7.png'},
    {category:'Burger',Name: 'Tasty Burger',Price:'₹656',Image:'/images/f8.png'},
    {category:'Pasta',Name: 'Delicious Pasta',Price:'₹509',Image:'/images/f9.png'}

];

const category=['All','Burger','Pizza','Pasta','Fries'];

const Menu = () => {

    const [activeCategory, setActiveCategory] = useState('All');
    
    const filteredItems = activeCategory === 'All' ? menuItems : menuItems.filter(item => item.category ===activeCategory);


    return (

        <div className="menu">
             <h2>Our Menu</h2>
             <div className="menu-categories">
                {category.map(category =>(
                    <button key={category}className={activeCategory === category ? 'active'  : ''} onClick ={()=> setActiveCategory(category)}>
                        {category} 

            
                    </button>
                ))}
            </div> 

            <div className="menu-items">
                {filteredItems.map((item , index) =>(

                    <div className="menu-card" key={index}>
                        <img src={item.Image} alt={item.Name} />

                        <div className="menu-card-content">
                            <h3>{item.Name}</h3>
                            <p>Searching for the best food.Then Order</p>
                            <div className="Menu-card-price">{item.Price} </div>
                            <button className="order-button">
                                Order Now
                                <FaShoppingCart/>
                                
                            </button>
                        </div>    

                    </div>

                ))}
            </div>
        </div>
    );
    
};

export default Menu