export default function Item({
  urun,
  onDeleteItem,
  onUpdateItem,
  filterButton,
}) {
  if (filterButton == "incomplete" && urun.completed) {
    return null;
  }

  if (filterButton == "completed" && !urun.completed) {
    return null;
  }

  return (
    <li className="border rounded p-2 mb-1 d-flex">
      <input
        type="checkbox"
        className="form-check-input"
        checked={urun.completed}
        onChange={() => onUpdateItem(urun.id)}
      />
      <div
        className="item-name"
        style={
          urun.completed
            ? {
                textDecoration: "line-through",
                color: "#999",
              }
            : {}
        }
      >
        {urun.name}
      </div>
      <i
        className="fs-3 bi bi-x text-danger delete-icon"
        onClick={() => onDeleteItem(urun.id)}
      ></i>
    </li>
  );
}
