import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import "./index.css";
import Header from "./components/Header";
import AddItemForm from "./components/AddItemForm";
import NoItem from "./components/NoItem";
import FilterButtons from "./components/FilterButtons";
import ListItems from "./components/ListItems";
import ClearButton from "./components/ClearButton";

export default function App() {
  return (
    <div className="container">
      <Header />
      <AddItemForm />
      <NoItem />
      <FilterButtons />
      <ListItems />
      <ClearButton />
    </div>
  );
}
