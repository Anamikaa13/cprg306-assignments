"use client";
import { useState } from "react";
import Item from "./item";

export default function ItemList({ items }) {
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
                <label className="block text-white mb-2">Sort By:</label>
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
            {Object.keys(groupedItems).map((category) => (
                <div key={category}>
                    <h2 className="text-xl font-bold text-white">{category}</h2>
                    <ul>
                        {groupedItems[category].map((item) => (
                            <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} />
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}
