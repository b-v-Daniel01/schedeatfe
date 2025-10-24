import DailyDietPage from "@pages/DailyDietPage";
import WeeklyDietPage from "@pages/WeeklyDietPage";
import { WeekdayLC } from "@enums/weekday";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import { filterEnum, mainRoutesEnum } from "@enums/routing/routes";
import { useTranslation } from "react-i18next";

export default function app() {
  const { t, i18n } = useTranslation();

  return (
    <>
      <nav>
        <Link to="/diet">{t("weekly_plan")}</Link> |
        <Link to={`/${mainRoutesEnum.DIET}/${filterEnum.WEEKDAY}/${WeekdayLC.MONDAY}`}>{t("days.monday")}</Link> |
        <Link to={`/${mainRoutesEnum.DIET}/${filterEnum.WEEKDAY}/${WeekdayLC.THURSDAY}`}>{t("days.tuesday")}</Link> |
        <Link to={`/${mainRoutesEnum.DIET}/${filterEnum.WEEKDAY}/${WeekdayLC.WEDNESDAY}`}>{t("days.wednesday")}</Link> |
        <Link to={`/${mainRoutesEnum.DIET}/${filterEnum.WEEKDAY}/${WeekdayLC.THURSDAY}`}>{t("days.thursday")}</Link> |
        <Link to={`/${mainRoutesEnum.DIET}/${filterEnum.WEEKDAY}/${WeekdayLC.FRIDAY}`}>{t("days.friday")}</Link> |
        <Link to={`/${mainRoutesEnum.DIET}/${filterEnum.WEEKDAY}/${WeekdayLC.SATURDAY}`}>{t("days.saturday")}</Link> |
        <Link to={`/${mainRoutesEnum.DIET}/${filterEnum.WEEKDAY}/${WeekdayLC.SUNDAY}`}>{t("days.sunday")}</Link> |
        <Link to={`/${mainRoutesEnum.SHOPPINGLIST}`}>{t("shopping_list")}</Link> |
      </nav>
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
    </>
  );
}
