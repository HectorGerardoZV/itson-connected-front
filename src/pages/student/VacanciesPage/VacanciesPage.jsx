import { useState, useEffect } from "react";

//Components
import Calendar from "react-calendar";
import {VacancyCard} from "../../../components/Index";

//Images
import ICON_CALENDAR from "/icons/icon-calendar.svg";
import ICON_SEARCH from "/icons/icon-search.svg";

//Style
import "react-calendar/dist/Calendar.css";
import style from "./VacanciesPage.module.css";
const VacanciesPage = () => {
    const [dateVacancy, setDateVacancy] = useState(new Date());
    const [dateVacancyParsed, setDateVacancyParsed] = useState("");
    const [isOpenDatePicker, setIsOpenDatePicker] = useState(false);

    const handleOnChangeDatePicker = (e) => {
        setDateVacancy(new Date(e));
    };
    const handleOnClickOpenDatePicker = () => {
        setIsOpenDatePicker(!isOpenDatePicker);
    };

    const parseDatePickerResult = () => {
        const resultDateParsed = dateVacancy
            .toLocaleString()
            .split(",")[0]
            .split("/");
        const resultDayParsed =
            resultDateParsed[0].length === 1
                ? `0${resultDateParsed[0]}`
                : resultDateParsed[0];
        const resultMonthParsed =
            resultDateParsed[1].length === 1
                ? `0${resultDateParsed[1]}`
                : resultDateParsed[1];
        const resultYearParsed = resultDateParsed[2];
        setDateVacancyParsed(
            `${resultYearParsed}-${resultMonthParsed}-${resultDayParsed}`
        );
    };

    useEffect(() => {
        parseDatePickerResult();
    }, [dateVacancy]);

    return (
        <section className={style.vacanciesPage}>
            <div className={style.vacancies__filters}>
                <input
                    className={style.inputFilter}
                    type="text"
                    placeholder="Nombre de la vacante..."
                />
                <input
                    className={style.inputFilter}
                    type="text"
                    placeholder="Nombre de la empresa..."
                />
                <div className={style.calendar__area}>
                    <div className={style.filters__calendar}>
                        <input
                            type="date"
                            defaultValue={dateVacancyParsed}
                            disabled={true}
                        />
                        <img
                            src={ICON_CALENDAR}
                            alt=""
                            onClick={handleOnClickOpenDatePicker}
                        />
                    </div>
                    {isOpenDatePicker ? (
                        <div className={style.calendar__picker}>
                            <Calendar
                                className={style.calendarStyle}
                                defaultValue={dateVacancy}
                                onChange={handleOnChangeDatePicker}
                            />
                        </div>
                    ) : null}
                </div>
                <div className={style.button__filter}>
                    <button>
                        Buscar
                        <img src={ICON_SEARCH} alt="" />
                    </button>
                </div>
            </div>
            <div className={style.line} />

            <section className={style.vacancies__area}>

              <VacancyCard/>
              <VacancyCard/>
              <VacancyCard/>
              <VacancyCard/>
              <VacancyCard/>
              <VacancyCard/>
              <VacancyCard/>
              <VacancyCard/>
              <VacancyCard/>
            </section>
        </section>
    );
};

export default VacanciesPage;
