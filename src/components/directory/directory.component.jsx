import CategoryItem from "../category-item/category-item.component";
import "./directory.styles.scss";

const Directory = ({ categories }) => {
  return (
    <div className="directories-container">
      {categories.map((category) => {
        //* key not in the components actually call the map! here
        return <CategoryItem key={category.id} category={category} />;
      })}
    </div>
  );
};

export default Directory;
