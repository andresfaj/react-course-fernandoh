import { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const GiftExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch", "Rick and morty"]);

  const handleAddCategory = (newCategory) => {
    if (!categories.includes(newCategory)) {
      setCategories([newCategory, ...categories]);
    }
  };

  return (
    <>
      <h1>GiftExpertApp</h1>

      <AddCategory
        // onAddCategory={setCategories}
        onNewCategory={handleAddCategory}
      />

      {/* <button onClick={handleAddCategory}>Add</button> */}

      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
};

export default GiftExpertApp;
