import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "firebase/database";
import { db } from "../firebase";
import styled from "styled-components";
import '../card.css'

function Cards() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const homeData = db.ref(
      "props/pageProps/searchResults/home_search/results"
    );
    homeData.on("value", (snapshot) => {
      const data = snapshot.val();
      setData(data);
      console.log(data);
    });
  }, []);

  return (
    <>
      <div className="card-section">
        <Grid>
          {data.map((item) => {
            return (
              <Container key={item.property_id}>
                <Grid item component={Card} xs={12} md={3} className="card">
                  <CardContent>
                    <Typography color="textSecondary" gutterBottom variant="h5">
                      <img src={item.primary_photo} alt="property" />
                    </Typography>
                  </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className="card">
                  <CardContent>
                    <Typography color="textSecondary" gutterBottom variant="h5">
                      {item.description.type}
                    </Typography>
                  </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className="card">
                  <CardContent>
                    <Typography color="textSecondary" gutterBottom variant="h5">
                      {item.description.beds}
                    </Typography>
                  </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className="card">
                  <CardContent>
                    <Typography color="textSecondary" gutterBottom variant="h5">
                      {item.description.baths}
                    </Typography>
                  </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className="card">
                  <CardContent>
                    <Typography color="textSecondary" gutterBottom variant="h5">
                      {item.description.sqft}
                    </Typography>
                  </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className="card">
                  <CardContent>
                    <Typography color="textSecondary" gutterBottom variant="h5">
                      {item.description.year_built}
                    </Typography>
                  </CardContent>
                </Grid>
              </Container>
            );
          })}
        </Grid>
      </div>
    </>
  );
}

export default Cards;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 100;
`;
