
//imports from component
import Header from "./components/Header";
import { ErrorBoundary } from "./components/ErrorBoundary";
import HomePage from "./components/HomePage";
import ProductCard from "./components/ProductCard";
import BarcodeSearch from "./components/BarCodeSearch";
import ProductDetailsDisplay from "./components/ProductDetailsDisplay";
import NoInternetConnection from "./components/NoInternetConnection";

//import from pages

import Error from "./pages/Error";
import AboutMe from "./pages/AboutMe";
import { Shimmer } from "./pages/Shimmer";
import CategoryFilter from "./pages/CategoryFilter";
import SortFilter from "./pages/SortFilter";
import { ShimmerLoader } from "./pages/ProductShimeer";
import { NoProductFound } from "./pages/ProductShimeer";


export  { HomePage , ProductCard , BarcodeSearch , ProductDetailsDisplay , NoInternetConnection
    , Header , ErrorBoundary , Error , AboutMe , Shimmer , CategoryFilter , SortFilter , NoProductFound , ShimmerLoader  };