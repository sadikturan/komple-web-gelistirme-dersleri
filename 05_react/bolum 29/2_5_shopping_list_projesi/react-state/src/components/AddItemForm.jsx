export default function AddItemForm() {
  return (
    <form className="shopping-form border rounded p-3 mb-3">
      <div className="input-group">
        <input
          type="text"
          id="item_name"
          className="form-control"
          placeholder="Eleman Ekle"
        />
        <button className="btn btn-primary" type="submit">
          <i className="bi bi-plus"></i>
        </button>
      </div>
    </form>
  );
}
