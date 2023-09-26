import { useNavigate } from "react-router-dom";
import { TableCell, tableCellClasses, TableBody, TableRow, styled, Stack, Button } from "@mui/material";
import {useSWRConfig} from "swr";
import Axios from "axios";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function CreateTable({data}) {
  const navigate = useNavigate()
  const { mutate } = useSWRConfig()
  
  const UpdateEmployee = (id) => navigate(`updateForm/${id}`)

  const handleDelete = async (id) => {
    await Axios.delete(import.meta.env.VITE_API + `employee/delete/${id}`)

    //Revalidate data
    mutate(import.meta.env.VITE_API + "employee/all")
  }
      
  return (
    <>
      <TableBody>
        {data.map((employee) => (
          <StyledTableRow key={`${employee.id}`}>
            <StyledTableCell align="center">{employee.id}</StyledTableCell>
            <StyledTableCell align="center">{employee.name}</StyledTableCell>
            <StyledTableCell align="center">{employee.gender}</StyledTableCell>
            <StyledTableCell align="center">{employee.position}</StyledTableCell>
            <StyledTableCell align="center">{employee.tel_num}</StyledTableCell>
            <StyledTableCell align="center">{employee.email}</StyledTableCell>
            <StyledTableCell align="center">{employee.address}</StyledTableCell>
            <StyledTableCell align="center">{employee.salary}</StyledTableCell>
            <StyledTableCell align="center">
              <Stack spacing={1} direction="row" sx={{ justifyContent: "center" }}>
                <Button size="small" variant="contained" color="primary" onClick={() => UpdateEmployee(employee.id)}>EDIT</Button>
                <Button size="small" variant="contained" color="error" onClick={() => handleDelete(employee.id)}>DELETE</Button>
              </Stack>
            </StyledTableCell>
          </StyledTableRow>
        ))}
      </TableBody>
    </>
  );
}