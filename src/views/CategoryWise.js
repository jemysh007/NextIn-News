import React from "react";
import CommanNews from "../components/CommanNews";
import EditorsChoice from "../components/EditorsChoice";
import MostRecentNews from "../components/MostRecentNews";
import PopularNews from "../components/PopularNews";
import WorldNews from "../components/WorldNews";
import MainLayout from "./MainLayout";

export default function CategoryWise(props) {
  document.title =
    props.category.charAt(0).toUpperCase() +
    props.category.slice(1) +
    " | NextIn News";
  return (
    <MainLayout>
      <MostRecentNews key={props.category} category={props.category} />
      <CommanNews
        key={props.category + "extra"}
        category={props.category}
        setProgress={props.setProgress}
        title={props.category.charAt(0).toUpperCase() + props.category.slice(1)}
      />
    </MainLayout>
  );
}
