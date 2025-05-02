import Movie from "./Movie";
import { movie_list } from "../data";

export default function MovieList() {
  return (
    <div className="container my-3">
      <div className="card">
        <div className="card-header">
          <h2 className="title h5 mb-0">Movie List</h2>
        </div>
        <div className="card-body">
          {movie_list.filter((m) => m.is_active).length == 0 ? (
            <div>Film bulunamadı</div>
          ) : (
            <div
              id="movie-list"
              className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4"
            >
              {movie_list.map((m, index) => (
                <Movie key={index} movieObj={m} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
