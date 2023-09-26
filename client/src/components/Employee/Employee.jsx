import { useNavigate ,Outlet } from "react-router-dom";
import { Button } from "@mui/material";
import Navbar from "../Navbar/Navbar";


export default function Employee() {
  const navigate = useNavigate()
  const matchText = location.href.match('newEmployee')

  return (
    <>
      <div className="min-h-screen w-full font-OpenSans">
        <Navbar />
        <div className="flex min-h-screen pt-14 bg-slate-100">
          <div className="w-72 hidden lg:block"></div>
          <div className="content-main flex-1 overflow-hidden">
            <div className="showContent flex flex-col max-w-7xl mx-auto p-10">
              <h1 className="mb-4 font-semibold text-2xl sm:text-4xl text-center sm:text-start">
                Employee Management
              </h1>
              <div className="self-start sm:self-end mt-2" style={{display: matchText ? "none" : "initial"}}>
                <Button sx={{width: {xs:"7rem", sm:"9rem"}, fontSize:{xs:"10px", sm:"14px"}, position: "initial" }} variant="contained" color="success" onClick={() => navigate('/employee/newEmployee')}>
                  New Employee
                </Button>
              </div>
              <div style={{height: "1px"}} className="bg-slate-800 w-full flex my-5"></div>
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
