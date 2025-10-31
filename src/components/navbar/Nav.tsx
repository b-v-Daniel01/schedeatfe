import NavbarLink from "@/components/navbar/NavbarLink";
import { filterEnum, mainRoutesEnum } from "@enums/routing/routes";
import { useTranslation } from "react-i18next";
import { WeekdayLC } from "@/types/enums/weekday";

export default function Nav() {
  const { t } = useTranslation();
  return (
    <>
      <nav className="grid [grid-template-columns:auto_repeat(7,1fr)_auto] gap-2 px-2 items-center text-center w-full">
        <NavbarLink link={`${mainRoutesEnum.DIET}`} label={t("weekly_plan")}></NavbarLink>

        <NavbarLink
          link={`${mainRoutesEnum.DIET}/${filterEnum.WEEKDAY}/${WeekdayLC.MONDAY}`}
          label={t("days.monday")}
        ></NavbarLink>
        <NavbarLink
          link={`${mainRoutesEnum.DIET}/${filterEnum.WEEKDAY}/${WeekdayLC.TUESDAY}`}
          label={t("days.tuesday")}
        ></NavbarLink>
        <NavbarLink
          link={`${mainRoutesEnum.DIET}/${filterEnum.WEEKDAY}/${WeekdayLC.WEDNESDAY}`}
          label={t("days.wednesday")}
        ></NavbarLink>
        <NavbarLink
          link={`${mainRoutesEnum.DIET}/${filterEnum.WEEKDAY}/${WeekdayLC.THURSDAY}`}
          label={t("days.thursday")}
        ></NavbarLink>
        <NavbarLink
          link={`${mainRoutesEnum.DIET}/${filterEnum.WEEKDAY}/${WeekdayLC.FRIDAY}`}
          label={t("days.friday")}
        ></NavbarLink>
        <NavbarLink
          link={`${mainRoutesEnum.DIET}/${filterEnum.WEEKDAY}/${WeekdayLC.SATURDAY}`}
          label={t("days.saturday")}
        ></NavbarLink>
        <NavbarLink
          link={`${mainRoutesEnum.DIET}/${filterEnum.WEEKDAY}/${WeekdayLC.SUNDAY}`}
          label={t("days.sunday")}
        ></NavbarLink>

        <NavbarLink link={`${mainRoutesEnum.SHOPPINGLIST}`} label={t("shopping_list")}></NavbarLink>
      </nav>
    </>
  );
}
