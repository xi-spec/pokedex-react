import React, { useState, MouseEvent } from 'react';
import TablePagination from '@material-ui/core/TablePagination';

export default function Pagination ({ actions }:{actions:any}) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(14);

  const loadPokemonsNumber = (page:number, rowsPerPage:number) => {
    return page === 1 ? rowsPerPage : rowsPerPage * page;
  };

  const handleChangePage = (event:MouseEvent<HTMLButtonElement> | null, newPage:number) => {
    setPage(newPage);
    newPage === 0
      ? actions.loadPokemons(newPage, rowsPerPage)
      : actions.loadPokemons(loadPokemonsNumber(newPage, rowsPerPage), rowsPerPage);
  };

  const handleChangeRowsPerPage = (event:any) => {
    const { value } = event.target;
    setPage(0);
    setRowsPerPage(+value);
    actions.loadPokemons(0, value);
  };

  return (

     <TablePagination
        component="div"
        rowsPerPageOptions={[14, 28, 56, 112]}
        count={1118}
        page={page}
        onChangePage={handleChangePage}
        rowsPerPage={rowsPerPage}
        onChangeRowsPerPage={(event) => handleChangeRowsPerPage(event)}
      />

  );
}
