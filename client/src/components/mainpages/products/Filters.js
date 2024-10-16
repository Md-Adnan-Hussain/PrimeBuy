import React, { useContext } from "react";
import { GlobalState } from "../../../GlobalState";

function Filters() {
  const state = useContext(GlobalState);
  const [categories] = state.categoriesAPI.categories;

  const [category, setCategory] = state.productsAPI.category;
  const [sort, setSort] = state.productsAPI.sort;
  const [search, setSearch] = state.productsAPI.search;

  const handleCategory = (e) => {
    setCategory(e.target.value);
    setSearch("");
  };

  return (
    <div className="filter_menu">
      <div className="row">
        <div className="row sort">
          <span>Sort By: </span>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            style={{ borderRadius: "0.5rem" }}
          >
            <option value="">Newest</option>
            <option value="sort=oldest">Oldest</option>
            <option value="sort=-sold">Best sales</option>
            <option value="sort=-price">Price: Hight-Low</option>
            <option value="sort=price">Price: Low-Hight</option>
          </select>
        </div>
      </div>

      <input
        type="text"
        value={search}
        placeholder="Enter your search!"
        onChange={(e) => setSearch(e.target.value.toLowerCase())}
        style={{ borderRadius: "0.5rem" }}
      />

      <span>Filters: &nbsp;</span>
      <select
        name="category"
        value={category}
        onChange={handleCategory}
        style={{ borderRadius: "0.5rem" }}
      >
        <option value="">All Products</option>
        {categories.map((category) => (
          <option value={"category=" + category._id} key={category._id}>
            {category.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Filters;
