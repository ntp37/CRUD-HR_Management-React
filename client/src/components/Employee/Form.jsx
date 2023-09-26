import Axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { Grid, TextField, MenuItem, Button } from "@mui/material";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import Positions from "./position";
import { getPersonal } from "../../data/useData";

export default function Form() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const MySwal = withReactContent(Swal);

  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [position, setPosition] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [salary, setSalary] = useState("");

  const modalSuccess = async () => {
    await MySwal.fire({
      allowOutsideClick: false,
      icon: "success",
      title: "New employee data has been successfully created.",
      position: "center",
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
    });
    navigate("/employee");
  };

  const dataGroup = {
    name: name,
    gender: gender,
    position: position,
    tel_num: tel,
    email: email,
    address: address,
    salary: salary,
  };

  let buttonText
  
  switch (location.pathname) {
    case `/employee/updateForm/${id}`:
      useEffect(() => {
        getPersonal(id).then((result) => {
          setName(result.data[0].name);
          setGender(result.data[0].gender);
          setPosition(result.data[0].position);
          setTel(result.data[0].tel_num);
          setEmail(result.data[0].email);
          setAddress(result.data[0].address);
          setSalary(result.data[0].salary);
        });
      }, [id]);

      buttonText = 'UPDATE'

      break;
      
    default:
      buttonText = 'CREATE'
  }
      
  const addEmployee = async () => {
    await Axios.post(import.meta.env.VITE_API + "employee/create", dataGroup);
  };

  const updateData = () =>
    Axios.put(import.meta.env.VITE_API + "employee/update/" + id, dataGroup);

  const handleData = () => {
    if (!name || !gender || !position || !tel || !email || !address || !salary) {
      console.log("Update to database Error");
    } else {
      if (location.pathname === "/employee/newEmployee") {
        addEmployee();
      } else {
        updateData();
      }
      modalSuccess();
    }
  };

  return (
    <>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={12}>
          <TextField
            required
            fullWidth
            label="Name"
            value={name}
            error={!name}
            helperText={!name ? "Enter the name of the new employee" : ""}
            onChange={(e) => setName(e.target.value)}
          ></TextField>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            select
            fullWidth
            label="Gender"
            value={gender}
            error={!gender}
            helperText={!gender ? "Please select gender" : ""}
            onChange={(e) => setGender(e.target.value)}
          >
            <MenuItem value=""><em>None</em></MenuItem>
            <MenuItem value="Male">Male</MenuItem>
            <MenuItem value="Female">Female</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            select
            fullWidth
            label="Position"
            value={position}
            error={!position}
            helperText={!position ? "Please select a position" : ""}
            onChange={(e) => setPosition(e.target.value)}
          >
            <MenuItem value=""><em>None</em></MenuItem>
            {Positions.map((positionItem) => (
              <MenuItem key={positionItem} value={positionItem}>{positionItem}</MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            label="Email"
            value={email}
            error={!email}
            helperText={!email ? "Enter the employee Email" : ""}
            onChange={(e) => setEmail(e.target.value)}
          ></TextField>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            label="Address"
            value={address}
            error={!address}
            helperText={!address ? "Enter the employee address" : ""}
            onChange={(e) => setAddress(e.target.value)}
          ></TextField>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            label="Phone number"
            value={tel}
            error={!tel}
            helperText={!tel ? "Enter the employee phone number." : ""}
            onChange={(e) => setTel(e.target.value)}
          ></TextField>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            type="number"
            label="Salary"
            value={salary}
            error={!salary}
            helperText={!salary ? "Enter salary amount of the employee." : ""}
            onChange={(e) => setSalary(e.target.value)}
          ></TextField>
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" onClick={handleData}>{buttonText}</Button>
          <Button sx={{ mx: "1rem" }} variant="contained" color="error" onClick={() => navigate("/employee")}>EXIT</Button>
        </Grid>
      </Grid>
    </>
  );
}
