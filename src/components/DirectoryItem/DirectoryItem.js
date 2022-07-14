import {
  DirectoryBodyContainer,
  DirectoryItemContainer,
} from "./DirectoryItemStyles";

export default function CategoryItem({ imageUrl, title }) {
  return (
    <DirectoryItemContainer>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <DirectoryBodyContainer>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </DirectoryBodyContainer>
    </DirectoryItemContainer>
  );
}
