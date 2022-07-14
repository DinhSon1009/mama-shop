import DirectoryItem from "../DirectoryItem/DirectoryItem";
import "./Directory.scss";
export default function Directory({ categories }) {
  return (
    <div className="directory-container">
      {categories.map(({ title, id, imageUrl }) => (
        <DirectoryItem key={id} title={title} imageUrl={imageUrl} />
      ))}
    </div>
  );
}
