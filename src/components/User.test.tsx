/* eslint-disable testing-library/no-debugging-utils */
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Users } from "./Users";

const usersMocked = ["Davi", "Jhon", "Steve"];

describe("Users", () => {
  it("should renders correctly", () => {
    render(<Users users={usersMocked} />);

    const input = screen.getByRole("textbox");
    const addButton = screen.getByRole("button", { name: "Add" });
    const list = screen.getByRole("list");
    const users = screen.getAllByRole("listitem");

    expect(input).toBeInTheDocument();
    expect(addButton).toBeInTheDocument();
    expect(list).toBeInTheDocument();
    expect(users.length).toBe(3);
  });

  it("should be possible add user from list", async () => {
    render(<Users users={[]} />);

    const input = screen.getByRole("textbox");
    const addButton = screen.getByRole("button", { name: "Add" });

    userEvent.type(input, "Jhon Doe");
    userEvent.click(addButton);

    await waitFor(() => {
      expect(screen.getByText("Jhon Doe")).toBeInTheDocument();
    });
  });

  it("should be possible remove user from list", async () => {
    render(<Users users={["Davi"]} />);

    const removeItemButton = screen.getByRole("button", {
      name: /trash/i,
    });

    userEvent.click(removeItemButton);

    await waitFor(() => {
      expect(screen.queryByText("Davi")).not.toBeInTheDocument();
    });
  });

  it("should not to render nothing if input is empty", () => {
    render(<Users users={[]} />);

    const input = screen.getByRole("textbox");
    const addButton = screen.getByRole("button", { name: "Add" });

    userEvent.type(input, "");
    userEvent.click(addButton);

    const users = screen.getByRole("list");

    expect(users).toBeEmpty();
  });
});
