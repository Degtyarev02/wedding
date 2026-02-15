import { Box, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useState, useEffect } from "react";

const CompactWeddingDate = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  
  const weddingDate = new Date(2026, 5, 26).getTime();
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate - now;

      if (distance < 0) {
        setTimeLeft("Свадьба состоится сегодня! 💕");
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / (1000));
        
        setTimeLeft(`${days}д ${hours}ч ${minutes}м ${seconds}с`);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [weddingDate]);

  return (
    <Box
      sx={{
        background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main} 90%)`,
        color: theme.palette.text.primary,
        padding: "20px 25px",
        borderRadius: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        mb: 5,
        boxShadow: `0 5px 20px ${theme.palette.primary.main}60`,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
        <Typography variant={matches ? "h3" : "h4"} sx={{ fontWeight: 700 }}>
          26
        </Typography>
        <Typography variant={matches ? "h3" : "h4"} sx={{ opacity: 0.7 }}>
          /
        </Typography>
        <Typography variant={matches ? "h3" : "h4"} sx={{ fontWeight: 700 }}>
          06
        </Typography>
        <Typography variant={matches ? "h3" : "h4"} sx={{ opacity: 0.7 }}>
          /
        </Typography>
        <Typography variant={matches ? "h3" : "h4"} sx={{ fontWeight: 700 }}>
          2026
        </Typography>
      </Box>
      
      <Box sx={{ 
        display: "flex", 
        alignItems: "center", 
        gap: 1,
        backgroundColor: "rgba(255,255,255,0.2)",
        padding: "8px 15px",
        borderRadius: "30px",
        mt: 1
      }}>
        <Typography variant="body1" sx={{ opacity: 1 }}>
          До свадьбы осталось:
        </Typography>
        <Typography variant="body1" sx={{ fontWeight: 600 }}>
          {timeLeft}
        </Typography>
      </Box>
    </Box>
  );
};

export default CompactWeddingDate;