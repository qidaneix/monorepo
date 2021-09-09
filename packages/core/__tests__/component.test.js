import { fireEvent, render } from "@testing-library/react";
import React from "react";
import { Greeting } from "../lib/component";

describe("<Greeting />", () => {
  test("shows correct greeting", () => {
    const screen = render(<Greeting />);
    const greeting = screen.getByTestId("greeting");
    const button = screen.getByTestId("show-greeting-button");

    expect(greeting.textContent).toBe("");
    fireEvent.click(button);
    expect(greeting.textContent).toBe("Hello human!");
  });
});
