import { Box, Divider, Typography, useMediaQuery, Button, Paper } from "@mui/material";
import Grid from "@mui/material/Grid";
import { styled, useTheme } from "@mui/material/styles";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ScheduleIcon from '@mui/icons-material/Schedule'
import { InfoContainer, ScheduleItem } from "./const";

const TimeBadge = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.secondary.contrastText,
  padding: "8px 16px",
  borderRadius: "20px",
  fontWeight: "bold",
  marginRight: "20px",
  minWidth: "80px",
  textAlign: "center",
  zIndex: 2
}));

const Place = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  const weddingSchedule = [
    { time: "16:00", title: "Сбор гостей", description: "Встреча гостей у ЗАГСа" },
    { time: "17:00", title: "Торжественная церемония", description: "Обмен клятвами и кольцами" },
    { time: "18:30", title: "Свадебный ужин в кругу родственников", description: "Банкет в ресторане" }
  ];

  return (
      <Grid container spacing={4} sx={{ height: "auto", py: 6, px: matches ? 4 : 2}} size={{ xs: 12 }}>
        <Grid item size={{ xs: 12, md: 6 }}>
          <InfoContainer elevation={0}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
              <LocationOnIcon sx={{ 
                fontSize: "2rem", 
                mr: 2,
                color: theme.palette.primary.dark 
              }} />
              <Typography variant="h4" sx={{ color: theme.palette.text.primary }}>
                Где встречаемся
              </Typography>
            </Box>

            <Box sx={{ 
              mb: 4,
              borderRadius: "12px",
              overflow: "hidden",
              height: "300px",
              position: "relative"
            }}>
              <img 
                src="/wedplace.jpg" 
                alt="Место проведения свадьбы"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
              <Box sx={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                padding: "20px",
                color: "white"
              }}>
                <Typography variant="h5">Дворец бракосочетания № 4</Typography>
              </Box>
            </Box>

            <Button
              variant="contained"
              color="primary"
              size="large"
              startIcon={<LocationOnIcon />}
              href="https://yandex.ru/maps/-/CPQ6FR7E"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                px: 4,
                py: 1.5,
                width: '100%',
                fontSize: "1.5rem",
                borderRadius: "30px",
                background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main} 90%)`,
                "&:hover": {
                  background: `linear-gradient(45deg, ${theme.palette.primary.dark} 30%, ${theme.palette.secondary.dark} 90%)`,
                  boxShadow: "0 6px 20px rgba(255, 182, 193, 0.4)",
                },
                transition: "all 0.3s ease",
              }}
            >
              Посмотреть на карте
            </Button>
          </InfoContainer>
        </Grid>
        <Grid item size={{ xs: 12, md: 6 }}>
          <InfoContainer elevation={0}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 4 }}>
              <ScheduleIcon sx={{ 
                fontSize: "2rem", 
                mr: 2,
                color: theme.palette.primary.dark 
              }} />
              <Typography variant="h4" sx={{ color: theme.palette.text.primary }}>
                Расписание дня
              </Typography>
            </Box>

            <Box sx={{ position: "relative" }}>
              {/* Вертикальная линия времени */}
              <Box sx={{
                position: "absolute",
                left: "40px",
                top: "10px",
                bottom: "10px",
                width: "3px",
                backgroundColor: theme.palette.secondary.main,
                borderRadius: "2px",
              }} />

              {weddingSchedule.map((item, index) => (
                <ScheduleItem key={index}>
                  <TimeBadge>
                    <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
                      {item.time}
                    </Typography>
                  </TimeBadge>
                  <Box>
                    <Typography variant="h6" sx={{ 
                      mb: 0.5,
                      color: theme.palette.text.primary
                    }}>
                      {item.title}
                    </Typography>
                    <Typography variant="body1" sx={{ 
                      color: theme.palette.text.secondary,
                      opacity: 1
                    }}>
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

export default Place;