export default function Item({ urun }) {
  return (
    <li className="border rounded p-2 mb-1 d-flex">
      <input type="checkbox" className="form-check-input" />
      <div className="item-name">{urun.name}</div>
      <i className="fs-3 bi bi-x text-danger delete-icon"></i>
    </li>
  );
}
