// export default function Item({name, quantity, category}) {
export default function Item({item}) {
    return (
        <div className="border border-purple-500 bg-purple-800 w-full max-w-xs m-4 p-2 rounded-md">
            <h3 className="text-x1 font-bold">Name: {item.name}</h3>
            <p>Buy {item.quantity} in {item.category}</p>
        </div>
    );
}