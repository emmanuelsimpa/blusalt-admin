import {
  ColorPalette,
  Flex,
  Heading,
  HStack,
  Stack,
  Text,
} from "@chakra-ui/react";
import { IconType } from "react-icons";

type IReportCard = {
  bg: ColorPalette | string;
  title: string;
  value: string | number;
  percent: string | number;
  Icon: IconType | string;
};

export function ReportCard({ bg, title, value, percent, Icon }: IReportCard) {
  return (
    <Stack
      minW={"150px"}
      h={"113px"}
      bg={bg}
      rounded={"16px"}
      p={"20px"}
      justifyContent={"center"}
    >
      <Text fontFamily={"Inter"} fontSize={"sm"} color={"#1C1C1C"}>
        {title}
      </Text>
      <HStack justifyContent={"space-between"} alignItems={"center"}>
        <Heading fontFamily={"Inter"} color={"#1C1C1C"} fontSize={"24px"}>
          {value}
        </Heading>
        <Flex alignItems={"center"} gap={"1"}>
          <Text fontSize={"xs"}>{percent}</Text>
          <Icon />
        </Flex>
      </HStack>
    </Stack>
  );
}
