export default function Actors({ actors }) {
  return (
    <div className="container my-3">
      <h1 className="mb-3 h4">Actors</h1>
      <div className="row">
        {actors.slice(0, 12).map((actor) => (
          <div className="col-md-2" key={actor.id}>
            <img
              src={"https://image.tmdb.org/t/p/original/" + actor.profile_path}
              alt={actor.name}
              className="img-fluid img-thumbnail rounded shadow"
            />
            <p>{actor.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
