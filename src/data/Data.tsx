export const pieChartOptions = {
    labels: ["Your files", "System", "Empty"],
    colors: ["#4318FF", "#6AD2FF", "#EFF4FB"],
    chart: {
      width: "50px",
    },
    states: {
      hover: {
        filter: {
          type: "none",
        },
      },
    },
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    hover: { mode: null },
    plotOptions: {
      donut: {
        expandOnClick: false,
        donut: {
          labels: {
            show: false,
          },
        },
      },
    },
    fill: {
      colors: ["#4318FF", "#6AD2FF", "#EFF4FB"],
    },
    tooltip: {
      enabled: true,
      theme: "dark",
    },
  };
  
  export const pieChartData = [63, 25, 12];
  
  // Total Spent Default
  
  export const lineChartDataTotalSpent = [
    {
      name: "Revenue",
      data: [50, 64, 48, 66, 49, 68],
    },
    {
      name: "Profit",
      data: [30, 40, 24, 46, 20, 46],
    },
  ];
  