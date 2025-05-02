import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import "./index.css";
import Header from "./components/Header";
import AddItemForm from "./components/AddItemForm";
import FilterButtons from "./components/FilterButtons";
import ListItems from "./components/ListItems";
import ClearButton from "./components/ClearButton";
import { useState } from "react";

const urunler = [
  { id: 1, name: "Yumurta", completed: true },
  { id: 2, name: "Peynir", completed: true },
  { id: 3, name: "Zeytin", completed: false },
  { id: 4, name: "Et", completed: false },
  { id: 5, name: "Tavuk", completed: true },
];

export default function App() {
  const [items, setItems] = useState(urunler);
  const [filterButton, setFilterButton] = useState("all");

  function handleAddItem(item) {
    setItems((items) => [...items, item]);
    setFilterButton("all");
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((i) => i.id != id));
  }

  function handleUpdateItem(id) {
    const updatedItems = (items) =>
      items.map((item) =>
        item.id == id ? { ...item, completed: !item.completed } : item
      );

    setItems(updatedItems);
  }

  return (
    <div className="container">
      <Header />
      <AddItemForm onAddItem={handleAddItem} />
      <FilterButtons
        filterButton={filterButton}
        setFilterButton={setFilterButton}
      />
      <ListItems
        items={items}
        onDeleteItem={handleDeleteItem}
        onUpdateItem={handleUpdateItem}
        filterButton={filterButton}
      />
      <ClearButton />
    </div>
  );
}
