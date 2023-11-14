import { useState } from "react";
import { Icons } from "./icons";
import { Folder } from "../types/Common.type";
import { File } from "./file";

export const FolderAccordion = ({ files, name }: Folder) => {
  const [activeFolder, setActiveFolder] = useState<string | undefined>();
  const isActiveFolder = activeFolder === name;

  return (
    <>
      <button
        className="flex gap-1"
        onClick={() => setActiveFolder(activeFolder ? undefined : name)}
        aria-expanded={isActiveFolder}
      >
        <Icons.Accordion
          className={`transition-transform duration-200 transform-gpu ${
            activeFolder ? "" : "-rotate-90"
          }`}
        />
        {Icons.folder}
        <p>{name}</p>
      </button>

      {isActiveFolder && (
        <ul className="flex flex-col gap-y-1 mt-2">
          {files?.map(({ name, added, type }, index) => (
            <File
              additionalClassName="ml-14"
              type={type}
              added={added}
              name={name}
            />
          ))}
        </ul>
      )}
    </>
  );
};
