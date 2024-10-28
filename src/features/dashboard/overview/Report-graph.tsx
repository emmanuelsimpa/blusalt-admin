import { Box, Stack, Text } from "@chakra-ui/react";
import Chart from "react-apexcharts";
import { reportGraphData } from "./data";
import { chartValueFormater } from "@/utils/chart-y-axis";

export function ReportGraph() {
  const data = {
    series: [
      {
        name: "Report",
        data: reportGraphData.data,
      },
    ],
    options: {
      chart: {
        width: 330,
        type: "bar",
        fontFamily: "Inter",
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          borderRadius: 6,
          columnWidth: "50%",
          distributed: true,
        },
      },
      fill: {
        colors: reportGraphData.color,
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      xaxis: {
        categories: reportGraphData.label,
        labels: {
          style: {
            cssClass: "apexcharts-xaxis-label",
            colors: "rgba(28, 28, 28, 0.3)",
          },
          rotate: 0,
          trim: true,
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
        Reports Generated
      </Text>
      <Box h={"100%"}>
        <Chart
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          options={data.options as any}
          series={data.series}
          type={"bar"}
          height={"100%"}
          width={"100%"}
        />
      </Box>
    </Stack>
  );
}
