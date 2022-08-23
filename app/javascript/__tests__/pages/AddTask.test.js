/** * @jest-environment jsdom */
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, cleanup, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import AddTask from "../../pages/AddTask";
import { StoreContextProvider } from "../../store";

afterEach(cleanup);

const queryClient = new QueryClient();

describe("AddTask Page", () => {
  it("it renders without crashing", () => {
    render(
      <StoreContextProvider>
        <QueryClientProvider client={queryClient} contextSharing={true}>
          <AddTask />
        </QueryClientProvider>
      </StoreContextProvider>
    );

    expect(screen.getByTestId("add-task")).toHaveTextContent("Add Task");
  });
});
