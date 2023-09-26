import { styled } from "@mui/material/styles";
import { Table, TableContainer, TableHead, TableRow, Paper, CircularProgress } from "@mui/material"
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { getAllEmployee } from "../../data/useData";
import CreateTable from "./CreateTable";
// import TablePagination from '@mui/material/TablePagination';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

export default function TableData() {
  const headName = ['ID', 'Name', 'Gender', 'Position', 'Phone number', 'Email', 'Address', 'Salary','Action']
  const { data, isLoading } = getAllEmployee()

  if (!data || isLoading) return <CircularProgress />

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              {headName.map((text, i) => (
                <StyledTableCell align="center" key={i}>{text}</StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <CreateTable data={data} />
        </Table>
      </TableContainer>
      {/* <TablePagination
        rowsPerPageOptions={[5, 20, 50]}
        component="div"
        count={dataLenght}
      /> */}
    </>
  );
}
