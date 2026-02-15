import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import { InfoContainer } from "./const";
import { Checkroom } from "@mui/icons-material";

const Dresscode = () => {
	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.up("md"));
	return (
		<Grid
			container
			spacing={4}
			sx={{ height: "auto", pb: 6, px: matches ? 4 : 2 }}
			size={{ xs: 12 }}
		>
			<Grid item size={{ xs: 12 }}>
				<InfoContainer elevation={0}>
					<Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
						<Checkroom
							sx={{
								fontSize: "2rem",
								mr: 2,
								color: theme.palette.primary.dark,
							}}
						/>
						<Typography variant="h4" sx={{ color: theme.palette.text.primary }}>
							Дресс-код
						</Typography>
					</Box>
                    <Box>
						<Typography variant="h5" sx={{ color: theme.palette.text.primary }}>
							Мы будем рады вас видеть в любом случае, но просим воздержаться от полностью белых и черных нарядов, спасибо!
						</Typography>
                    </Box>
				</InfoContainer>
			</Grid>
		</Grid>
	);
};

export default Dresscode;
