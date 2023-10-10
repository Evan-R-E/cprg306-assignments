export default function Item({ name, quantity, category}) {
    return (
        <div className="border border-purple-500 bg-purple-800 w-full max-w-xs m-4 p-2 rounded-md">
            <h3 className="text-x1 font-bold">Name: {name}</h3>
            <p>Buy {quantity} in {category}</p>
        </div>
    );
}