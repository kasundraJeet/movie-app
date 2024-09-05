import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function Pagination({ currentPage, totalPage, query, path }) {
  const pagesToShow = 3;
  const startPages = [1, 2, 3, 4];
  const endPages = [totalPage - 1, totalPage];

  const generateMiddlePages = () => {
    const middlePages = [];
    for (
      let i = currentPage - pagesToShow;
      i <= currentPage + pagesToShow;
      i++
    ) {
      if (i > 4 && i < totalPage - 1) {
        middlePages.push(i);
      }
    }
    return middlePages;
  };

  const middlePages = generateMiddlePages();

  return (
    <ul className="pagination" role="navigation" aria-label="Pagination Navigation">
      <li>
        <Link
          href={`${path}?${query}=${currentPage - 1}`}
          className={`arrow-btn ${currentPage === 1 ? "disabled" : ""}`}
          aria-disabled={currentPage === 1}
          aria-label="Previous page"
          tabIndex={currentPage === 1 ? -1 : 0}
        >
          <ChevronLeft size={18} />
        </Link>
      </li>

      <li>
        <ul className="pagination-list">
          {startPages.map((page) => (
            <li key={page}>
              <Link
                href={`${path}?${query}=${page}`}
                className={`page-btn ${page === currentPage ? "active" : ""}`}
                aria-label={`Page ${page}`}
                aria-current={page === currentPage ? "page" : undefined}
              >
                {page}
              </Link>
            </li>
          ))}

          {currentPage > 7 && (
            <li>
              <button className="dots" aria-hidden="true">...</button>
            </li>
          )}

          {middlePages.map((page) => (
            <li key={page}>
              <Link
                href={`${path}?${query}=${page}`}
                className={`page-btn ${page === currentPage ? "active" : ""}`}
                aria-label={`Page ${page}`}
                aria-current={page === currentPage ? "page" : undefined}
              >
                {page}
              </Link>
            </li>
          ))}

          {currentPage < totalPage - pagesToShow - 3 && (
            <li>
              <button className="dots" aria-hidden="true">...</button>
            </li>
          )}

          {endPages.map((page) => (
            <li key={page}>
              <Link
                href={`${path}?${query}=${page}`}
                className={`page-btn ${page === currentPage ? "active" : ""}`}
                aria-label={`Page ${page}`}
                aria-current={page === currentPage ? "page" : undefined}
              >
                {page}
              </Link>
            </li>
          ))}
        </ul>
      </li>

      <li>
        <Link
          href={`${path}?${query}=${currentPage + 1}`}
          className={`arrow-btn ${currentPage === totalPage ? "disabled" : ""}`}
          aria-disabled={currentPage === totalPage}
          aria-label="Next page"
          tabIndex={currentPage === totalPage ? -1 : 0}
        >
          <ChevronRight size={18} />
        </Link>
      </li>
    </ul>
  );
}
