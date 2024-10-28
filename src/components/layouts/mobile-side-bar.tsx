import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import LogoSvg from "@/assets/svgs/logo.svg";
import { NavItem } from "./nav";
import { CgClose } from "react-icons/cg";
import {
  navigationList1,
  navigationList2,
  navigationList3,
  navigationList4,
} from "@/common/constant/navigation";
import Profile from "@/assets/svgs/profile.svg";

export function MobileSideBar({ onClose }: { onClose: () => void }) {
  return (
    <Box w={"100%"} minH={"100vh"}>
      <Flex
        h={"80px"}
        alignItems={"center"}
        justifyContent={"space-between"}
        borderBottom={"1px solid #F0ECEC"}
        px={"4"}
      >
        <LogoSvg />

        <Box cursor={"pointer"} onClick={onClose}>
          <CgClose height={12} width={12} color="#0C0C0C" />
        </Box>
      </Flex>

      <Stack pt={"6"} gap={"6"} pr={"5"}>
        <Stack gap={"8"} borderBottom={"1px solid #F0ECEC"} pb={"6"} px={"5"}>
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
        <Stack gap={"8"} borderBottom={"1px solid #F0ECEC"} pb={"6"} px={"5"}>
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
        <Stack gap={"8"} borderBottom={"1px solid #F0ECEC"} pb={"6"} px={"5"}>
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
        <Stack gap={"8"} borderBottom={"1px solid #F0ECEC"} pb={"6"} px={"5"}>
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

        <Flex gap={"2"} pt={"14"} pb={"4"} px={"5"}>
          <Profile />
          <Text fontSize={"sm"} color={"#1C1C1C"}>
            ByeWind
          </Text>
        </Flex>
      </Stack>
    </Box>
  );
}
