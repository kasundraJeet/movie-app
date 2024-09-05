"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Pagination({ currentPage, totalPage, onPageChange }) {
  const pagesToShow = 3;
  const startPages = [1, 2, 3, 4];
  const endPages = [totalPage - 1, totalPage];

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPage) {
      onPageChange(page);
    }
  };

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
        <button
          className="arrow-btn"
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <ChevronLeft size={18} />
        </button>
      </li>

      <li>
        <ul className="pagination-list">
          {startPages.map((page) => (
            <li key={page}>
              <button
                className={`page-btn ${page === currentPage ? "active" : ""}`}
                onClick={() => goToPage(page)}
              >
                {page}
              </button>
            </li>
          ))}

          {currentPage > 7 && (
            <li>
              <button>...</button>
            </li>
          )}

          {middlePages.map((page) => (
            <li key={page}>
              <button
                className={`page-btn ${page === currentPage ? "active" : ""}`}
                onClick={() => goToPage(page)}
              >
                {page}
              </button>
            </li>
          ))}

          {currentPage < totalPage - pagesToShow - 3 && (
            <li>
              <button>...</button>
            </li>
          )}

          {endPages.map((page) => (
            <li key={page}>
              <button
                className={`page-btn ${page === currentPage ? "active" : ""}`}
                onClick={() => goToPage(page)}
              >
                {page}
              </button>
            </li>
          ))}
        </ul>
      </li>

      <li>
        <button
          className="arrow-btn"
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPage}
        >
          <ChevronRight size={18} />
        </button>
      </li>
    </ul>
  );
}
