
import react, { useState } from "react";

const NewItem = ({onAddItem}) => {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("Produce");

    const handleSubmit = (e) => {
        e.preventDefault();
    
        const item = {
          name,
          quantity,
          category,
        };
        console.log(item);
        
        onAddItem(item);
    
        setName("");
        setQuantity(1);
        setCategory("produce");

    };

    return (
        <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block font-bold">Item name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="border border-gray-300 p-2 w-full text-black"
            />
          </div>
    
          <div className="mb-4">
            <label htmlFor="quantity" className="block font-bold">Quantity:</label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              min="1"
              max="99"
              required
              className="border border-gray-300 p-2 w-full text-black"
            />
          </div>
    
          <div className="mb-4">
            <label htmlFor="category" className="block font-bold t">Category:</label>
            <select
              id="category"
              name="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="border border-gray-300 p-2 w-full text-black"
            >
              <option value="produce">Produce</option>
              <option value="dairy">Dairy</option>
              <option value="bakery">Bakery</option>
              <option value="meat">Meat</option>
              <option value="frozen">Frozen Foods</option>
              <option value="canned">Canned Goods</option>
              <option value="dry">Dry Goods</option>
              <option value="beverages">Beverages</option>
              <option value="snacks">Snacks</option>
              <option value="household">Household</option>
              <option value="other">Other</option>
            </select>
          </div>
    
          <button type="submit" className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
            +
          </button>
        </form>
      );   
};

export default NewItem;

