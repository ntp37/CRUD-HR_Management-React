import { Avatar, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Navbar from "../Navbar/Navbar";

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
      width: { xs: 32, sm: 40 },
      height: { xs: 32, sm: 40 },
      fontSize: { xs: 16, sm: 20 },
      position: "initial",
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
      xl: 1280,
    },
  },
});

export default function Message({ data }) {

  return (
    <>
      <ThemeProvider theme={customBreakpoint}>
        {data.map((message, index) => (
          <Link
            to="#"
            key={index}
            className="flex w-full py-6 border-b px-5 content-center hover:bg-slate-100"
          >
            <Stack direction="row" sx={{ display: "flex", alignItems: "center" }}>
              <Avatar {...stringAvatar(message.name)} />
            </Stack>
            <div className="flex-1 ml-3 sm:ml-6 text-xs sm:text-base">
              <p className="font-semibold">{message.name}</p>
              <p>{message.subject}</p>
            </div>
            <div className="self-center text-xs sm:text-sm">
              {message.day}
            </div>
          </Link>
        ))}
      </ThemeProvider>       
    </>
  );
}
