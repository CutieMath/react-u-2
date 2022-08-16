import { categories } from "./utils/dummy";
import "./categories.styles.scss";
import CategoryItem from "./components/category-item/category-item.component";

const App = () => {
  return (
    <div className="categories-container">
      {categories.map(({ id, title, imageUrl }) => (
        <CategoryItem key={id} title={title} imageUrl={imageUrl} />
      ))}
    </div>
  );
};

export default App;
