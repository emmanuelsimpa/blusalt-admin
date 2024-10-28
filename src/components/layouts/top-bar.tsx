import { Flex, Heading, HStack, Input } from "@chakra-ui/react";
import { InputGroup } from "../ui/input-group";
import { LuSearch } from "react-icons/lu";
import DaySvg from "@/assets/svgs/day.svg";
import ClockRotateSvg from "@/assets/svgs/clockRotate.svg";
import NotificationSvg from "@/assets/svgs/notification.svg";
import SidebarSvg from "@/assets/svgs/sidebar.svg";
import ShortcutSvg from "@/assets/svgs/shortcut.svg";

export function TopBar() {
  return (
    <Flex
      justifyContent={"space-between"}
      alignItems={"center"}
      h={"80px"}
      px={"30px"}
      display={{ base: "none", md: "flex" }}
      borderBottom={"1px solid #F0ECEC"}
    >
      <Heading color={"black"}>Dashboard</Heading>
      <HStack gap={"3"}>
        <InputGroup
          flex="1"
          startElement={<LuSearch color="rgba(28, 28, 28, 0.2)" />}
          endElement={<ShortcutSvg />}
          borderRadius={"8px"}
          w={"160px"}
          h={"30px"}
          mr={"1.5"}
        >
          <Input
            py={"1"}
            placeholder="Search"
            bg={"rgba(28, 28, 28, 0.05)"}
            border={"none"}
            color={"blackAlpha.500"}
          />
        </InputGroup>

        <DaySvg />
        <ClockRotateSvg />
        <NotificationSvg />
        <SidebarSvg />
      </HStack>
    </Flex>
  );
}
