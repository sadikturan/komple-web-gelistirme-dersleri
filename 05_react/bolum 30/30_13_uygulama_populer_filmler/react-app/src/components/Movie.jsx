export default function Movie({ movieObj }) {
  return (
    <div className="col">
      <div className="card movie position-relative h-100">
        <img
          src={"https://image.tmdb.org/t/p/original/" + movieObj.poster_path}
          alt=""
          className="card-img-top"
        />
        <div className="card-body">
          <h2 className="h6 card-title">{movieObj.title}</h2>
        </div>
      </div>
    </div>
  );
}
