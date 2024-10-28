import { Grid, GridItem } from "@chakra-ui/react";
import { Left } from "./Left";
import { Right } from "./Right";

export function Overview() {
  return (
    <Grid
      templateColumns={{
        base: "repeat(1, 1fr)",
        xl: "repeat(4, 1fr)",
      }}
      gap="6"
      pb={"8"}
      overflow={"hidden"}
    >
      <GridItem colSpan={{ base: 1, xl: 3 }} w={"full"} overflow={"hidden"}>
        <Left />
      </GridItem>
      <GridItem colSpan={1} w={"full"} overflow={"hidden"}>
        <Right />
      </GridItem>
    </Grid>
  );
}
