import { ReactNode } from 'react';
import classes from './Results-title.module.css';
import Button from '../ui/Button';

type ResultsTitleProps = {
  date: Date; 
};

function ResultsTitle({ date }: ResultsTitleProps) {
  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  });

  return (
    <section className={classes.title}>
      <h1>Events in {humanReadableDate}</h1>
      <Button href='/events'>Show all events</Button>
    </section>
  );
}

export default ResultsTitle;
