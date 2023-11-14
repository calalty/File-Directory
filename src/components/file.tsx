import { FileProps } from "../types/Common.type";
import { Icons } from "./icons";

const formatFileName = (name: string, type: string) => {
  const formattedFileName = name.toLowerCase().replace(/\s+/g, "-");
  return `${formattedFileName}.${type}`;
};

export const File = ({
  name,
  added,
  type,
  additionalClassName,
}: FileProps & { additionalClassName?: string }) => (
  <li className={`flex gap-1 ${additionalClassName}`}>
    {Icons.file}
    <p>{formatFileName(name, type)}</p>
    <p>{added}</p>
  </li>
);
