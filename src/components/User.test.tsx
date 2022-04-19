/* eslint-disable testing-library/no-debugging-utils */
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Users } from "./Users";

const usersMocked = ["Davi", "Jhon", "Steve"];

describe("Users", () => {
  it("should renders correctly", () => {
    render(<Users users={usersMocked} />);

    const input = screen.getByRole("textbox");
    const addButton = screen.getByRole("button");
    const list = screen.getByRole("list");
    const users = screen.getAllByRole("listitem");

    expect(input).toBeInTheDocument();
    expect(addButton).toBeInTheDocument();
    expect(list).toBeInTheDocument();
    expect(users.length).toBe(3);
  });

  it("should be possible add users in list", async () => {
    render(<Users users={[]} />);

    const input = screen.getByRole("textbox");
    const addButton = screen.getByRole("button", { name: "Add" });

    userEvent.type(input, "Jhon Doe");
    userEvent.click(addButton);

    await waitFor(() => {
      expect(screen.getByText("Jhon Doe")).toBeInTheDocument();
    });
  });
});
