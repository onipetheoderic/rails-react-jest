/** * @jest-environment jsdom */
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, cleanup, screen } from "@testing-library/react";
import TaskCard from "../../../components/commons/TaskCard";
import { StoreContextProvider } from "../../../store";

afterEach(cleanup);

const defaultProps = {
  avatar: "https://avatar.test.com.png",
  description: "test description",
  checkBoxClick: jest.fn(),
  time: "10.10AM",
};

describe("TaskCard.js", () => {
  it("it renders the description", () => {
    render(<TaskCard {...defaultProps} />);
    expect(screen.getByTestId("task-card")).toHaveTextContent(defaultProps.description);
  });

  it("it renders the time if checked is true", () => {
    render(<TaskCard {...defaultProps} checked={true} />);
    expect(screen.getByTestId("task-card")).toHaveTextContent(defaultProps.time);
  });

});
