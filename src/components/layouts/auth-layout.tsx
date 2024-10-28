import { Box, Text } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

export function AuthLayout() {
  return (
    <Box>
      <Text>Auth Layout</Text>
      <Outlet />
    </Box>
  );
}
