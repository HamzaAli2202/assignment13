import React, { useState } from "react";
import { Card, CardContent, Typography, Grid } from "@mui/material";

export const Fruits = () => {
  const [data, setData] = useState([
    "Apple",
    "Mango",
    "Banana",
    "Orange",
    "Kiwi",
    "Cherry",
  ]);
  return (
    <Card
      sx={{
        height: "200px",
        fontWeight: "bold",
        fontSize: 20,
        textAlign: "center",
        marginBottom: 5,
      }}
    >
      <CardContent>
        <Typography variant="h5" color="red" fontWeight="bold">
          Fruits Name
        </Typography>
        <Grid container spacing={2}>
          {data.map((item) => (
            <Grid sx={{ marginTop: "80px" }} item xs={2}>
              {item}
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
};
