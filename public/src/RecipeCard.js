import React from 'react';

function RecipeCard({ recipe }) {
  return (
    <div className="recipe-card">
      <h2>{recipe.title}</h2>
      <img src={recipe.imageUrl} alt={recipe.title} />
      <p>{recipe.description}</p>
    </div>
  );
}

export default RecipeCard;
