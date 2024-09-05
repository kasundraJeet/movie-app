import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function Pagination({ currentPage, totalPage, query , path }) {
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
    <ul className="pagination">
      <li>
        <Link href={`${path}?${query}=${currentPage - 1}`}
          className="arrow-btn"
          disabled={currentPage === 1}
        >
          <ChevronLeft size={18} />
        </Link>
      </li>
      <li>
        <ul className="pagination-list">
          {startPages.map((page) => (
            <li key={page}>
              <Link href={`${path}?${query}=${page}`}
                className={`page-btn ${page === currentPage ? "active" : ""}`}
              >
                {page}
              </Link>
            </li>
          ))}

          {currentPage > 7 && (
            <li>
              <button>...</button>
            </li>
          )}

          {middlePages.map((page) => (
            <li key={page}>
              <Link href={`${path}?${query}=${page}`}
                className={`page-btn ${page === currentPage ? "active" : ""}`}
              >
                {page}
              </Link>
            </li>
          ))}

          {currentPage < totalPage - pagesToShow - 3 && (
            <li>
              <button>...</button>
            </li>
          )}

          {endPages.map((page) => (
            <li key={page}>
              <Link href={`${path}?${query}=${page}`}
                className={`page-btn ${page === currentPage ? "active" : ""}`}
              >
                {page}
              </Link>
            </li>
          ))}
        </ul>
      </li>

      <li>
        <Link href={`${path}?${query}=${currentPage + 1}`}
          className="arrow-btn"
          disabled={currentPage === totalPage}
        >
          <ChevronRight size={18} />
        </Link>
      </li>
    </ul>
  );
}
