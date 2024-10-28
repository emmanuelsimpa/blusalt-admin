import { Box, Flex, FlexProps } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { Link, useLocation } from "react-router-dom";

interface NavItemProps extends FlexProps {
  Icon: IconType | string;
  children: React.ReactNode;
  path: string;
  slug: string;
}

export const NavItem = ({
  path,
  Icon,
  slug,
  children,
  ...rest
}: NavItemProps) => {
  const { pathname } = useLocation();
  const finalPathname = pathname === "/" ? "/dashboard" : pathname;
  const isActivePath = finalPathname.includes(slug);

  return (
    <Link to={path || "/"}>
      <Box style={{ textDecoration: "none" }} _focus={{ boxShadow: "none" }}>
        <Flex
          align="center"
          py={"0rem"}
          role="group"
          cursor="pointer"
          bg={"transparent"}
          color={isActivePath ? "#161716" : "#292D32"}
          fontWeight={isActivePath ? 500 : 400}
          fontSize={"14px"}
          _hover={{
            borderLeft: isActivePath
              ? "3px solid #161716"
              : "3px solid #F0ECEC",
            pl: "2",
          }}
          {...rest}
          gap={"2"}
        >
          {Icon && (
            <Icon
              color={isActivePath ? "#161716" : "#292D32"}
              fontSize={isActivePath ? "1.3rem" : ".9rem"}
              fontWeight={isActivePath ? 500 : 400}
            />
          )}
          {children}
        </Flex>
      </Box>
    </Link>
  );
};
