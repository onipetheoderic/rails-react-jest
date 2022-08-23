/** * @jest-environment jsdom */
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, cleanup, screen, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import AllTasks from "../../pages/AllTasks";
import { StoreContextProvider } from "../../store";

afterEach(cleanup);

const queryClient = new QueryClient();

describe("AllTasks Page", () => {
  it("it renders without crashing", async () => {
    render(
      <StoreContextProvider>
        <QueryClientProvider client={queryClient} contextSharing={true}>
          <AllTasks />
        </QueryClientProvider>
      </StoreContextProvider>
    );

    expect(waitFor(() => screen.getByText("Add Task")));
  });
});
