import { render, screen } from "@testing-library/react";

import userEvent from "@testing-library/user-event";
import { Search } from "../search";

const mockData = [
  { name: "File A", type: "pdf", added: "2021-01-01" },
  { name: "File B", type: "doc", added: "2021-01-02" },
  { name: "Folder A", type: "folder", added: "2021-01-03", files: [] },
];

const setup = () => {
  render(<Search filesAndFolders={mockData} />);
};

describe("SearchComponent", () => {
  it("sorts by name correctly", async () => {
    setup();
    const btnSortByName = screen.getByRole("button", { name: "Name" });
    await userEvent.click(btnSortByName);

    const displayedItems = screen.getAllByRole("listitem");
    expect(displayedItems[0]).toHaveTextContent("file-a.pdf");
  });

  it("sorts by date correctly", async () => {
    setup();
    const btnSortByDate = screen.getByRole("button", { name: "Date" });
    await userEvent.click(btnSortByDate);

    const displayedItems = screen.getAllByRole("listitem");
    expect(displayedItems[0]).toHaveTextContent("2021-01-01");
  });

  it("filters items based on search input", async () => {
    setup();
    const inputElement = screen.getByPlaceholderText("Search...");
    await userEvent.type(inputElement, "Folder");

    const displayedItems = screen.getAllByRole("listitem");
    expect(displayedItems.length).toBe(1);
    expect(displayedItems[0]).toHaveTextContent("Folder A");
  });
});
