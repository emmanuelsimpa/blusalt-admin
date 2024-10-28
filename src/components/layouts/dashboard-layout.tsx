import { Box, DrawerRoot, useDisclosure } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { DrawerBackdrop, DrawerContent } from "../ui/drawer";
import { TopBar } from "./top-bar";
import { SideBar } from "./side-bar";
import { MobileSideBar } from "./mobile-side-bar";

export function DashboardLayout() {
  const { open, onOpen, onClose } = useDisclosure();
  return (
    <Box minH={"100vh"} bg={"white"} display={{ base: "block", md: "flex" }}>
      <Box
        h={{ base: "full", md: "100vh" }}
        position={{ base: "relative", md: "sticky" }}
        top="0"
      >
        <SideBar onOpen={onOpen} isOpen={open} />
        <DrawerRoot open={open} placement={"start"}>
          <DrawerBackdrop />
          <DrawerContent bg={"white"} overflowY={"auto"} scrollbarWidth={"0.5"}>
            <MobileSideBar onClose={onClose} />
          </DrawerContent>
        </DrawerRoot>
      </Box>
      <Box bg={"white"} overflowX={"hidden"} h={"100%"} w={"full"}>
        <TopBar />
        <Box px={{ base: "4", md: "30px" }} pt={"4"}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}
