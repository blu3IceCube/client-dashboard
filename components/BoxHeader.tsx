import { Box, Typography, useTheme } from "@mui/material"
import FlexContainer from "./FlexContainer"

type Props = {
    title: string;
    subtitle?: string;
    icon?: React.ReactNode;
    sideText: string;
}

const BoxHeader = ({icon, title, subtitle, sideText}: Props) => {
    const { palette } = useTheme()
    return (
        <FlexContainer
            color={palette.grey[400]}
            margin="1.5rem 1rem 0 1rem"
        >
            <FlexContainer>
                {icon}
                <Box width="100%">
                    <Typography variant="h4" mb="-0.1rem">
                        {title}
                    </Typography>
                    <Typography variant="h6">
                        {subtitle}
                    </Typography>
                </Box>
            </FlexContainer>
            <Typography variant="h5" fontWeight="700" color={palette.secondary[500]}>
                {sideText}
            </Typography>
        </FlexContainer>
    )
}

export default BoxHeader