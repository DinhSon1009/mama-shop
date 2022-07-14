import DirectoryItem from "../DirectoryItem/DirectoryItem";
import { DirectoryContainer } from "./DirectoryStyles";
import directories from "../../data/categories.json";
export default function Directory() {
  return (
    <DirectoryContainer>
      {directories.map((directory) => (
        <DirectoryItem key={directory.id} directory={directory} />
      ))}
    </DirectoryContainer>
  );
}
