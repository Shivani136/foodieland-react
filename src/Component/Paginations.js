import React, { useState } from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
//import Pagination from "react-js-pagination";
//import "bootstrap/less/bootstrap.less"

import Pagination from 'react-responsive-pagination';

function Paginations() {
  const [currentPage, setCurrentPage] = useState(4);

  const totalPages = 17;

  return (
    <Pagination
      current={currentPage}
      total={5}
      onPageChange={setCurrentPage}
    />
  );
}
export default Paginations;