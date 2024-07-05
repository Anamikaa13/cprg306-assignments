" use client "

function Item({ name, quantity, category }) {
    return (
        <li className="flex flex-col p-1 bg-gray-900 text-white rectangle-lg p-4 mb-2 rounded-lg shadow-md">
            <span className="font-semibold text-xl">{name}</span>
            <span className="text-white-400 text-l">Buy {quantity} in {category}</span>
        </li>
    );
}

export default Item;

