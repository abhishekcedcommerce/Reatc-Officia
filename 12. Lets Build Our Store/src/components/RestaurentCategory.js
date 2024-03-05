import { useState } from "react";
import ItemList from "./ItemList";

const RestaurentCategory = (props) => {
   /* const [showItems, setShowItems] = useState(false);
    const handleClick = () => {
        setShowItems(!showItems);
    }*/
    const handleClick = () => {
        props.setshowIndex();
    }

    return(
        <div>
        {/* Accordian section */}
           <div className=" w-6/12 m-auto bg-gray-100 my-6 shadow-lg p-4">
            <div className="font-bold cursor-pointer flex justify-between"
             onClick={handleClick}>
                <span className="">{props.data.title} -  ({props.data.itemCards.length})</span>
                <span>^</span>
            </div>
            {props.showItems && <ItemList items = {props.data.itemCards} />}
           </div>
           
        {/* Accordian Body */}
        </div>
    )
}

export default RestaurentCategory;