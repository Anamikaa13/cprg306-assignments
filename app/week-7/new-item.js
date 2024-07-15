"use client";

import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function NewItem({ onAddItem }) {
    const [itemName, setItemName] = useState("");
    const [itemQuantity, setItemQuantity] = useState("1");
    const [itemCategory, setItemCategory] = useState("Produce");

    const handleSubmit = (event) => {
        event.preventDefault();
        const newItem = {
            id: uuidv4(),
            name: itemName,
            quantity: itemQuantity,
            category: itemCategory,
        };
        onAddItem(newItem);
        setItemName("");
        setItemQuantity("1");
        setItemCategory("Produce");
    };

    return (
        <form onSubmit={handleSubmit} className="mb-6">
            <div className="mb-4">
                <label className="block text-white mb-2" htmlFor="item-name">Item Name</label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="item-name" type="text" value={itemName} onChange={(e) => setItemName(e.target.value)} />
            </div>
            <div className="mb-4">
                <label className="block text-white mb-2" htmlFor="item-quantity">Quantity</label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="item-quantity" type="number" value={itemQuantity} onChange={(e) => setItemQuantity(e.target.value)} />
            </div>
            <div className="mb-4">
                <label className="block text-white mb-2" htmlFor="item-category">Category</label>
                <select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="item-category" value={itemCategory} onChange={(e) => setItemCategory(e.target.value)}>
                <option value="category" disabled>Category</option>
                    <option value="Produce">Produce</option>
                    <option value="Dairy">Dairy</option>
                    <option value="Bakery">Bakery</option>
                    <option value="Meat">Meat</option>
                    <option value="Frozen Foods">Frozen Foods</option>
                    <option value="Canned Goods">Canned Goods</option>
                    <option value="Dry Goods">Dry Goods</option>
                    <option value="Beverages">Beverages</option>
                    <option value="Snacks">Snacks</option>
                    <option value="Household">Household</option>
                    <option value="Other">Other</option>
                </select>
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                + 
            </button>
        </form>
    );
}
