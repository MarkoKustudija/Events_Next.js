import React, { FormEvent, useContext, useRef } from "react";
import classes from "./NewsletterRegistration.module.css";
import { error } from "console";

function NewsLetterRegistration() {
  const emailInputRef = useRef<HTMLInputElement>(null);

  //to do Ctx ... notification
  

  function registrationHandler(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const enteredEmail = emailInputRef.current!.value;

    //to do Ctx ... notification


    fetch("/api/newsletter/", {
      method: "POST",
      body: JSON.stringify({ email: enteredEmail }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(async (response) => {
        if (response.ok) {
          alert('Succesfully signed up!')
          return response.json();
        }
        const data = await response.json();
        throw new Error(data.message || "Something went wrong!");
      })
      .then((data) => {
        console.log(data);
        
      })
      .catch((error) => {
        
        throw new Error("Error fetching comments...");
      });

    event.currentTarget.reset();
  }

  
  return (
    <section className={classes.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={classes.control}>
          <input
            type="email"
            id="email"
            placeholder="Your email"
            aria-label="Your email"
            ref={emailInputRef}
            required
          />
          <button>Register</button>
        </div>
      </form>
    </section>
  );
}

export default NewsLetterRegistration;
