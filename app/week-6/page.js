"use client";
import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from './items.json';

export default function Page() {
    const [items, setItems] = useState(itemsData);

    const handleAddItem = (newItem) => {
        setItems([...items, newItem]);
    };

    return(
        <main className="bg-gray-900 min-h-screen p-10">
            <h1 className="text-3xl font-bold text-white mb-6 text-center">Shopping List</h1>
            <div className="max-w-lg mx-auto">
                <NewItem onAddItem={handleAddItem} />
                <ItemList items={items} />
            </div>
        </main>
    );
}
