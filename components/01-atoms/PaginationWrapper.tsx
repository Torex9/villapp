import React, { useState } from "react";
import { getLength } from "../../data/users";
import PaginationBody from "./PaginationBody";

interface SelectLimitProps {
  onLimitChange: (value: number) => void;
}

const SelectLimit = ({ onLimitChange }: SelectLimitProps) => {
  return (
    <div className="flex items-center justify-center gap-2 rounded-lg bg-white px-3 py-2  ">
      <span>Select table limit</span>
      <select
        name="form"
        id="form"
        className="rounded-lg px-4 py-2"
        onChange={(e) => onLimitChange(Number(e.target.value))}
      >
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
      </select>
    </div>
  );
};

const PaginationWrapper = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);

  const totalPage = Math.ceil(getLength() / limit);
  let pageNo;
  if (page <= totalPage) {
    pageNo = page;
  } else {
    setPage(totalPage);
    pageNo = page;
  }

  const handlePageChange = (value: number | string) => {
    if (typeof value === "string") {
      if (value === "&laquo;" || value === "... ") {
        setPage(1);
      } else if (value === "&lsaquo;") {
        if (page !== 1) {
          setPage(page - 1);
        }
      } else if (value === "&rsaquo;") {
        if (page !== totalPage) {
          setPage(page + 1);
        }
      } else if (value === "&raquo;" || value === " ...") {
        setPage(totalPage);
      }
    } else {
      setPage(value);
    }
  };

  return (
    <div className=" flex w-full items-center justify-between ">
      {/* <Table users={getUsers(page, limit)} /> */}
      <SelectLimit onLimitChange={setLimit} />
      {/* you can change the number of siblings if you want to  */}
      <PaginationBody
        totalpage={totalPage}
        page={pageNo}
        limit={limit}
        siblings={1}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default PaginationWrapper;
