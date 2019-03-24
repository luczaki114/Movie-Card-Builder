import React from "react";
import Grid from "@material-ui/core/Grid";

import BuilderWrapper from "../../containers/CardsWrappers/BuilderWrapper";
import PreviewWrapper from "../../containers/CardsWrappers/PreviewWrapper";
import HelpersWrapper from "../../containers/CardsWrappers/HelpersWrapper";

function CardTab(props) {
  return (
    <Grid container spacing={24}>
      <Grid item xs={12} sm={8} container>
        <HelpersWrapper />
        <BuilderWrapper />
      </Grid>
      <Grid item xs={12} sm={4}>
        <PreviewWrapper showHeading={true} />
      </Grid>
    </Grid>
  );
}

export default CardTab;
