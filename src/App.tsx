import WeeklyDietPage from "./pages/WeeklyDietPage";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";

export default function app() {
  return (
    <>
      <nav>
        <Link to="/diet">Plan Setimanale</Link> |
        <Link to="/diet/weekday/monday">LUNEDI</Link> |
        <Link to="/diet/weelday/tuesday">MARTEDI</Link> |
        <Link to="/diet/weelday/wednesday">MERCOLEDI</Link> |
        <Link to="/diet/weelday/thursday">GIOVEDI</Link> |
        <Link to="/diet/weelday/friday">VENERDI</Link> |
        <Link to="/diet/weelday/saturday">SABATO</Link> |
        <Link to="/diet/weelday/sunday">DOMENICA</Link> |
        <Link to="/shoppinglist">Spesa</Link>
      </nav>
      <Routes>
        <Route path="/" element={<WeeklyDietPage />} />
        <Route path="/diet" element={<WeeklyDietPage />} />
        <Route path="/diet/:filtertype/:filter" element={<DayDietPage />} />
      </Routes>
    </>
  );
}
