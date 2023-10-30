
"use client";
import React, { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item.js";
import itemsData from "./items.json";

export default function Page(){
    const [items, setItems] = useState(itemsData);
    const handleAddItem = (newItem) => {
        setItems([...itemsData, newItem]);
    }
    return(
        
        <main>
            <h1 className="text-xl font-bold text-purple-300"> Shopping List </h1>
            <NewItem onAddItem = {handleAddItem} /> {
            }
            <ItemList items = {items} />{
            }
            <ItemList />
        </main>
    );
}