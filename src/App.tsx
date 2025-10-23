import DailyDietPage from "@pages/DailyDietPage";
import WeeklyDietPage from "@pages/WeeklyDietPage";
import { WeekdayLC } from "@enums/weekday";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import { filterEnum, mainRoutesEnum } from "@enums/routing/routes";

export default function app() {
  return (
    <>
      <nav>
        <Link to="/diet">Plan Setimanale</Link> |
        <Link to={`/${mainRoutesEnum.DIET}/${filterEnum.WEEKDAY}/${WeekdayLC.MONDAY}`}>LUNEDI</Link> |
        <Link to={`/${mainRoutesEnum.DIET}/${filterEnum.WEEKDAY}/${WeekdayLC.THURSDAY}`}>LUNEDI</Link> |
        <Link to={`/${mainRoutesEnum.DIET}/${filterEnum.WEEKDAY}/${WeekdayLC.WEDNESDAY}`}>LUNEDI</Link> |
        <Link to={`/${mainRoutesEnum.DIET}/${filterEnum.WEEKDAY}/${WeekdayLC.THURSDAY}`}>LUNEDI</Link> |
        <Link to={`/${mainRoutesEnum.DIET}/${filterEnum.WEEKDAY}/${WeekdayLC.FRIDAY}`}>LUNEDI</Link> |
        <Link to={`/${mainRoutesEnum.DIET}/${filterEnum.WEEKDAY}/${WeekdayLC.SATURDAY}`}>LUNEDI</Link> |
        <Link to={`/${mainRoutesEnum.DIET}/${filterEnum.WEEKDAY}/${WeekdayLC.SUNDAY}`}>LUNEDI</Link> |
        <Link to={`/${mainRoutesEnum.DIET}/${filterEnum.WEEKDAY}/${WeekdayLC.MONDAY}`}>LUNEDI</Link> |
      </nav>
      <Routes>
        <Route path="/" element={<WeeklyDietPage />} />
        <Route path={`/${mainRoutesEnum.DIET}`} element={<WeeklyDietPage />} />
        <Route
          path={`/${mainRoutesEnum.DIET}/:${filterEnum.TIPOFILTRO}/:${filterEnum.PARAMFILTRO}`}
          element={<DailyDietPage />}
        />
      </Routes>
    </>
  );
}
