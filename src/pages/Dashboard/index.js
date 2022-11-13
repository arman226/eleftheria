import React from "react";
import Box from "@material-ui/core/Box";
import MuiButton from "../../components/MuiButton";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import InputAdornment from "@material-ui/core/InputAdornment";
import Chip from "@material-ui/core/Chip";
import FaceIcon from "@material-ui/icons/Face";
import DoneIcon from "@material-ui/icons/Done";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import confucius from "../../images/confucius-meme.jpg";

const categories = [
  { value: "facts", icon: <FaceIcon /> },
  { value: "funny", icon: <DoneIcon /> },
  { value: "meme", icon: <FavoriteIcon /> },
];

const imageList = [{ imageSrc: confucius }];

const Dashboard = () => {
  return (
    <Box style={{ width: "100%" }}>
      <Box
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <MuiButton
          disableFocusRipple={true}
          size="large"
          title={`Hello, ${"Madua focka"}`}
          style={{ fontSize: "1rem", width: "250px" }}
        />
        <h1 style={{ fontSize: "4rem", fontFamily: "Cedarville Cursive" }}>
          Elf
        </h1>
        <TextField
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          size="medium"
          id="standard-basic"
          placeholder="search elf"
          style={{ width: "200px" }}
        />
      </Box>
      <Box style={{ width: "60%", margin: "50px auto 0" }}>
        <TextField variant="filled" fullWidth placeholder="CREATE A POST :-)" />
      </Box>
      <Box style={{ width: "60%", margin: "50px auto" }}>
        <Box style={{ width: "40%" }}>
          {categories.map((categ) => {
            return (
              <Chip
                icon={categ.icon}
                label={categ.value}
                variant="outlined"
                style={{ margin: "4px 4px" }}
              />
            );
          })}
        </Box>
        <Box
          style={{
            width: "100%",
            margin: "10px auto 0",
            padding: "10px",
            backgroundColor: "#F8EDE3",
            borderRadius: "5px",
            textAlign: "center",
          }}
        >
          <Box
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Box style={{ display: "flex-row", textAlign: "left" }}>
              <h6>Nick</h6>
              <p>000xx4joas82fsdd2</p>
            </Box>
            <Box
              style={{
                display: "flex",
                width: "100%",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <h5>Nick</h5>
            </Box>
          </Box>
          <img style={{ width: "800px" }} src={confucius} alt="confucius" />
        </Box>
        <ButtonGroup
          fullWidth
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
          variant="contained"
          color="primary"
          aria-label="contained primary button group"
        >
          <Button style={{ backgroundColor: "#3AB0FF" }}>One</Button>
          <Button style={{ backgroundColor: "#3AB0FF" }}>Two</Button>
          <Button style={{ backgroundColor: "#3AB0FF" }}>Three</Button>
        </ButtonGroup>
      </Box>
    </Box>
  );
};

export default Dashboard;
