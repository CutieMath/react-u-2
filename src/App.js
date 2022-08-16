import { categories } from "./utils/dummy";
import "./categories.styles.scss";

const App = () => {
  return (
    <div className="categories-container">
      {categories.map(({ id, title, imageUrl }) => (
        <div key={id} className="category-container">
          <div
            className="background-image"
            style={{ backgroundImage: `url(${imageUrl})` }}
          />
          <div className="category-body-container">
            <h2>{title}</h2>
            <p>Read more</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
