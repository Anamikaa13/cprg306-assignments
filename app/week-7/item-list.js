"use client";
import { useState } from "react";
import Item from "./item";

export default function ItemList({ items, onItemSelect, onUpdateQuantity }) {
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

    return (
        <div>
            <div className="mb-4 flex justify-between items-center">
                <label className="block text-white mb-2">Sort by:</label>
                <div>
                    <button
                        className={`bg-${sortBy === 'name' ? 'orange-500' : 'gray-500'} hover:bg-${sortBy === 'name' ? 'orange-700' : 'gray-700'} text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2`}
                        onClick={() => setSortBy('name')}
                    >
                        Name
                    </button>
                    <button
                        className={`bg-${sortBy === 'category' ? 'orange-500' : 'gray-500'} hover:bg-${sortBy === 'category' ? 'orange-700' : 'gray-700'} text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
                        onClick={() => setSortBy('category')}
                    >
                        Category
                    </button>
                </div>
            </div>
            {Object.entries(groupedItems).map(([category, items]) => (
                <div key={category}>
                    <h2 className="text-xl font-bold mb-2">{category}</h2>
                    <ul className="list-none p-0">
                        {items.map(item => (
                            <Item key={item.name} {...item} onSelect={onItemSelect} />
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}
