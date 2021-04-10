import React, { useEffect, useState } from "react";
import "firebase/database";
import { db } from "../firebase";
import styled from "styled-components";

function List() {
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
      {data.map((item) => {
        return (
          <Container key={item.property_id}>
            <img src={item.primary_photo} alt="property" />
            <Type>{item.description.type}</Type>
            <Bedrooms>{item.description.beds}</Bedrooms>
            <Bathrooms>{item.description.baths}</Bathrooms>
            <Year>{item.description.sqft}</Year>
            <SquareFoot>{item.description.year_built}</SquareFoot>
          </Container>
        );
      })}
    </>
  );
}

export default List;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 100;
`;

const Type = styled.div``;

const Bedrooms = styled.div``;

const Bathrooms = styled.div``;

const Year = styled.div``;

const SquareFoot = styled.div``;
