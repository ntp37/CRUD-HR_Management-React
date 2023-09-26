import Navbar from "../Navbar/Navbar";
import { getAllEmployee } from "../../data/useData";
import Chart from "react-apexcharts";
import { donutChart, barChart, radialBar } from "./chartsConfig"; // Config all charts
import { Container,Grid,Paper,CircularProgress } from "@mui/material";


export default function Dashboard() {
  const { data, isLoading } = getAllEmployee();
  if (!data || isLoading) return <CircularProgress />

  //Salary range data
  let salaryRange_1 = data.filter((salary) => salary.salary < 20000);
  let salaryRange_2 = data.filter((salary) => salary.salary > 20000 && salary.salary < 40000);
  let salaryRange_3 = data.filter((salary) => salary.salary > 40000 && salary.salary < 60000);
  let salaryRange_4 = data.filter((salary) => salary.salary > 60000);

  //Employee data
  let maleEmployee = data.filter((gender) => gender.gender === "Male");
  let femaleEmployee = data.filter((gender) => gender.gender === "Female");

  //Sum salary data
  let getAllSalary = data.map((salary) => salary.salary);
  let sumSalary = getAllSalary.reduce((prev, curr) => prev + curr, 0);

  //Budget salary calculate
  const budgetTotal = 5000000
  let salaryBudgetCal = (budget, salary) => [(100-(100/budget) * (budget-salary)).toFixed(1)] // data for Radialbar chart

  let series = {
    // data for Donut chart
    dount: [maleEmployee.length, femaleEmployee.length],

    // data for Bar chart
    barChart: [
      {
        name: "Employee",
        data: [
          salaryRange_1.length,
          salaryRange_2.length,
          salaryRange_3.length,
          salaryRange_4.length,
        ],
      },
    ],
  };

  return (
    <>
      <div className="min-h-screen font-OpenSans bg-slate-100">
        <Navbar />
        <div className="flex pt-14 bg-slate-100">
          <div className="w-72 hidden lg:block"></div>
          <div className="content-main flex-1 overflow-hidden">
            <div className="showContent w-full flex flex-col mx-auto py-10 px-3 md:px-10 overflow-hidden">
              <Container>
                <h1 className="mb-4 font-semibold text-2xl sm:text-4xl text-center sm:text-start">Dashboard</h1>
                <Grid container spacing={3}>
                  <Grid item xs={12} lg={6}>
                    <Paper className="flex flex-col items-center justify-center p-3 space-y-2">
                      <p className="font-medium text-lg sm:text-2xl mb-5">Employee Overview</p>
                      <Chart
                        options={donutChart.options}
                        series={series.dount}
                        type="donut"
                        width="380"
                      />
                    </Paper>
                  </Grid>
                  <Grid item xs={12} lg={6}>
                    <Paper className="flex flex-col items-center justify-center p-3 space-y-2">
                      <p className="font-medium text-lg sm:text-2xl">Salary Budget</p>
                      <Chart type="radialBar" series={salaryBudgetCal(budgetTotal, sumSalary)} options={radialBar.options} width="320" />
                      <div className="flex flex-row gap-1 items-center">
                        <div className="inline rounded-full bg-red-500 w-4 h-4"></div>
                        <p className="font-medium text-sm">
                          Used {(sumSalary/1000000).toFixed(2)} M / {(budgetTotal/1000000).toFixed(2)} M (THB)
                        </p>
                      </div>
                    </Paper>
                  </Grid>
                  <Grid item xs={12} lg={12}>
                    <Paper className="flex flex-col items-center justify-center p-3 space-y-2">
                      <p className="font-medium text-lg sm:text-2xl">Employee salary range</p>
                      <Chart
                        options={barChart.options}
                        series={series.barChart}
                        type="bar"
                        width="600"
                      />
                    </Paper>
                  </Grid>
                </Grid>
              </Container>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
