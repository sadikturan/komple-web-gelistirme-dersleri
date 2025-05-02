export default function Pagination({
  page,
  totalPages,
  setSearchParams,
  query,
}) {
  return (
    <div className="container my-3">
      <div className="card card-body">
        <div className="d-flex justify-content-between align-items-center">
          <button
            className="btn btn-primary"
            onClick={() =>
              setSearchParams({ q: query, page: Number(page) - 1 })
            }
            disabled={page <= 1}
          >
            Geri
          </button>
          <div className="d-flex align-items-center">
            <span className="mx-2">
              Sayfa {page} / {totalPages}
            </span>
          </div>
          <button
            className="btn btn-primary"
            onClick={() =>
              setSearchParams({ q: query, page: Number(page) + 1 })
            }
            disabled={page >= totalPages}
          >
            İleri
          </button>
        </div>
      </div>
    </div>
  );
}
