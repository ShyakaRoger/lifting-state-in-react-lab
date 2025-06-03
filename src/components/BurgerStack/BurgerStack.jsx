const BurgerStack = (props) => {
  return (
    <div className="burger-stack">
      <h2>Your Burger</h2>
      {props.stack.length === 0 ? (
        <p>No ingredients added yet</p>
      ) : (
        <ul>
          {props.stack.map((ingredient, index) => (
            <li key={index} style={{ backgroundColor: ingredient.color }}>
              {ingredient.name}
              <button 
                onClick={() => props.removeFromBurger(index)}
                className="remove-btn"
              >
                ×
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BurgerStack;