import { Box, Divider, Typography, useMediaQuery } from "@mui/material";
import Grid from "@mui/material/Grid";
import { styled, useTheme } from "@mui/material/styles";

const ImageContainer = styled("div")({
	width: 200,
	height: 200,
	borderRadius: "50%",
	border: "5px solid #B0DB9C",
	overflow: "hidden",
	marginRight: "20px",
});

const InfoContainer = styled("div")(({ theme }) => ({
	flex: 1,
	backgroundColor: theme.palette.accent.main,
	borderRadius: "10px",
	padding: "25px 20px",
}));

const ProfileSection = () => {
	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.up("md"));

	const Image = styled("img")({
		width: "100%",
		height: "100%",
		maxWidth: matches ? "340px" : "200px",
		objectFit: "cover",
	});

	return (
		<Grid
			container
			spacing={2}
			sx={{ background: 'url("/background.png")' }}
			justifyContent={"center"}
		>
			<Grid
				mt={5}
				mb={5}
				p={4}
				item
				container
				size={{ xs: 12 }}
				sx={{
					textAlign: "center",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<Typography variant="h3">Приглашаем вас</Typography>
				<Typography variant="h3">на нашу</Typography>
				<Typography variant="h2">СВАДЬБУ</Typography>
			</Grid>
			<Grid item container size={{ xs: 12 }} justifyContent={"center"} mb={5}>
				<Image src="/us.png" />
			</Grid>
			<Box
				mb={5}
				container
				size={{ xs: 12 }}
				sx={{
					background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main} 90%)`,
					color: theme.palette.text.primary,
					padding: "10px 20px",
					borderRadius: "20px",
					display: "flex",
					textAlign: "center",
					alignItems: "end",
					justifyContent: "center",
				}}
			>
				<Typography variant={matches ? "h3" : "h4"}>26</Typography>
				<Typography variant={matches ? "h3" : "h4"}>/</Typography>
				<Typography variant={matches ? "h3" : "h4"}>06</Typography>
				<Typography variant={matches ? "h3" : "h4"}>/</Typography>
				<Typography variant={matches ? "h3" : "h4"}>2026</Typography>
			</Box>
		</Grid>
	);
};
export default ProfileSection;
