import { Box } from "@material-ui/core";
import React, { useState } from "react";
import MuiButton from "../../components/MuiButton";
import TextField from "@material-ui/core/TextField";
import CheckIcon from "@material-ui/icons/Check";

const CHOICES = [
  { value: "Politics" },
  { value: "Religion" },
  { value: "Feminism" },
  { value: "Photography" },
  { value: "Greek Mythology" },
  { value: "Music" },
];
const Signup = () => {
  const [toggledItem, setToggledItem] = useState([]);
  const [name, setName] = useState("");

  function selectItem(item) {
    const match = toggledItem.find((element) => element === item);

    if (match) {
      const filter = toggledItem.filter((element) => element !== item);
      setToggledItem(filter);
    } else {
      setToggledItem([...toggledItem, item]);
    }
  }

  return (
    <Box style={{ textAlign: "center", width: "100%", alignItems: "center" }}>
      <TextField
        placeholder="Enter Your Nickname"
        onChange={(e) => setName(e.target.value)}
        size="small"
        inputProps={{
          style: {
            fontSize: "20px",
            textAlign: "center",
            color: "#0D4C92",
            fontWeight: 900,
          },
        }}
        style={{
          width: "300px",
          margin: "10px auto",
        }}
      />
      <Box style={{ margin: "50px auto", width: "100%" }}>
        <h4>What are the things that you find Interesting?</h4>
        <Box
          style={{
            width: "60%",
            display: "grid",
            gridTemplateColumns: "auto auto auto",
            margin: "40px auto",
          }}
        >
          {CHOICES.map((choice, index) => {
            const match = toggledItem.find(
              (element) => element === choice.value
            );
            return (
              <MuiButton
                key={index}
                title={choice.value}
                onClick={() => {
                  selectItem(choice.value);
                }}
                endIcon={match ? <CheckIcon /> : null}
                size="large"
                variant="contained"
                style={{
                  backgroundColor: match ? "#3AB0FF" : null,
                  fontWeight: match ? 900 : null,
                  width: "250px",
                  borderRadius: "15px",
                  margin: "10px",
                }}
              />
            );
          })}
        </Box>
        <Box style={{ margin: "70px auto 0" }}>
          <MuiButton
            title={"Confirm"}
            onClick={() => {}}
            size="large"
            variant="contained"
            disabled={name === "" || toggledItem.length === 0 ? true : false}
            style={{
              backgroundColor:
                name === "" || toggledItem.length === 0 ? null : "#0D4C92",
              color: "white",
              width: "200px",
              borderRadius: "15px",
              margin: "10px",
            }}
          />
          <MuiButton
            title={"Setup Later"}
            onClick={() => {}}
            size="large"
            variant="outlined"
            style={{
              width: "200px",
              borderRadius: "15px",
              margin: "10px",
            }}
          />
        </Box>
      </Box>
      <br />
    </Box>
  );
};

export default Signup;
