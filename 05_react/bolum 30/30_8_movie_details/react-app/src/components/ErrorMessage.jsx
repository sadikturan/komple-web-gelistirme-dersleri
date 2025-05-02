export default function ErrorMessage({ message }) {
  return (
    <div className="alert alert-danger my-2" role="alert">
      {message}
    </div>
  );
}
