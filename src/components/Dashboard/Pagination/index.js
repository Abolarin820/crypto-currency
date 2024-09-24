import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import "./style.css";

export default function PaginationComponent({page, handlePageChange}) {
 

  return (
    <div className='pagination-component'>
      <Pagination count={5} page={page} onChange={(event, value)=> handlePageChange(event, value)}

        sx={{
            color: "var(--white) !important",
            "& .Mui-selected  ": {
            backgroundColor: "var(--blue) !important",
            borderColor: "var(--blue) !important",
            color:"var(--white) !important",
            },
            "& .MuiPaginationItem-ellipsis": {
            border: "0px solid var(--grey) !important",
            },
            "& .MuiPaginationItem-text": {
            color:"var(--white) !important",
            border: "1px solid var(--grey) !important",
            },
            "& .MuiPaginationItem-text:hover": {
            backgroundColor: "transparent !important",
            },
        }}
       
      />
    </div>
  );
}

// [0, 99]
// Page 1 -> [0,10]
// Page 2 -> [10,20]
// Page 3 -> [20,30]
// .....
// Page 10 -> [90,100]

// Page 1 coin.slice(0, 10)
// var page = 1
//var initialIndex = page - 1*10
//coin.slice(initialIndex, initialIndex + 10)
