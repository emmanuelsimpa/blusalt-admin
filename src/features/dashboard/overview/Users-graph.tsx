import { Box, Flex, HStack, Separator, Stack, Text } from "@chakra-ui/react";
import Chart from "react-apexcharts";
import { usersGraphData } from "./data";
import { chartValueFormater } from "@/utils/chart-y-axis";

export function UsersGraph() {
  const data = {
    series: [
      {
        name: "This year",
        data: usersGraphData.thisYear,
        color: "#1C1C1C",
      },
      {
        name: "Last year",
        data: usersGraphData.lastYear,
        color: "#A8C5DA",
      },
    ],
    options: {
      chart: {
        // height: 330,
        type: "line",
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      stroke: {
        width: [1, 3, 1],
        curve: "smooth",
        dashArray: [0, 3, 1],
      },
      xaxis: {
        categories: usersGraphData.label,
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
      h={"330px"}
    >
      <HStack gap={"3"}>
        <Text
          fontFamily={"Inter"}
          fontSize={"sm"}
          color={"#1C1C1C"}
          fontWeight={600}
        >
          Total Users
        </Text>
        <Text
          fontFamily={"Inter"}
          fontSize={"sm"}
          color={"rgba(28, 28, 28, 0.4)"}
          display={{ base: "none", lg: "block" }}
        >
          Total Projects
        </Text>
        <Text
          fontFamily={"Inter"}
          fontSize={"sm"}
          color={"rgba(28, 28, 28, 0.4)"}
          pr={"1.5"}
          display={{ base: "none", lg: "block" }}
        >
          Operating Status
        </Text>
        <Separator
          orientation="vertical"
          height="4"
          borderColor={"rgba(28, 28, 28, 0.1)"}
          display={{ base: "none", lg: "block" }}
        />
        <Flex
          alignItems={"center"}
          gap={"1"}
          px={"3.5"}
          display={{ base: "none", lg: "flex" }}
        >
          <Box w={"1.5"} h={"1.5"} rounded={"full"} bg={"#1C1C1C"} />
          <Text
            fontFamily={"Inter"}
            fontSize={"xs"}
            color={"rgba(28, 28, 28, 0.4)"}
          >
            This year
          </Text>
        </Flex>
        <Flex
          alignItems={"center"}
          gap={"1"}
          display={{ base: "none", lg: "flex" }}
        >
          <Box w={"1.5"} h={"1.5"} rounded={"full"} bg={"#A8C5DA"} />
          <Text
            fontFamily={"Inter"}
            fontSize={"xs"}
            color={"rgba(28, 28, 28, 0.4)"}
          >
            Last year
          </Text>
        </Flex>
      </HStack>
      <Box
        overflowX={"auto"}
        overflowY={"hidden"}
        css={{
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        <Box h={"280px"}>
          <Chart
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            options={data.options as any}
            series={data.series}
            type={"line"}
            height={"100%"}
            // width={"100%"}
          />
        </Box>
      </Box>
    </Stack>
  );
}
