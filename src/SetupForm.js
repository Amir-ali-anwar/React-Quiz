import React from "react";
import { useGlobalContext } from "./context";

const SetupForm = () => {
  return (
    <main>
      <section className="quiz quiz-small">
        <forn className="setup-form">
          <h2>setup</h2>
          <div className="form-control">
            <label for="amount">number of questions</label>
            <input type="number" name="amount" id="amount" className="form-input" min="1" max="50" />
          </div>
        </forn>
      </section>
    </main>
  );
};

export default SetupForm;
