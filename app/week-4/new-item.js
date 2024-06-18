"use client"

import { useState } from "react"

export default function NewItem() {

    const [itemName, setName] = useState("");
    const [itemQuantity, setQuantity] = useState("1");
    const [itemCategory, setCategory] = useState("Produce");




    const handleSubmit = (event) => {
        event.preventDefault();

        let item = {
            name: itemName,
            quantity: itemQuantity,
            category: itemCategory,
        };

        console.log(item);

        alert(`Added item: ${item.name}, quantity: ${item.quantity}, category: ${item.category}`);


        setName("");
        setQuantity("1");
        setCategory("Produce");
    }

    const handleItemName = (event) => { setName(event.target.value); }
    const handleItemQuantity = (event) => setQuantity(event.target.value);
    const handleItemCategory = (event) => setCategory(event.target.value);

    return (

        <main className="min-h-screen flex flex-col items-center justify-start w-full bg-black pt-3  ">


            <form onSubmit={handleSubmit} className="space-y-4 p-4 bg-gray-800 text-white rectangle-md w-full max-w-md">

                <div>
                    <input type="text" value={itemName} onChange={handleItemName} required
                        placeholder="Item name"
                        className="w-full px-3 py-2 rounded-md border border-gray-300 shadow-sm bg-white text-black" />
                </div>
                <div className="flex justify-between ">
                    <input type="number" min="1" max="99" value={itemQuantity} onChange={handleItemQuantity} required
                        placeholder="0"
                        className=" w-20 p-2 ml-1 rounded-lg border-2 border-gray-300 shadow-sm bg-white text-black" />

                    <select value={itemCategory} onChange={handleItemCategory}
                        className="p-2 rounded-lg ml-1 border-2 border-gray-300 shadow-sm bg-white text-black">
                        <option value="category" disabled>Category</option>
                        <option value="Produce">Produce</option>
                        <option value="Diary">Diary</option>
                        <option value="Bakery">Bakey</option>
                        <option value="Meat">Meat</option>
                        <option value="Frozen Foods">Frozen Foods</option>
                        <option value="Canned Goods">Canned Goods</option>
                        <option value="Dry Goods">Dry Goods</option>
                        <option value="Beverages">Beverages</option>
                        <option value="Snacks">Snacks</option>
                        <option value="Household">Household</option>
                        <option value="Others">Others</option>
                    </select>
                </div>

                <div>
                    <button type="submit" className="w-full px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded-md"> + </button>
                </div>
            </form>
        </main>

    );
}