import { useState } from "react";

const GiftExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  const handleAddCategory = () => {
    setCategories([...categories, "GTA"]);
  };

  return (
    <>
      <h1>GiftExpertApp</h1>

      <button onClick={handleAddCategory}>Add</button>
      <ol>
        {categories.map((categorie, index) => (
          <li key={`categorie-${index}`}>{categorie}</li>
        ))}
      </ol>
    </>
  );
};

export default GiftExpertApp;
