import React from "react";

const sayHello = (name) => {
  if (!name) {
    return "Hello human!";
  }

  return `Hello ${name}!`;
};

export const Greeting = () => {
  const [showGreeting, setShowGreeting] = React.useState(false);

  return (
    <div>
      <p data-testid="greeting">{showGreeting && sayHello()}</p>
      <button
        data-testid="show-greeting-button"
        onClick={() => setShowGreeting(true)}
      >
        Show Greeting
      </button>
    </div>
  );
};
