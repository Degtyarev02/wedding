import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import { InfoContainer, ScheduleItem } from "./const";
import { Checkroom, NotInterested } from "@mui/icons-material";

const Gifts = () => {
	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.up("md"));
	return (
		<Grid
			container
			spacing={4}
			sx={{ height: "auto", pb: 6, px: matches ? 4 : 2 }}
			size={{ xs: 12 }}
		>
			<Grid item size={{ xs: 12}}>
				<InfoContainer
					elevation={0}
					sx={{ background: 'url("/background.png")' }}
				>
					<Box sx={{ display: "flex", flexDirection: "column", mb: 3 }}>
						<InfoContainer sx={{ height: "auto", mb: 3, display: "flex", alignItems: "center" }}>
							<NotInterested
								sx={{
									fontSize: "2rem",
									mr: 2,
									color: theme.palette.primary.dark,
								}}
							/>
							<Typography
								variant="h4"
								sx={{ color: theme.palette.text.primary }}
							>
								Пожалуйста, не приносите живые цветы
							</Typography>
						</InfoContainer>

						<InfoContainer>
							<Typography
								variant="h5"
								sx={{ color: theme.palette.text.primary }}
							>
								Мы не сможем разместить цветы после росписи, а даже если они
								доедут до дома, их будет некуда ставить. <br /> Вместо букета
								цветов принесите бутылочку вина с пожеланием на какой день нам
								ее открыть. <br /> Если вы не хотите дарить алкоголь, можете
								заказать в ближайший к мкр. Солнцево-парк ПВЗ пакет корма для
								собак, а мы отвезем его в приют.
							</Typography>
						</InfoContainer>
					</Box>
				</InfoContainer>
			</Grid>
		</Grid>
	);
};

export default Gifts;
