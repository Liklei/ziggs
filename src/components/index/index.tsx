import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useDebounce } from "ahooks";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  selectCount,
} from "../../store/features/counterSlice";

import "./index.css";

export default function Index() {
  const [value, setValue] = useState<string>();
  const debouncedValue = useDebounce(value, { wait: 500 });

  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  return (
    <div className="index">
      <div className="mb-[15px]">
        <Card sx={{ maxWidth: 345, maxHeight: 320 }}>
          <CardMedia
            sx={{ height: 140 }}
            image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">分享</Button>
            <Button size="small">了解更多</Button>
          </CardActions>
        </Card>
      </div>
      <div className="mb-[15px]">
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </Box>
        <p>DebouncedValue: {debouncedValue}</p>
      </div>
      <div>
        <p>{count}</p>
        <Button className="mr-[15px] cursor-pointer" variant="contained" onClick={() => dispatch(decrement())}>-</Button>
        <Button className="cursor-pointer" variant="contained" onClick={() => dispatch(increment())}>+</Button>
      </div>
    </div>
  );
}
