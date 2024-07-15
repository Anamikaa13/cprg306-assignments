"use client";

function Item({ name, quantity, category, onSelect }) {
    return (
        <li 
            className="flex flex-col p-1 bg-gray-800 text-white p-4 mb-2 rounded-lg shadow-md cursor-pointer"
            onClick={() => onSelect(name)}
        >
            <span className="font-semibold text-xl">{name}</span>
            <span className="text-gray-400 text-l">Buy {quantity} in {category}</span>
        </li>
    );
}

export default Item;
