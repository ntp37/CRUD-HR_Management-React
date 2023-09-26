import {Container,Typography,FormControl} from "@mui/material";
import Form from "./Form";
// import { NumericFormat } from 'react-number-format';

export default function AddEmployee() {
  return (
    <>
      <Container>
        <div className="flex flex-col items-center">
          <Typography sx={{ mb: "1rem" }} id="modal-modal-title" variant="h6" component="h2">
            Create new employee data
          </Typography>
          <form>
            <FormControl fullWidth>
              <Form />
            </FormControl>
          </form>
        </div>
      </Container>
    </>
  );
}