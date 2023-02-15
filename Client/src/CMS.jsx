import React from "react";
import { useColorMode, useColorModeValue, IconButton } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";

export const ColorModeSwitcher = (props) => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue("dark", "light");
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  return (
    <IconButton
      size="md"
      zIndex={"overlay"}
      fontSize={['md',"lg"]}
      aria-label={`Switch to ${text} mode`}
      variant="ghost"
      colorScheme={"blue"}
      position={"fixed"}
      top={["4", "6"]}
      right={["20%",'4']}
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
      {...props}
    />
  );
};
