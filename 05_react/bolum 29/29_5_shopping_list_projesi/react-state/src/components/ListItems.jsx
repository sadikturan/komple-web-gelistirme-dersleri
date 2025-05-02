export default function ListItems() {
  return (
    <ul className="shopping-list list-unstyled">
      <li className="border rounded p-2 mb-1 d-flex">
        <input type="checkbox" className="form-check-input" />
        <div className="item-name">Yumurta</div>
        <i className="fs-3 bi bi-x text-danger delete-icon"></i>
      </li>
      <li className="border rounded p-2 mb-1 d-flex">
        <input type="checkbox" className="form-check-input" />
        <div className="item-name">Yumurta</div>
        <i className="fs-3 bi bi-x text-danger delete-icon"></i>
      </li>
      <li className="border rounded p-2 mb-1 d-flex">
        <input type="checkbox" className="form-check-input" />
        <div className="item-name">Yumurta</div>
        <i className="fs-3 bi bi-x text-danger delete-icon"></i>
      </li>
    </ul>
  );
}
