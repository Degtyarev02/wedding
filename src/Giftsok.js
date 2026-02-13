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
			description: "Там большой выбор товаров, мы обязательно найдем что-нибудь для себя",
		},
		{
			title: "Сертификат в спортивный магазин",
			description: "Мы бы купили Маше велосипед, а Вове лыжи",
		},
		{
			title: "Сертификат в Hoff или ЛеманаПро",
			description: "Добавим уюта в доме или сделаем небольшой ремонт",
		},
		{
			title: "Сертификат в Cuva",
			description: "Отдохнуть мы никогда не против",
		},
	];

	
	const notInterested = [
		{
			title: "Сервизы и посуду",
			description: "У нас есть полный комплект посуды",
		},
		{
			title: "Скоропортящиеся товары",
			description:
				"Еда и конфеты это вкусно, но они не выдержат 5 часов под июньским солнцем и пропадут",
		},
		{
			title: "Одежда",
			description: "Мы еще старую не относили :)",
		},
		{
			title: "Постельное белье",
			description: "У нас нестандартные размеры постельного белья",
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
		</Grid>
	);
};

export default Giftsok;
