export default function MovieDetails({ movieObj, onClose }) {
  return (
    <div className="my-3">
      <div className="card">
        <div className="card-header d-flex justify-content-between align-items-center">
          <h2 className="title h5 mb-0">Movie Details</h2>
          <button className="btn btn-danger btn-sm" onClick={() => onClose()}>
            Kapat
          </button>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-3">
              <img
                src={
                  "https://image.tmdb.org/t/p/original/" + movieObj.poster_path
                }
                alt=""
                className="img-fluid"
              />
            </div>
            <div className="col-md-9">
              <h3>{movieObj.title}</h3>
              <p>{movieObj.overview}</p>
              <p>Release Date: {movieObj.release_date}</p>
              <p>Rating: {movieObj.vote_average}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
