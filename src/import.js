
//imports from component
import Header from "./components/Header";
import { ErrorBoundary } from "./components/ErrorBoundary";
import HomePage from "./components/HomePage";
import ProductCard from "./components/ProductCard";
import BarcodeSearch from "./components/BarCodeSearch";

//import from pages

import Error from "./pages/Error";
import AboutMe from "./pages/AboutMe";
import { Shimmer } from "./pages/Shimmer";

export  { HomePage , ProductCard , BarcodeSearch
    , Header , ErrorBoundary , Error , AboutMe , Shimmer};