import DirectoryItem from "../DirectoryItem/DirectoryItem";
import { DirectoryContainer } from "./DirectoryStyles";
export default function Directory({ categories }) {
  return (
    <DirectoryContainer>
      {categories.map(({ title, id, imageUrl }) => (
        <DirectoryItem key={id} title={title} imageUrl={imageUrl} />
      ))}
    </DirectoryContainer>
  );
}
