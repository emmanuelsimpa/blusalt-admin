import { Box, Stack, Text } from "@chakra-ui/react";
import Chart from "react-apexcharts";
import { trafficGraphData } from "./data";
import { chartValueFormater } from "@/utils/chart-y-axis";

export function TrafficGraph() {
  const data = {
    series: trafficGraphData.data,
    options: {
      chart: {
        type: "donut",
        fontFamily: "Inter",
        toolbar: {
          show: false,
        },
        offsetY: 10,
      },
      labels: trafficGraphData.label,
      colors: trafficGraphData.color,
      dataLabels: {
        enabled: false,
      },
      plotOptions: {
        pie: {
          donut: {
            labels: {
              show: true,
              name: {
                show: true,
                fontSize: "12px",
                fontWeight: "400",
                color: "#6E7191",
              },
            },
          },
        },
      },
      stroke: {
        show: true,
        width: 3,
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              position: "bottom",
            },
          },
        },
      ],
      legend: {
        show: true,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        formatter: function (seriesName: string, opts: any) {
          const value = opts.w.globals.series[opts.seriesIndex];
          const formattedValue = chartValueFormater(value);
          return `${seriesName} - ${formattedValue}`;
        },
      },
      xaxis: {
        labels: {
          style: {
            cssClass: "apexcharts-xaxis-label",
            colors: "rgba(28, 28, 28, 0.3)",
          },
        },
      },
      yaxis: {
        tickAmount: 4,
        labels: {
          style: {
            cssClass: "apexcharts-xaxis-label",
            colors: "rgba(28, 28, 28, 0.3)",
          },
          formatter: chartValueFormater,
        },
      },
      grid: {
        show: false,
        xaxis: {
          lines: {
            show: false,
          },
        },
      },
    },
  };
  return (
    <Stack
      gap={"3"}
      bg={"#F7F9FB"}
      rounded={"16px"}
      px={{ base: "10px", md: "20px" }}
      pt={"20px"}
      h={"280px"}
    >
      <Text
        fontFamily={"Inter"}
        fontSize={"sm"}
        color={"#1C1C1C"}
        fontWeight={600}
      >
        Traffic by Location
      </Text>
      <Box h={"100%"}>
        <Chart
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          options={data.options as any}
          series={data.series}
          type={"donut"}
          height={"100%"}
          width={"100%"}
        />
      </Box>
    </Stack>
  );
}
