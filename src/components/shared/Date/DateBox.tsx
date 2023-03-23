import * as S from "./Date.style";
import { useEffect, useState } from "react";

interface Proptypes {
  isAlways?: boolean;
  handleDate: (date: string) => void;
  initialDate: any;
}

const DateBox = ({ isAlways = false, handleDate, initialDate }: Proptypes) => {
  const [date, setDate] = useState<{
    year: string;
    month: string;
    day: string;
  }>({
    year: "",
    month: "",
    day: "",
  });

  useEffect(() => {
    const splittedDate = initialDate.split("-");
    setDate({
      year: splittedDate[0],
      month: splittedDate[1],
      day: splittedDate[2],
    });
  }, [initialDate]);

  const handleDateInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate({ ...date, [e.target.name]: e.target.value });
  };

  const handleDateManually = (name: string, value: string | number) => {
    setDate({ ...date, [name]: value.toString() });
  };

  const dateKeyEvent = (
    e: React.KeyboardEvent<HTMLInputElement>,
    n: number
  ) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      handleDateManually(
        e.currentTarget.name,
        +e.currentTarget.value > 1 ? +e.currentTarget.value - 1 : n
      );
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      handleDateManually(
        e.currentTarget.name,
        +e.currentTarget.value < n ? +e.currentTarget.value + 1 : 1
      );
    }
  };

  const onBlur = () => {
    handleDate(
      date.year +
        "-" +
        date.month.toString().padStart(2, "0") +
        "-" +
        date.day.toString().padStart(2, "0")
    );
  };

  return (
    <S.Dates>
      <S.YearBox
        type="text"
        name="year"
        placeholder="2022"
        readOnly={isAlways}
        value={date?.year}
        onChange={handleDateInput}
        onKeyDown={(e) => dateKeyEvent(e, 2500)}
        onBlur={onBlur}
      />
      년
      <S.YearBox
        type="text"
        name="month"
        placeholder="2"
        readOnly={isAlways}
        value={date?.month}
        onChange={handleDateInput}
        onKeyDown={(e) => dateKeyEvent(e, 12)}
        onBlur={onBlur}
      />
      월
      <S.MonthDayBox
        type="text"
        name="day"
        placeholder="22"
        readOnly={isAlways}
        value={date?.day}
        onChange={handleDateInput}
        onKeyDown={(e) => dateKeyEvent(e, 31)}
        onBlur={onBlur}
      />
      일
    </S.Dates>
  );
};

export default DateBox;
