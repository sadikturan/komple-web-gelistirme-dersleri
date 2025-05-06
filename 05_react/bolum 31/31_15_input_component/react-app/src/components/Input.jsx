export default function Input({ id, labelText, error, ...props }) {
  return (
    <div className="mb-3">
      <label htmlFor={id} className="form-label">
        {labelText}
      </label>
      <input id={id} className="form-control" {...props} />
      {error && <div className="invalid-feedback d-block">{error}</div>}
    </div>
  );
}
