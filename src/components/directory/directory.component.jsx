// import CategoryItem from "../category-item/category-item.component";
import DirectoryItem from "../directory-item/directory-item.component";

import { DirectoriesContainer } from "./directory.styles";
// import "./directory.styles.scss";

const Directory = ({ categories }) => {
  return (
    <DirectoriesContainer>
      {categories.map((category) => {
        //* key not in the components actually call the map! here
        // return <CategoryItem key={category.id} category={category} />;
        return <DirectoryItem key={category.id} category={category} />;
      })}
    </DirectoriesContainer>
  );
};

export default Directory;
