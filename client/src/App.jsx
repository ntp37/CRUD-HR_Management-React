import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./components/Home";
import Dashboard from "./components/Dashboard/Dashboard";
import Employee from "./components/Employee/Employee";
import Inbox from "./components/Inbox/Inbox";
import Contact from "./components/contact";
import Help from "./components/help/Help";
import TableData from "./components/Employee/TableData";
import AddEmployee from "./components/Employee/AddEmployee";
import UpdateEmployee from "./components/Employee/UpdateEmployee";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/dashboard',
    element: <Dashboard />
  },
  {
    path: '/inbox',
    element: <Inbox />
  },
  {
    path: '/contact',
    element: <Contact />
  },
  {
    path: '/help',
    element: <Help />
  },
  {
    path: '/employee',
    element: <Employee />,
    children: [
      {index: true, element: <TableData />},
      {path: '/employee/updateForm/:id', element: <UpdateEmployee />},
      {path: '/employee/newEmployee', element: <AddEmployee />}
    ]
  },
])

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;