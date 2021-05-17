import "./App.scss";
import React, { Suspense, useEffect, useState } from "react";
import { BrowserRouter, Route, Switch, Redirect, Link } from "react-router-dom";
import NotFound from "./components/NotFound";
import Header from "./components/Header";
import productApi from "api/productApi";

//lazy load - code splitting
const Photo = React.lazy(() => import("./features/Photo"));

function App() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const fetchProductList = async () => {
      try {

        const params = {
          _page :1,
          _limit :10
        }
        const response = await productApi.getAll(params);
        console.log(response);
        setProductList(response.data);
      } catch (error) {
        console.log("Failed to fectch ~~~~ ", error);
      }
    };
    fetchProductList();
  }, []);

  return (
    <div className="photo-app">
      <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          <Header />

          {/* <ul>
            <li>
              <Link to="/photos">Go to photo page</Link>
            </li>
            <li>
              <Link to="/photos/add">Go to add a new photo</Link>
            </li>
            <li>
              <Link to="/photos/123">Go to edit photo page</Link>
            </li>
          </ul> */}

          <Switch>
            <Redirect exact from="/" to="/photos" />

            <Route path="/photos" component={Photo} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
