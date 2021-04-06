
export default function loadPokemonsNumber (page:number, rowsPerPage:number) {
  return page === 1 ? rowsPerPage : rowsPerPage * page;
}
