import { Error, Note, NoteAdd, NotInterested } from "@mui/icons-material";
import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import { InfoContainer } from "./const";

const Notes = () => {
	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.up("md"));
	const notes = [
		"Просьба приезжать к назначенному времени и не задерживаться, мы будем очень взволнованы и вряд ли сможем вас сориентировать, если вы опоздаете",
		"Ужин в ресторане после росписи будет в кругу семьи. Друзья и подруги, нам будет проще собраться с вами в индивидуальном порядке и провести время без суеты и спешки",
		<>
			По каким либо вопросам свяжитесь с нами по телефону{" "}
			<a
				href="tel:+79263262344"
				style={{
					color: theme.palette.primary.dark,
					fontWeight: 600,
					textDecoration: "none",
					borderBottom: `2px solid ${theme.palette.primary.main}`,
					padding: "0 2px",
				}}
			>
				+79263262344 (Вова)
			</a>{" "}
			и{" "}
			<a
				href="tel:+79772860083"
				style={{
					color: theme.palette.primary.dark,
					fontWeight: 600,
					textDecoration: "none",
					borderBottom: `2px solid ${theme.palette.primary.main}`,
					padding: "0 2px",
				}}
			>
				+79772860083 (Маша)
			</a>
			. Звонки/Телеграм/СМС
		</>,
	];
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
							<Error
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
								Примечания
							</Typography>
						</InfoContainer>

						<Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
							{notes.map((item, index) => (
								<InfoContainer sx={{ padding: "20px" }}>
									<Typography
										variant="h5"
										sx={{ color: theme.palette.text.primary }}
									>
										{item}
									</Typography>
								</InfoContainer>
							))}
						</Box>
					</Box>
				</InfoContainer>
			</Grid>
		</Grid>
	);
};

export default Notes;
