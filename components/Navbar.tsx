"use client";

import Link from "next/link";
import PixIcon from "@mui/icons-material/Pix";
import FlexContainer from "./FlexContainer";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material";
import { usePathname } from "next/navigation";

type Props = {};

const Navbar = (props: Props) => {
  const { palette } = useTheme();
  const currentPath = usePathname();

  return (
    <FlexContainer className="mb-4 py-2" color={palette.grey[300]}>
      <FlexContainer className="gap-3 items-center">
        <PixIcon sx={{ fontSize: "28px" }} />
        <h4 className="text-xl font-bold text-center">StatsChart</h4>
      </FlexContainer>

      <FlexContainer className="gap-8">
        <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
          <Link
            className={currentPath === "/" ? "text-gray-400" : "text-gray-700"}
            href="/"
          >
            Dashboard
          </Link>
        </Box>
        <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
          <Link
            className={currentPath === "/predictions" ? "text-gray-400" : "text-gray-700"}
            href="/predictions"
          >
            Predictions
          </Link>
        </Box>
      </FlexContainer>
    </FlexContainer>
  );
};

export default Navbar;
