import Item from "./Item";
import NoItem from "./NoItem";

export default function ListItems({ items, onDeleteItem }) {
  return (
    <ul className="shopping-list list-unstyled">
      {items.length > 0 ? (
        items.map((i, index) => (
          <Item urun={i} key={index} onDeleteItem={onDeleteItem} />
        ))
      ) : (
        <NoItem />
      )}
    </ul>
  );
}
