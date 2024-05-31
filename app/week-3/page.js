import ItemList from './item-list';

function Page() {
    return (
        <main className="p-4 bg-black min-h-screen flex justify-left">
            <div className="w-full max-w-md">
                <h1 className="text-3xl font-bold mb-3 text-white text-left">Shopping List</h1>
                <ItemList />
            </div>
        </main>
    );
}

export default Page;