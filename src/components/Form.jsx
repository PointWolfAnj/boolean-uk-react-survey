import { useState } from "react";

export default function Form() {
  const [rate, setRate] = useState("");
  const [spendTime, setSpendTime] = useState("");
  const [about, setAbout] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const rateInput = (e) => {
    setRate(e.target.value);
    console.log(rate);
  };

  const spendTimeInput = (e) => {
    setSpendTime(e.target.value);
    console.log(spendTime);
  };
  const aboutInput = (e) => {
    setAbout(e.target.value);
  };
  const nameInput = (e) => {
    setName(e.target.value);
  };
  const emailInput = (e) => {
    setEmail(e.target.value);
  };
  const submitEvent = (e) => {
    e.preventDefault();
    const duckForm = { rate, spendTime, about, name, email };
    console.log(duckForm);
    setRate('');
    setSpendTime('');
    setAbout('');
    setName('');
    setEmail('');
  };

  console.log("rendering form!");
  return (
    <form class="form" onSubmit={submitEvent}>
      <h2>Tell us what you think about your rubber duck!</h2>
      <div class="form__group radio">
        <h3>How do you rate your rubber duck colour?</h3>
        {/*<!-- Radio inputs go here -->*/}
        <ul>
          <li>
            <input
              id="color-one"
              type="radio"
              name="color"
              value="1"
              onChange={rateInput}
            />
            <label for="color-one">1</label>
          </li>
          <li>
            <input
              id="color-two"
              type="radio"
              name="color"
              value="2"
              onChange={rateInput}
            />
            <label for="color-two">2</label>
          </li>
          <li>
            <input
              id="color-three"
              type="radio"
              name="color"
              value="3"
              onChange={rateInput}
            />
            <label for="color-three">3</label>
          </li>
          <li>
            <input
              id="color-four"
              type="radio"
              name="color"
              value="4"
              onChange={rateInput}
            />
            <label for="color-four">4</label>
          </li>
        </ul>
      </div>
      <div class="form__group">
        <h3>How do you like to spend time with your rubber duck</h3>
        {/*<!-- checkboxes go here -->*/}
        <ul>
          <li>
            <label>
              <input
                name="spend-time"
                type="checkbox"
                value="swimming"
                onChange={spendTimeInput}
                checked={spendTime === "swimming"}
              />
              Swimming
            </label>
          </li>
          <li>
            <label>
              <input
                name="spend-time"
                type="checkbox"
                value="bathing"
                onChange={spendTimeInput}
                checked={spendTime === "bathing"}
              />
              Bathing
            </label>
          </li>
          <li>
            <label>
              <input
                name="spend-time"
                type="checkbox"
                value="chatting"
                onChange={spendTimeInput}
                checked={spendTime === "chatting"}
              />
              Chatting
            </label>
          </li>
          <li>
            <label>
              <input
                name="spend-time"
                type="checkbox"
                value="noTime"
                onChange={spendTimeInput}
                checked={spendTime === "noTime"}
              />
              I don't like to spend time with it
            </label>
          </li>
        </ul>
      </div>
      <label>
        What else have you got to say about your rubber duck?
        <textarea
          name="review"
          cols="30"
          rows="10"
          value={about}
          onChange={aboutInput}
        ></textarea>
      </label>
      <label>
        Put your name here (if you feel like it):
        <input type="text" name="username" value={name} onChange={nameInput} />
      </label>
      <label>
        Leave us your email pretty please??
        <input
          type="email"
          name="email"
          value={email}
          onChange={emailInput}
          required
        />
      </label>
      <input class="form__submit" type="submit" value="Submit Survey!" />
    </form>
  );
}