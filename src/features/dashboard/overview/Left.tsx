import { Grid, GridItem, Stack } from "@chakra-ui/react";
import { ReportCard } from "./Report-card";
import UpSvg from "@/assets/svgs/dashboard/chart-up.svg";
import DownSvg from "@/assets/svgs/dashboard/chart-down.svg";
import { reportData } from "./data";
import { formatNumber } from "@/utils/num-format";
import { Website } from "./Website";
import { UsersGraph } from "./Users-graph";
import { ReportGraph } from "./Report-graph";
import { TrafficGraph } from "./Traffic-graph";
import { MarketingGraph } from "./Marketing-graph";

export function Left() {
  return (
    <Stack gap="3">
      <Grid
        templateColumns={{ md: "repeat(2, 1fr)", xl: "repeat(4, 1fr)" }}
        gap="3"
      >
        {reportData.map((item) => (
          <GridItem key={item.id}>
            <ReportCard
              Icon={item.percent < 0 ? DownSvg : UpSvg}
              title={item.title}
              value={formatNumber(item.value)}
              percent={
                item.percent < 0 ? `${item.percent}%` : `+${item.percent}%`
              }
              bg={item.bg}
            />
          </GridItem>
        ))}
      </Grid>

      <Grid
        templateColumns={{ md: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }}
        gap="3"
      >
        <GridItem colSpan={{ md: 1, lg: 3 }}>
          <UsersGraph />
        </GridItem>
        <GridItem colSpan={1}>
          <Website />
        </GridItem>
      </Grid>
      <Grid templateColumns={{ lg: "repeat(2, 1fr)" }} gap="3">
        <GridItem colSpan={1}>
          <ReportGraph />
        </GridItem>
        <GridItem colSpan={1}>
          <TrafficGraph />
        </GridItem>
      </Grid>
      <MarketingGraph />
    </Stack>
  );
}
