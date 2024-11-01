import React, { useEffect } from "react";
import ReactPaginate from "react-paginate";
import { useNavigate, useParams } from "react-router-dom";
import "./Pagination.css";

const PaginationComponent = ({
  currentPage,
  totalPages,
  onPageChange,
  searchQuery,
  genre,
  year,
  rating,
  link,
}) => {
  const navigate = useNavigate();
  const { category } = useParams();

  useEffect(() => {
    // تخزين عدد الصفحات في الـ Local Storage
    localStorage.setItem("totalPages", totalPages);
  }, [totalPages]); // تأكد من تحديث التخزين عند تغيير totalPages

  const handlePageChange = (data) => {
    const selectedPage = data.selected + 1; // react-paginate يبدأ العد من 0
    onPageChange(selectedPage);

    // // تحديث عنوان URL مع جميع المعلمات
    // navigate(
    //   `/search?query=${searchQuery}&genre=${genre}&year=${year}&rating=${rating}&page=${selectedPage}`
    // );
    // navigate(`/movies/${category}?page=${selectedPage}`); // استخدم رقم الصفحة فقط إذا لم تكن في صفحة البحث

    navigate(`${link}&page=${selectedPage}`); // استخدام navigate لتحديث الرابط
    // navigate(link);
  };

  return (
    <nav aria-label="Page navigation example" className="my-1">
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={totalPages}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageChange}
        containerClassName={"pagination justify-content-center flex-wrap"}
        activeClassName={"active"}
        previousClassName={"page-item"}
        nextClassName={"page-item"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousLinkClassName={"page-link"}
        nextLinkClassName={"page-link"}
        disabledClassName={"disabled"}
        forcePage={currentPage - 1}
      />
    </nav>
  );
};

export default PaginationComponent;
