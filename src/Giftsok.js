import {
	CardGiftcardRounded,
	NotInterested
} from "@mui/icons-material";
import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import { InfoContainer, ScheduleItem } from "./const";

const Giftsok = () => {
	const interested = [
		{
			title: "Мы ценим Ваше внимание",
			description:
				"Главное для нас — разделить этот день с Вами. У нас есть много планов на будущее, и Ваша финансовая поддержка поможет нам быстрее их реализовать. Искренне ваши, Вова и Маша",
			isWarm: true,
		},
	];

	const notInterested = [
		{
			title: "Сервизы и посуду",
		},
		{
			title: "Скоропортящиеся товары",
		},
		{
			title: "Одежда",
		},
		{
			title: "Постельное белье",
		},
	];

	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.up("md"));
	return (
		<Grid
			container
			spacing={4}
			sx={{ height: "auto", pb: 6, px: matches ? 4 : 2 }}
			size={{ xs: 12 }}
		>
			<Grid item size={{ xs: 12, md: 6 }}>
				<InfoContainer elevation={0}>
					<Box sx={{ display: "flex", flexDirection: "column"}}>
						<Box display={"flex"} mb={3}>
							<CardGiftcardRounded
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
								Лучший подарок - это Ваше присутствие
							</Typography>
						</Box>
						{interested.map((item, index) => (
							<ScheduleItem key={index}>
								<Box>
									<Typography
										variant="h6"
										sx={{
											mb: 0.5,
											color: theme.palette.text.primary,
										}}
									>
										{item.title}
									</Typography>
									<Typography
										variant="body1"
										sx={{
											color: theme.palette.text.secondary,
											opacity: 1,
										}}
									>
										{item.description}
									</Typography>
								</Box>
							</ScheduleItem>
						))}
					</Box>
				</InfoContainer>
			</Grid>
			<Grid item size={{ xs: 12, md: 6 }}>
				<InfoContainer elevation={0}>
					<Box sx={{ display: "flex", flexDirection: "column"}}>
						<Box display={"flex"} mb={3}>
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
								Что не стоит дарить
							</Typography>
						</Box>
						{notInterested.map((item, index) => (
							<ScheduleItem key={index}>
								<Box>
									<Typography
										variant="h6"
										sx={{
											mb: 0.5,
											color: theme.palette.text.primary,
										}}
									>
										{item.title}
									</Typography>
								</Box>
							</ScheduleItem>
						))}
					</Box>
				</InfoContainer>
			</Grid>
		</Grid>
	);
};

export default Giftsok;
