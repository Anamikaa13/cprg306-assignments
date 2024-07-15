"use client";
import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import itemsData from './items.json';

export default function Page() {
    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState('');

    const handleAddItem = (newItem) => {
        setItems([...items, newItem]);
    };

    const handleItemSelect = (itemName) => {
        const cleanedName = itemName.split(',')[0].replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|[\u2011-\u26FF])/g, '').trim();
        setSelectedItemName(cleanedName);
    };

    const handleUpdateQuantity = (id, newQuantity) => {
        if (newQuantity < 1) return;
        setItems(items.map(item => item.id === id ? { ...item, quantity: newQuantity } : item));
    };

    return (
        <main className="bg-gray-900 min-h-screen p-10">
            <h1 className="text-3xl font-bold text-white mb-6 text-center">Shopping List</h1>
            <div className="flex">
                <div className="w-1/2 pr-4">
                    <NewItem onAddItem={handleAddItem} />
                    <ItemList items={items} onItemSelect={handleItemSelect} onUpdateQuantity={handleUpdateQuantity} />
                </div>
                <div className="w-1/2 pl-4">
                    <h2 className="text-2xl font-bold text-white mb-4">Meal Ideas</h2>
                    {selectedItemName ? <MealIdeas ingredient={selectedItemName} /> : <p className="text-gray-400">Select an item to see meal ideas</p>}
                </div>
            </div>
        </main>
    );
}
