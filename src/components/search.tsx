import { ChangeEvent, useState } from "react";
import { Common, Folder, FoldersAndFiles } from "../types/Common.type";
import { FolderAccordion } from "./folder-accordion";
import { File } from "./file";

export const Search = ({ filesAndFolders }: FoldersAndFiles) => {
  const [searchField, setSearchField] = useState<string>("");
  const [sortedData, setSortedData] =
    useState<(Folder & Common)[]>(filesAndFolders);

  const handleSortBy = (sortType: "date" | "name") => {
    const sorted = [...filesAndFolders].sort((a, b) =>
      sortType === "date"
        ? a.added?.localeCompare(b.added ?? "") ?? 1
        : a.name.localeCompare(b.name)
    );

    setSortedData(sorted);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchField(e.target.value);
  };

  const filteredFilesAndFolders = sortedData.filter(({ name }) =>
    name.toLowerCase().includes(searchField.toLowerCase())
  );

  return (
    <>
      <div className="flex gap-4 items-baseline">
        <input
          className="w-full p-3 dark:bg-gray-800 rounded-lg shadow-lg"
          type="search"
          placeholder="Search..."
          onChange={handleChange}
        />
        <span className="w-max">Sort:</span>{" "}
        <button
          onClick={() => handleSortBy("name")}
          className="border-r pr-4 border-slate-500"
        >
          Name
        </button>{" "}
        <button onClick={() => handleSortBy("date")}>Date</button>
      </div>

      <ul className="flex flex-col gap-y-1">
        {filteredFilesAndFolders.map(({ name, type, files, added }, index) => (
          <li
            key={name}
            className={`my-1 ${index % 2 === 0 ? "bg-slate-100" : "bg-white"}`}
          >
            {type === "folder" ? (
              <FolderAccordion files={files ?? []} name={name} type={type} />
            ) : (
              <File type={type} added={added ?? ""} name={name} />
            )}
          </li>
        ))}
      </ul>
    </>
  );
};
