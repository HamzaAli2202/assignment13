import React from "react";
import { Card, CardContent } from "@mui/material";
import { Fruits } from "./Fruits";
import { Colours } from "./Colours";
function App() {
  return (
    <Card sx={{ bgcolor: "lightsalmon" }}>
      <CardContent>
        <Fruits />
        <Colours />
      </CardContent>
    </Card>
  );
}

export default App;
