import { useNavigate } from "react-router-dom";
import {
  DirectoryBodyContainer,
  DirectoryItemContainer,
} from "./DirectoryItemStyles";

export default function DirectoryItem({ directory }) {
  const { route, title, imageUrl } = directory;
  const navigate = useNavigate();
  const onNavigateHandler = () => navigate(route);

  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
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
