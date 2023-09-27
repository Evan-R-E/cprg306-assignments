import ItemList from "./item-list";

export default function Page(){
    return(
        <main>
            <h1 className="text-xl font-bold text-purple-300"> Shopping List </h1>
            <ItemList />
        </main>
    );
}