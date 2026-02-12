import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import { InfoContainer, ScheduleItem } from "./const";
import { CardGiftcardRounded, Checkroom, GifBox, GifBoxRounded, NotInterested } from "@mui/icons-material";

const Giftsok = () => {
	const interested = [
		{
			title: "Сертификат в магазин техники",
			description: "Робот пылесос или моющий пылесос облегчили бы нам рутинную уборку",
		},
		{
			title: "Сертификат OZON",
			description: "Там большой выбор товаров!",
		},
		{
			title: "Сертификат в спортивный магазин",
			description: "Мы бы купили Маше велосипед, а Вове лыжи",
		},
	];

	
	const notInterested = [
		{
			title: "Сервизы и посуду",
			description: "У нас маленькая и совсем не вместительная кухня",
		},
		{
			title: "Крупная кухонная техника",
			description: "По той же причине, ее будет некуда ставить",
		},
		{
			title: "Скоропортящиеся товары",
			description:
				"Еда и конфеты это очень вкусно, однако они не выдержат 5 часов под июньским солнцем и пропадут",
		},
		{
			title: "Одежда",
			description: "Мы еще старую не относили :)",
		},
		{
			title: "Постельное белье",
			description: "У нас очень своеобразные размеры постельного белья",
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
			<Grid item size={{ xs: 12, md: 6}}>
				<InfoContainer elevation={0}>
					<Box sx={{ display: "flex", flexDirection: "column", mb: 3 }}>
						<Box display={"flex"} mb={3} >
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
								Что бы мы хотели в качестве подарка
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
										variant="body2"
										sx={{
											color: theme.palette.text.secondary,
											opacity: 0.8,
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
					<Box sx={{ display: "flex", flexDirection: "column", mb: 3 }}>
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
									<Typography
										variant="body2"
										sx={{
											color: theme.palette.text.secondary,
											opacity: 0.8,
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
		</Grid>
	);
};

export default Giftsok;
