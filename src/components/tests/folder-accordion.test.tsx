import { render, screen } from "@testing-library/react";
import { FolderAccordion } from "../folder-accordion";

import userEvent from "@testing-library/user-event";
import { filesAndFolders } from "../../data";

const { name, type, added, files } = filesAndFolders[2];

const setup = () => {
  render(
    <FolderAccordion name={name} type={type} added={added} files={files} />
  );
};

describe("FolderAccordion", () => {
  it("should expand and close accordion", async () => {
    setup();

    const btn = screen.getByRole("button", { name: "Expenses" });

    expect(btn).toHaveAttribute("aria-expanded", "false");

    await userEvent.click(btn);

    expect(btn).toHaveAttribute("aria-expanded", "true");
  });
});
