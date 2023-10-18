"use client";
import react, { useState } from "react";
import Item from "./item";
import items from './items.json';


export default function ItemList() { 

    const itemsArray = items.map(
      (item) => ({...item})
    );

    const [sortBy, setSortBy] = useState('name') ;

    const sortedItems = [...itemsArray].sort((a, b) => {
        if (sortBy === 'name') {
          return a.name.localeCompare(b.name);
        } else if (sortBy === 'category') {
          return a.category.localeCompare(b.category);
        }
        return 0;
      });
      
    const handleSortByName = () => {
        setSortBy('name');
    };

    const handleSortByCategory = () => {
        setSortBy('category');
    };

    return (
        <div style={{ color: 'white' }}>
      <div>
        <button
          onClick={() => setSortBy('name')}
          className={`mr-2 ${handleSortByName ? 'bg-purple-500 text-white rounded-md' : ''}`}
        >
          Sort by Name
        </button>
        <button
          onClick={() => setSortBy('category')}
          className={`mr-2 ${handleSortByCategory ? 'bg-purple-500 text-white rounded-md' : ''}`}
        >
          Sort by Category
        </button>
        <button
          onClick={() => setSortBy('grouped')}
          className={`mr-2 ${sortBy === 'grouped' ? 'bg-purple-500 text-white rounded-md ' : ''}`}
        >
          Group by Category
        </button>
      </div>
      {sortBy === 'grouped' ? (
        <div>
          {Object.keys(sortedItems.reduce((acc, item) => {
            if (!acc[item.category]) {
              acc[item.category] = [];
            }
            acc[item.category].push(item);
            return acc;
          }, {})).sort(sortAlphabetically).map((category) => (
            <div key={category}>
              <h2>{category}</h2>
              {sortedItems
                .filter((item) => item.category === category)
                .map((item) => (
                  <Item key={item.id} item={item} />
                ))}
            </div>
          ))}
        </div>
      ) : (
        <div>
          {sortedItems.map((item) => (
            <Item key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
      );
      
  function sortAlphabetically(a, b) {
    return a.localeCompare(b);
  }
    
}