import {
  Box,
  HStack,
  Image,
  Separator,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { activities, contact, notifications } from "./data";

export function Right() {
  return (
    <Stack
      gap={"8"}
      bg={"#FFF8F8"}
      rounded={"3xl"}
      p={"5"}
      minW={"264px"}
      w={"100%"}
    >
      <Stack gap={"4"}>
        <Text color={"#1C1C1C"} fontSize={"sm"} fontFamily={"Inter"}>
          Notifications
        </Text>
        {notifications.map((item) => (
          <HStack alignItems={"flex-start"} key={item.id}>
            <item.icon />
            <Box>
              <Text
                fontSize={"sm"}
                color={"#1C1C1C"}
                fontFamily={"Inter"}
                lineClamp={1}
              >
                {item.title}
              </Text>
              <Text
                fontSize={"xs"}
                color={"rgba(28, 28, 28, 0.4)"}
                fontFamily={"Inter"}
              >
                {item.subTitle}
              </Text>
            </Box>
          </HStack>
        ))}
      </Stack>
      <Stack>
        <Text color={"#1C1C1C"} fontSize={"sm"} fontFamily={"Inter"} pb={"3"}>
          Activities
        </Text>
        {activities.map((item, index) => (
          <HStack alignItems={"flex-start"} key={item.id}>
            <VStack alignItems={"center"}>
              <Image src={item.icon} w={"6"} h={"6"} rounded={"full"} />
              {index !== activities.length - 1 && (
                <Separator
                  orientation="vertical"
                  height="4"
                  borderColor={"rgba(28, 28, 28, 0.1)"}
                />
              )}
            </VStack>
            <Box>
              <Text
                fontSize={"sm"}
                color={"#1C1C1C"}
                fontFamily={"Inter"}
                lineClamp={1}
              >
                {item.title}
              </Text>
              <Text
                fontSize={"xs"}
                color={"rgba(28, 28, 28, 0.4)"}
                fontFamily={"Inter"}
              >
                {item.subTitle}
              </Text>
            </Box>
          </HStack>
        ))}
      </Stack>
      <Stack gap={"6"}>
        <Text color={"#1C1C1C"} fontSize={"sm"} fontFamily={"Inter"}>
          Contacts
        </Text>
        {contact.map((item) => (
          <HStack alignItems={"flex-start"} key={item.id}>
            <Image src={item.icon} w={"6"} h={"6"} rounded={"full"} />

            <Text
              fontSize={"sm"}
              color={"#1C1C1C"}
              fontFamily={"Inter"}
              lineClamp={1}
            >
              {item.name}
            </Text>
          </HStack>
        ))}
      </Stack>
    </Stack>
  );
}
