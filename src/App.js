import "./App.css";
import React, { useEffect } from "react";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import axios from "axios";

function App() {
  const [item, setItem] = React.useState(null);
  const [list, setList] = React.useState(null);
  const [family, setFamily] = React.useState(null);

  // Fetching perfume from the API
  useEffect(fetchData, []);
  function fetchData() {
    axios
      .get("https://quizzical-elbakyan.77-68-115-165.plesk.page/perfumes")
      .then((response) => setList(response.data));
  }
  //Family
  function assignFamily() {
    axios
      .get(
        "https://quizzical-elbakyan.77-68-115-165.plesk.page/graphql?query={perfumes(where:{family:{id:3}}){Name}}"
      )
      .then((response) => setFamily(response.data));
  }
  // Assigns clicked item to the
  function assignItem(chosenItem) {
    setItem(chosenItem);
    assignFamily();
  }
  // Apollo Queries

  return (
    <div>
      <nav class="navbar shadow-lg navbar-dark bg-black">
        <div class="container-fluid">
          <img
            src="logo-dior.jpeg"
            width="100px"
            onClick={() => setItem(null)}
            alt="Dior Logo"
          />
          <h3>{item ? item.Name : null}</h3>
        </div>
      </nav>
      <div class="container-fluid">
        {item ? (
          <ProductDetails product={item} family={family} />
        ) : list ? (
          <ProductList
            onAssignItem={(item) => assignItem(item)}
            products={list}
          />
        ) : (
          <div class="spinner-border text-secondary" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        )}

        {/* <div class="fixed-bottom bottomka d-flex justify-content-center">
          <div class="row items-center">
            <div class="col-6 bottom-menu">
              <img
                src="./images/perfume-icon.png"
                width="100px"
                onClick={() => alert("yo!")}
                alt="Perfume"
              />
            </div>
            <div class="col-6 bottom-menu">
              <img
                src="./images/soap.png"
                width="100px"
                onClick={() => alert("yo!")}
                alt="Perfume"
              />
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default App;
