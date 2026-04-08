import { Box, Paper } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";

export const InfoContainer = styled(Paper)(({ theme }) => ({
	flex: 1,
	backgroundColor: theme.palette.background.paper,
	borderRadius: "16px",
	padding: "25px",
	height: "100%",
	boxShadow: "0 8px 32px rgba(255, 182, 193, 0.2)",
}));

export const ScheduleItem = styled(Box)(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	marginBottom: "25px",
	padding: "15px",
	borderRadius: "12px",
	backgroundColor: theme.palette.primary.light,
	transition: "all 0.3s ease",
	"&:hover": {
		backgroundColor: theme.palette.primary.main,
		transform: "translateX(5px)",
	},
}));
