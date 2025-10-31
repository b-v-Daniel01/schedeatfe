import { filterEnum, mainRoutesEnum } from "@enums/routing/routes";
import DailyDietPage from "@pages/DailyDietPage";
import WeeklyDietPage from "@pages/WeeklyDietPage";
import { useTranslation } from "react-i18next";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import { useState } from "react";
import { MiniCalendar } from "@mantine/dates";
import Nav from "@components/navbar/nav";

interface AppProps {
  onToggleTheme: () => void;
}

export default function App({ onToggleTheme }: AppProps) {
  const { i18n } = useTranslation();
  const navigate = useNavigate();

  const [selectedDate, setSelectedDate] = useState<string>(new Date().toISOString().split("T")[0]);
  const handleDateChange = (date: string) => {
    setSelectedDate(date);

    // Se vuoi navigare, puoi convertire la stringa in Date
    const dateObj = new Date(date);
    const weekday = dateObj.toLocaleDateString("en-US", { weekday: "long" }).toLowerCase();

    navigate(`${mainRoutesEnum.DIET}/${filterEnum.WEEKDAY}/${weekday}`);
  };

  return (
    <>
      {/* <nav>
        <Link to="/diet">{t("weekly_plan")}</Link> |
        <Link to={`/${mainRoutesEnum.DIET}/${filterEnum.WEEKDAY}/${WeekdayLC.MONDAY}`}>{t("days.monday")}</Link> |
        <Link to={`/${mainRoutesEnum.DIET}/${filterEnum.WEEKDAY}/${WeekdayLC.THURSDAY}`}>{t("days.tuesday")}</Link> |
        <Link to={`/${mainRoutesEnum.DIET}/${filterEnum.WEEKDAY}/${WeekdayLC.WEDNESDAY}`}>{t("days.wednesday")}</Link> |
        <Link to={`/${mainRoutesEnum.DIET}/${filterEnum.WEEKDAY}/${WeekdayLC.THURSDAY}`}>{t("days.thursday")}</Link> |
        <Link to={`/${mainRoutesEnum.DIET}/${filterEnum.WEEKDAY}/${WeekdayLC.FRIDAY}`}>{t("days.friday")}</Link> |
        <Link to={`/${mainRoutesEnum.DIET}/${filterEnum.WEEKDAY}/${WeekdayLC.SATURDAY}`}>{t("days.saturday")}</Link> |
        <Link to={`/${mainRoutesEnum.DIET}/${filterEnum.WEEKDAY}/${WeekdayLC.SUNDAY}`}>{t("days.sunday")}</Link> |
        <Link to={`/${mainRoutesEnum.SHOPPINGLIST}`}>{t("shopping_list")}</Link> |
      </nav> */}

      <div style={{ display: "flex", justifyContent: "center", marginTop: "1rem" }}>
        <MiniCalendar
          size="sm"
          value={selectedDate}
          onChange={handleDateChange}
          fullWidth={false}
          withCellSpacing
          weekendDays={[0]} // opzionale: evidenzia le domeniche
          hideOutsideDates={false}
        />
      </div>

      <Nav></Nav>
      <Routes>
        <Route path="/" element={<WeeklyDietPage />} />
        <Route path={`/${mainRoutesEnum.DIET}`} element={<WeeklyDietPage />} />
        <Route
          path={`/${mainRoutesEnum.DIET}/:${filterEnum.TIPOFILTRO}/:${filterEnum.PARAMFILTRO}`}
          element={<DailyDietPage />}
        />
      </Routes>
      <button onClick={() => i18n.changeLanguage("it")}>🇮🇹</button>
      <button onClick={() => i18n.changeLanguage("en")}>🇧🇧</button>

      <div>
        <button onClick={onToggleTheme}>Cambia tema</button>
      </div>
    </>
  );
}
