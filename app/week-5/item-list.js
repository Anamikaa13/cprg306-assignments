"use client"
import { useState } from "react";
import Item from "./item";
import items from './items.json';



export default function ItemList() {

    const [sortBy, setSortBy] = useState('name');

    const sortedItems = [...items].sort((a, b) => {
        if (sortBy === 'name') {
            return a.name.localeCompare(b.name);
        } else if (sortBy === 'category') {
            return a.category.localeCompare(b.category);
        }
        return 0;
    });

    const groupedItems = sortedItems.reduce((groups, item) => {
        const category = item.category;
        if (!groups[category]) {
            groups[category] = [];
        }
        groups[category].push(item);
        return groups;
    }, {});


    const renderItems = () => {
        if (sortBy === 'groupedCategory') {
            return Object.keys(groupedItems).sort().map(category => (
                <div key={category}>
                    <h2 className="text-xl font-bold text-white capitalize mt-6 mb-4">{category}</h2>
                    <ul>
                        {groupedItems[category].map(item => (
                            <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} />
                        ))}
                    </ul>
                </div>
            ));
        }
        return sortedItems.map(item => (
            <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} />
        ));
    };



    return (
        <main className="bg-slate-950">
            <div className="m-4">
                
                <div>
                <span className="text-white mr-4">Sort by:</span>
                    <button
                        onClick={() => setSortBy('name')}
                        className={`mr-4 px-4 py-2 p-1 m-2 w-28 rounded-lg ${sortBy === 'name' ? 'bg-orange-500 text-white' : 'bg-orange-700 text-gray-300'}`}
                    >
                        Name
                    </button>
                    <button
                        onClick={() => setSortBy('category')}
                        className={`mr-4 px-4 py-2 p-1 m-2 w-28 rounded-lg ${sortBy === 'category' ? 'bg-orange-500 text-white' : 'bg-orange-700 text-gray-300'}`}
                    >
                        Category
                    </button>
                    <button
                        onClick={() => setSortBy('groupedCategory')}
                        className={`px-4 py-2 p-1 m-2 w-28 rounded-lg ${sortBy === 'groupedCategory' ? 'bg-orange-500 text-white' : 'bg-orange-700 text-gray-300'}`}
                    >
                        Grouped Category
                    </button>
                </div>
                <ul>{renderItems()}</ul>
            </div>
        </main>
    );
}

































