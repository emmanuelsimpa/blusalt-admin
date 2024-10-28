import { Box, Flex, HStack, Stack, Text } from "@chakra-ui/react";
import { websiteData } from "./data";

export function Website() {
  return (
    <Stack
      minW={"180px"}
      bg={"#F7F9FB"}
      rounded={"16px"}
      p={"20px"}
      gap={"5"}
      h={"100%"}
    >
      <Text
        fontFamily={"Inter"}
        fontSize={"sm"}
        color={"#1C1C1C"}
        fontWeight={600}
      >
        Traffic by Website
      </Text>

      <Stack gap={"7"}>
        {websiteData.map((item) => (
          <HStack
            justifyContent={"space-between"}
            alignItems={"center"}
            key={item.id}
          >
            <Text
              fontSize={"xs"}
              fontFamily={"Inter"}
              w={"full"}
              fontWeight={400}
            >
              {item.title}
            </Text>
            <Flex justifyContent={"flex-start"} w={"full"} gap={"1.5"}>
              <Box
                w={item.w}
                h={"2.5px"}
                bg={"#1C1C1C"}
                borderRadius={"80px"}
              />
              <Box
                w={item.w}
                h={"2.5px"}
                bg={"rgba(28, 28, 28, 0.4)"}
                borderRadius={"80px"}
              />
              <Box
                w={item.w}
                h={"2.5px"}
                bg={"rgba(28, 28, 28, 0.1)"}
                borderRadius={"80px"}
              />
            </Flex>
          </HStack>
        ))}
      </Stack>
    </Stack>
  );
}
