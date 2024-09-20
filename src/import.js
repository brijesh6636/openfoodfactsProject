
//imports from component
import Header from "./components/Header";
import { ErrorBoundary } from "./components/ErrorBoundary";
import HomePage from "./components/HomePage";
import ProductCard from "./components/ProductCard";
import BarcodeSearch from "./components/BarCodeSearch";
import ProductDetailsDisplay from "./components/ProductDetailsDisplay";

//import from pages

import Error from "./pages/Error";
import AboutMe from "./pages/AboutMe";
import { Shimmer } from "./pages/Shimmer";
import CategoryFilter from "./pages/CategoryFilter";
import SortFilter from "./pages/SortFilter";



export  { HomePage , ProductCard , BarcodeSearch , ProductDetailsDisplay
    , Header , ErrorBoundary , Error , AboutMe , Shimmer , CategoryFilter , SortFilter };