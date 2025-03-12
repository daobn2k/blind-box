import { useEffect, useState } from "react";

/* eslint-disable @typescript-eslint/no-explicit-any */
export const useCountDownTime = (
  format: "DAY" | "HOURS",
  targetDate: any = new Date("2024-10-11T00:00:00")
) => {
  // State to store the countdown time
  const [countdown, setCountdown] = useState("");

  useEffect(() => {
    // Function to update the countdown
    const updateCountdown = () => {
      const now: any = new Date();
      const difference = targetDate - now;

      if (difference <= 0) {
        setCountdown("Countdown completed!");
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

      if (format === "HOURS") {
        const hour = days > 0 ? hours + days * 24 : hours;

        setCountdown(`${hour}H ${minutes}M`);
        return;
      }

      setCountdown(`${days}d : ${hours}h : ${minutes}m`);
    };

    // Update countdown every second
    const interval = setInterval(updateCountdown, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [targetDate, format]);

  return countdown;
};
