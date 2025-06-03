const IngredientList = (props) => {
  return (
    <div className="ingredient-list">
      <h2>Available Ingredients</h2>
      <ul>
        {props.availableIngredients.map((ingredient, index) => (
          <li key={index} style={{ backgroundColor: ingredient.color }}>
            {ingredient.name}
            <button 
              onClick={() => props.addToBurger(ingredient)}
              className="add-btn"
            >
              +
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IngredientList;