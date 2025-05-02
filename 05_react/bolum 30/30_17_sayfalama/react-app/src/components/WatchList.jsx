import WatchListMovie from "./WatchListMovie";

export default function WatchList({
  movies,
  isWatchListOpen,
  onRemoveFromWatchList,
}) {
  return (
    <>
      {isWatchListOpen && (
        <div className="my-3">
          <div className="card">
            <div className="card-header">
              <h2 className="title h5 mb-0">Watch List</h2>
            </div>
            <div className="card-body">
              {movies.length == 0 ? (
                <div>Film bulunamadı</div>
              ) : (
                <div
                  id="movie-list"
                  className="row row-cols-3 row-cols-md-4 row-cols-lg-6 g-1 g-lg-3"
                >
                  {movies.map((m, index) => (
                    <WatchListMovie
                      key={index}
                      movieObj={m}
                      onRemoveFromWatchList={onRemoveFromWatchList}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
