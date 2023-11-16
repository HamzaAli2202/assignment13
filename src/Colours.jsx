import React, { useState } from "react";
import { Grid, Card, CardContent, Typography } from "@mui/material";

export const Colours = () => {
  const [data, setData] = useState(["Yellow", "Skyblue", "Brown", "Green"]);
  return (
    <Card
      sx={{
        height: 250,

        bgcolor: "cadetblue",
        textAlign: "center",
        fontSize: 25,
        fontWeight: "bold",
      }}
    >
      <CardContent>
        <Typography variant="h5" color="white">
          Color's Name
        </Typography>
        <Grid container spacing={2}>
          {data.map((item) => (
            <Grid sx={{ marginTop: "50px" }} item xs={3}>
              <Card sx={{ height: 100 }}>
                <CardContent>{item}</CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
};
