import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import "./index.css";
import Header from "./components/Header";
import AddItemForm from "./components/AddItemForm";
import FilterButtons from "./components/FilterButtons";
import ListItems from "./components/ListItems";
import ClearButton from "./components/ClearButton";

const urunler = [
  { id: 1, name: "Yumurta", completed: true },
  { id: 2, name: "Peynir", completed: true },
  { id: 3, name: "Zeytin", completed: false },
  { id: 4, name: "Et", completed: false },
  { id: 5, name: "Tavuk", completed: true },
];

export default function App() {
  return (
    <div className="container">
      <Header />
      <AddItemForm />
      <FilterButtons />
      <ListItems urunler={urunler} />
      <ClearButton />
    </div>
  );
}
