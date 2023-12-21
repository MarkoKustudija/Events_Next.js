import React from "react";
import DateIcon from "../icons/DateIcon";
import classes from "./EventItem.module.css";
import Link from "next/link";
import AddressIcon from "../icons/AddressIcon";
import ArrowRightIcon from "../icons/ArrowRightIcon";

export type EventItemProps = {
  id: string;
  title: string;
  image?: string;
  date: string;
  location: string;
};

export default function EventItem({
  id,
  title,
  image,
  date,
  location,
}: EventItemProps) {

    const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric",
      });

      const exploreLink = `/events/${id}`;
    
  return (
    <li className={classes.item}>
    <img src={"/" + image} alt={title} />
    <div className={classes.content}>
      <div className={classes.summary}>
        <h2>{title}</h2>
        <div className={classes.date}>
          <DateIcon />
          <time>{humanReadableDate}</time>
        </div>
        <div className={classes.address}>
          <AddressIcon />
          <address>{location}</address>
        </div>
      </div>
      <div className={classes.actions}>
        <Link href={exploreLink}>
          <span>Explore Event</span>
          <span className={classes.icon}>
            <ArrowRightIcon />
          </span>
        </Link>
      </div>
    </div>
  </li>
  )
}
