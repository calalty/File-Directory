export type Common = {
  type: string;
  name: string;
  added?: string;
};

export type FileProps = Common;

export type Folder = Common & {
  files?: FileProps[];
};

export type FoldersAndFiles = {
  filesAndFolders: (Folder & Common)[];
};
