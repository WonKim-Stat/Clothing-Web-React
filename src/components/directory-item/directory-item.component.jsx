// import "./directory-item.styles.jsx";

import {
  DirectoryItemContainer,
  BackgroundImage,
  Body,
} from "./directory-item.styles";

const DirectoryItem = ({ category }) => {
  const { imageUrl, title } = category;
  return (
    // <div className="category-container" key={id}> move key into part calling map function
    <DirectoryItemContainer>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
