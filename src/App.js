import { categories } from "./utils/dummy";
import "./categories.styles.scss";
import CategoryItem from "./components/category-item/category-item.component";

const App = () => {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <CategoryItem category={category} />
      ))}
    </div>
  );
};

export default App;
