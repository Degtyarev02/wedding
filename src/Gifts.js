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
			<Grid item size={{ xs: 12 }}>
				<InfoContainer
					elevation={0}
					sx={{ background: 'url("/background.png")' }}
				>
					<Box sx={{ display: "flex", flexDirection: "column", mb: 3 }}>
						<InfoContainer
							sx={{
								height: "auto",
								mb: 3,
								display: "flex",
								alignItems: "center",
								padding: "20px",
							}}
						>
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
								sx={{ color: theme.palette.text.primary, padding: "20px" }}
							>
								Нам будет негде разместить цветы после росписи, поэтому они
								могут быстро завять.
								<br /> Вместо букета цветов вы можете принести бутылочку вина с
								пожеланием, на какой день нам ее открыть. <br /> Или заказать в
								ближайший к метро Пыхтино ПВЗ пакет корма для собак или кошечек,
								а мы отвезем его в приют.
							</Typography>
						</InfoContainer>
					</Box>
				</InfoContainer>
			</Grid>
		</Grid>
	);
};

export default Gifts;
