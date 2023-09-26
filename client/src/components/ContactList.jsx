import { Avatar, Stack, CircularProgress } from "@mui/material";
import { LocalPhoneOutlined, ForwardToInboxOutlined } from "@mui/icons-material"; 
import { amber, green } from "@mui/material/colors";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Navbar from "./Navbar/Navbar";

import { getAllEmployee } from "../data/useData";

function stringToColor(string) {
  let hash = 0;
  let i;

  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }

  return color;
}

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
      width: {xs: 32, md: 40},
      height: {xs: 32, md: 40},
      fontSize: {xs: 16, md: 20},
      position: "initial"
    },
    children: `${name.split(" ")[0][0]}`,
  };
}

const customBreakpoint = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280
    }
  }
})

export default function ContactList() {
  const { data, isLoading } = getAllEmployee()
  if (!data || isLoading) return <CircularProgress />

  return (
    <>
      <div className="min-h-screen w-full font-OpenSans">
        <Navbar />
        <div className="flex min-h-screen pt-14 bg-slate-100">
          <div className="w-72 hidden lg:block"></div>
          <div className="content-main flex-1 overflow-hidden">
            <div className="showContent flex flex-col max-w-7xl mx-auto p-10">
              <h1 className="mb-4 font-semibold text-2xl sm:text-3xl text-center sm:text-start">
                Contact
              </h1>
              <ThemeProvider theme={customBreakpoint}>
                {data.map((employee, index) => (
                  <div className="shadow-lg bg-slate-50 my-3 text-sm md:text-base" key={index} >
                    <div className="flex flex-col sm:flex-row w-full py-6 px-10 content-center">
                      <div className="flex w-full sm:w-2/5 lg:w-1/2">
                        <Stack direction="row" spacing={2}>
                          <Avatar {...stringAvatar(employee.name)} />
                        </Stack>
                        <div className="ml-5">
                          <p className="font-semibold">{employee.name}</p>
                          <p>{employee.position}</p>
                        </div>
                      </div>
                      <div className="flex items-center w-full sm:w-1/4 lg:w-1/5 xl:w-1/4">
                        <Avatar variant="rounded" sx={{position: "initial", width: {xs: 25,md: 30}, height:{xs: 25,md: 30}, bgcolor: green['A700']}}>
                          <LocalPhoneOutlined sx={{fontSize: {xs: 18, md: 24}}} />
                        </Avatar>
                        <span className="ml-7 sm:ml-2 my-3 sm:my-0">{employee.tel_num}</span>
                      </div>
                      <div className="flex items-center justify-start w-full lg:ml-2 sm:w-1/4 lg:w-1/5 xl:w-1/4">
                        <Avatar variant="rounded" sx={{position: "initial", width:{xs: 25,md: 30}, height:{xs: 25,md: 30}, bgcolor: amber['A700']}}>
                          <ForwardToInboxOutlined sx={{fontSize: {xs: 18, md: 24}}} />
                        </Avatar>
                        <span className="ml-7 sm:ml-2">{employee.email}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </ThemeProvider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
