//#region Config for Donut chart
const donutChart = {
  options: {
    labels: ["Male", "Female"],
    colors: ["#3F51B5", "#D4526E"],
    chart: { fontFamily: ["Open Sans", "sans-serif"] },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            total: {
              show: true,
              showAlways: true,
              fontSize: "24px",
              fontWeight: 500,
            },
            value: { fontSize: "22px", fontWeight: 500 },
          },
        },
      },
    },
    responsive: [
      {
        breakpoint: 420,
        options: {
          chart: { width: 280 },
          plotOptions: {
            pie: {
              donut: {
                labels: {
                  total: { fontSize: "18px" },
                  value: { fontSize: "18px" },
                },
              },
            },
          },
        },
      },
    ],
  },
};
//#endregion

//#region Config for Bar chart
const barChart = {
  options: {
    colors: ["#26D075"],
    chart: {
      toolbar: { show: false },
      fontFamily: ["Open Sans", "sans-serif"],
    },
    xaxis: {
      categories: ["0-20000", "20000-40000", "40000-60000", "more than 60000"],
      labels: { style: { fontSize: "12px", fontWeight: 600 } },
    },
    yaxis: {
      title: {
        text: "Employee",
        style: { fontSize: "14px", fontWeight: 600 },
      },
    },
    responsive: [
      {
        breakpoint: 768,
        options: { chart: { width: 450 } },
      },
      {
        breakpoint: 576,
        options: {
          chart: { width: 350 },
          xaxis: { categories: ["0-20k", "20-40k", "40-60k", "> 60k"] },
          plotOptions: { bar: { columnWidth: "50%" } },
        },
      },
      {
        breakpoint: 420,
        options: {
          chart: { width: 250 },
          xaxis: { labels: { style: { fontSize: "10px" } } },
          yaxis: {
            title: { text: "Employee", style: { fontSize: "12px" } },
          },
        },
      },
    ],
  },
};
//#endregion

//#region Config for RadialBar
const radialBar = {
  options: {
    chart: {
      fontFamily: ["Open Sans", "sans-serif"],
      type: "radialBar",
    },
    colors: ["#EF4444"],
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 0,
          size: "68%",
          background: "#293450",
        },
        track: {
          dropShadow: {
            enabled: true,
            top: 2,
            left: 0,
            blur: 4,
            opacity: 0.15,
          },
        },
        dataLabels: {
          name: {
            offsetY: -10,
            color: "#fff",
            fontSize: "20px",
          },
          value: {
            color: "#fff",
            fontSize: "20px",
            show: true,
          },
        },
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        type: "vertical",
        gradientToColors: ["#EF4444"],
        stops: [0, 100],
      },
    },
    stroke: {
      lineCap: "round",
    },
    labels: ["Budget Used"],
    responsive: [
      {
        breakpoint: 420,
        options: {
          chart: { width: 275 },
          plotOptions: {
            radialBar: {
              dataLabels: {
                name: {fontSize: "18px"},
                value: {fontSize: "18px"}
              }
            },
          },
        },
      },
    ],
  },
};
//#endregion

export { donutChart, barChart, radialBar };