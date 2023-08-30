import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import { LuBell, LuMoon, LuSearch, LuSettings, LuSunMedium, LuUser } from "react-icons/lu"

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <Box display="flex" justifyContent="space-between" py={2} px={4}>
      <Box
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="555px"
        paddingRight="5px"
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type="button" sx={{ p:1 }}>
          <LuSearch />
        </IconButton>
      </Box>

      <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <LuSunMedium />
          ) : (
            <LuMoon />
          )}
        </IconButton>
        <IconButton>
          <LuBell />
        </IconButton>
        <IconButton>
          <LuSettings />
        </IconButton>
        <IconButton>
          <LuUser />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;