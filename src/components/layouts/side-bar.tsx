import { Box, Flex, HStack, Stack, Text } from "@chakra-ui/react";
import LogoSvg from "@/assets/svgs/logo.svg";
import { NavItem } from "./nav";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  navigationList1,
  navigationList2,
  navigationList3,
  navigationList4,
} from "@/common/constant/navigation";
import Profile from "@/assets/svgs/profile.svg";

type ISidebar = {
  onOpen: () => void;
  isOpen: boolean;
};

export function SideBar({ onOpen, isOpen }: ISidebar) {
  return (
    <Box
      w={{ base: "100%", md: "160px", lg: "226px" }}
      borderRight={{ md: "1px solid #F0ECEC" }}
      h={{ base: "70px", md: "100vh" }}
      px={{ base: "4", md: "0px" }}
      overflowY={"auto"}
    >
      <HStack
        display={{ base: "flex", md: "none" }}
        justifyContent={"space-between"}
        alignItems={"center"}
        h={"70px"}
      >
        {!isOpen && (
          <Box cursor={"pointer"} onClick={onOpen}>
            <GiHamburgerMenu />
          </Box>
        )}

        <LogoSvg />
      </HStack>
      <Box display={{ base: "none", md: "block" }}>
        <Flex px={"5"} h={"80px"} alignItems={"center"}>
          <LogoSvg />
        </Flex>

        <Stack pt={"6"} px={"5"} gap={"6"}>
          <Stack gap={"8"} borderBottom={"1px solid #F0ECEC"} pb={"6"}>
            {navigationList1.map((item) => (
              <NavItem
                path={item.path}
                Icon={item.icon}
                slug={item.slug}
                key={item.name}
              >
                {item.name}
              </NavItem>
            ))}
          </Stack>
          <Stack gap={"8"} borderBottom={"1px solid #F0ECEC"} pb={"6"}>
            {navigationList2.map((item) => (
              <NavItem
                path={item.path}
                Icon={item.icon}
                slug={item.slug}
                key={item.name}
              >
                {item.name}
              </NavItem>
            ))}
          </Stack>
          <Stack gap={"8"} borderBottom={"1px solid #F0ECEC"} pb={"6"}>
            {navigationList3.map((item) => (
              <NavItem
                path={item.path}
                Icon={item.icon}
                slug={item.slug}
                key={item.name}
              >
                {item.name}
              </NavItem>
            ))}
          </Stack>
          <Stack gap={"8"} borderBottom={"1px solid #F0ECEC"} pb={"6"}>
            {navigationList4.map((item) => (
              <NavItem
                path={item.path}
                Icon={item.icon}
                slug={item.slug}
                key={item.name}
              >
                {item.name}
              </NavItem>
            ))}
          </Stack>

          <Flex gap={"2"} pt={"14"} pb={"4"}>
            <Profile />
            <Text fontSize={"sm"} color={"#1C1C1C"}>
              ByeWind
            </Text>
          </Flex>
        </Stack>
      </Box>
    </Box>
  );
}
