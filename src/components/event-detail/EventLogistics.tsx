import React from "react";
import classes from "./EventLogistics.module.css";
import { DUMMY_EVENTS } from "../../../dummy-data";
import LogisticsItem from "./LogisticsItem";
import DateIcon from "../icons/DateIcon";
import AddressIcon from "../icons/AddressIcon";

type EventLogisticsProps = {
  date: string;
  address: string;
  image: string;
  imageAlt: string;
};

function EventLogistics({
  date,
  address,
  image,
  imageAlt,
}: EventLogisticsProps) {
  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const addressText =
    address?.replace(", ", "\n") ?? `${DUMMY_EVENTS[0].location}`;

  console.log("Debug Information:", {
    date,
    humanReadableDate,
    address,
    addressText,
    image,
    imageAlt,
  });

  return (
    <section className={classes.logistics}>
      <div className={classes.image}>
        <img src={`/${image}`} alt={imageAlt} />
      </div>
      <ul className={classes.list}>
        <LogisticsItem icon={DateIcon}>
          <time>{humanReadableDate}</time>
        </LogisticsItem>
        <LogisticsItem icon={AddressIcon}>
          <address>{address}</address>
        </LogisticsItem>
      </ul>
    </section>
  );
}

export default EventLogistics;
