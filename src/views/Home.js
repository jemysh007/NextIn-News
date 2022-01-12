import React from "react";
import CommanNews from "../components/CommanNews";
// import EditorsChoice from "../components/EditorsChoice";
import MostRecentNews from "../components/MostRecentNews";
// import PopularNews from "../components/PopularNews";
// import WorldNews from "../components/WorldNews";
import MainLayout from "./MainLayout";

export default function Home(props) {
  document.title = "Home | NextIn News";
  return (
    <MainLayout>
      <MostRecentNews />
      {/* <WorldNews />
        <PopularNews />
        <EditorsChoice /> */}
      <CommanNews
        key={"Business extra"}
        category={"business"}
        title={"Business"}
        limit={6}
        setProgress={props.setProgress}
      />
      <CommanNews
        key={"Entertainment extra"}
        category={"entertainment"}
        title={"Entertainment"}
        setProgress={props.setProgress}
        limit={6}
      />
      <CommanNews
        key={"Technology extra"}
        category={"technology"}
        title={"Technology"}
        setProgress={props.setProgress}
        limit={6}
      />
    </MainLayout>
  );
}
