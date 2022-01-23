import React, { useState } from "react";

import Navigation from "./components/navigation/Navigation";
import Content from "./components/Content/Content";

function MainPage() {
  const [page, setPage] = useState(1);

  const onNavigationClicked = (pageDestination) => {
    setPage(pageDestination);
  };

  return (
    <React.Fragment>
      <Navigation navigationHandler={onNavigationClicked} page={page} />
      <Content page={page} />
    </React.Fragment>
  );
}

export default MainPage;
