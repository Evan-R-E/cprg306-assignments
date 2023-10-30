"use client";
import React, { useState } from "react";
import Item from "./item";

export default function ItemList({ items }) { 

    const itemsArray = [...items];

    const [sortBy, setSortBy] = useState('name');

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
                  onClick={handleSortByName}
                  className={`mr-2 ${sortBy === 'name' ? 'bg-purple-500 text-white rounded-md' : ''}`}
                >
                  Sort by Name
                </button>
                <button
                  onClick={handleSortByCategory}
                  className={`mr-2 ${sortBy === 'category' ? 'bg-purple-500 text-white rounded-md' : ''}`}
                >
                  Sort by Category
                </button>
                <button
                  onClick={() => setSortBy('grouped')}
                  className={`mr-2 ${sortBy === 'grouped' ? 'bg-purple-500 text-white rounded-md' : ''}`}
                >
                  Group by Category
                </button>
            </div>
            {sortBy === 'grouped' ? (
                <div>
                  {Object.keys(sortedItems.reduce((acc, item) => {
                      const newAcc = { ...acc };
                      if (!newAcc[item.category]) {
                          newAcc[item.category] = [];
                      }
                      newAcc[item.category].push(item);
                      return newAcc;
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
