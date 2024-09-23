//import.js

import { lazy } from "react";
//imports from component
import Header from "./components/Header";
import { ErrorBoundary } from "./components/ErrorBoundary";
import HomePage from "./components/HomePage";
import ProductCard from "./components/ProductCard";
import BarcodeSearch from "./components/BarCodeSearch";
import ProductDetailsDisplay from "./components/ProductDetailsDisplay";
import NoInternetConnection from "./components/NoInternetConnection";
import Cart from "./components/Cart";

//import from pages


import { Shimmer } from "./pages/Shimmer";
import CategoryFilter from "./pages/CategoryFilter";
import SortFilter from "./pages/SortFilter";
import { ShimmerLoader } from "./pages/ProductShimeer";
import { NoProductFound } from "./pages/ProductShimeer";
const Error = lazy(() => import("./pages/Error"))
const CartItem = lazy(() => import("./pages/CartItem"))
const AboutMe = lazy(() => import("./pages/AboutMe"));


export {
    HomePage, ProductCard, BarcodeSearch, ProductDetailsDisplay, NoInternetConnection, Cart
    , Header, ErrorBoundary, Error, AboutMe, Shimmer, CategoryFilter, SortFilter, NoProductFound, ShimmerLoader, CartItem
};