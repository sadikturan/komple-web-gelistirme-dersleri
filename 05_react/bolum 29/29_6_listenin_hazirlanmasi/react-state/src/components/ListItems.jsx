import Item from "./Item";
import NoItem from "./NoItem";

export default function ListItems({ urunler }) {
  return (
    <ul className="shopping-list list-unstyled">
      {urunler.length > 0 ? (
        urunler.map((i, index) => <Item urun={i} key={index} />)
      ) : (
        <NoItem />
      )}
    </ul>
  );
}
