import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export function Timer() {
  const { t } = useTranslation();
  const calculateTimeLeft = () => {
    const difference = +new Date("2024-6-1") - +new Date();

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className="timer">
      <div className="days">
        <span className="title">{t("Days")}</span>
        <span className="num">
          {timeLeft.days < 10 ? `0${timeLeft.days}` : timeLeft.days}
        </span>
      </div>
      :
      <div className="hours">
        <span className="title">{t("Hours")}</span>
        <span className="num">
          {timeLeft.hours < 10 ? `0${timeLeft.hours}` : timeLeft.hours}
        </span>
      </div>
      :
      <div className="minutes">
        <span className="title">{t("Minutes")}</span>
        <span className="num">
          {timeLeft.minutes < 10 ? `0${timeLeft.minutes}` : timeLeft.minutes}
        </span>
      </div>
      :
      <div className="seconds">
        <span className="title">{t("Seconds")}</span>
        <span className="num">
          {timeLeft.seconds < 10 ? `0${timeLeft.seconds}` : timeLeft.seconds}
        </span>
      </div>
    </div>
  );
}
