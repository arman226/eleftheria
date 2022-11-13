import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import MuiButton from "../../components/MuiButton";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import InputAdornment from "@material-ui/core/InputAdornment";
import Chip from "@material-ui/core/Chip";
import FaceIcon from "@material-ui/icons/Face";
import DoneIcon from "@material-ui/icons/Done";
import ShareIcon from "@material-ui/icons/Share";
import CommentIcon from "@material-ui/icons/Comment";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoodIcon from "@material-ui/icons/Mood";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import confucius from "../../images/confucius-meme.jpg";
import PhotoCamera from "@material-ui/icons/PhotoCamera";

const postDatas = [
  {
    image: confucius,
    category: [
      { value: "facts", icon: <FaceIcon /> },
      { value: "funny", icon: <DoneIcon /> },
      { value: "meme", icon: <FavoriteIcon /> },
    ],
    content: "",
    post_owner: "Nick",
    wallet_address: "1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX",
    post_title: "Confucius daily meme heehee",
  },
];

export const Posts = () =>
  postDatas.map((data) => {
    return (
      <Box style={{ width: "60%", margin: "50px auto" }}>
        <Box style={{ width: "40%" }}>
          {data.category.map((categ) => {
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
            backgroundColor: "#F8EDE3",
            borderRadius: "5px",
            textAlign: "center",
            border: "5px solid #3AB0FF",
          }}
        >
          <Box
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Box
              style={{
                display: "flex-row",
                textAlign: "left",
                borderBottom: "2px solid #3AB0FF",
                borderRight: "3px solid #3AB0FF",
                padding: "5px 5px 0",
                width: "400px",
              }}
            >
              <h6>{data.post_owner}</h6>
              <p style={{ fontSize: "12px" }}>
                Wallet Address: <br />
                {data.wallet_address}
              </p>
            </Box>
            <Box
              style={{
                display: "flex",
                width: "100%",
                alignItems: "center",
                textAlign: "center",
                padding: "0 30px",
                borderBottom: "2px solid #3AB0FF",
              }}
            >
              <h5>{data.post_title}</h5>
            </Box>
          </Box>
          <img style={{ width: "800px" }} src={data.image} alt="confucius" />
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
          <MuiButton
            startIcon={<EmojiEmotionsIcon />}
            style={{ backgroundColor: "#3AB0FF" }}
          />
          <MuiButton
            startIcon={<CommentIcon />}
            style={{ backgroundColor: "#3AB0FF" }}
          />
          <MuiButton
            startIcon={<ShareIcon />}
            style={{ backgroundColor: "#3AB0FF" }}
          />
        </ButtonGroup>
      </Box>
    );
  });

const Dashboard = () => {
  const [postTitle, setPostTitle] = useState("");
  const [content, setContent] = useState("");
  const [postImage, setPostImage] = useState("");
  const [category, setCategory] = useState({
    value: "Random",
    icon: <MoodIcon />,
  });

  const createPost = () => {
    let formData = new FormData();
    formData.append("post_title", postTitle);
    formData.append("category", content);
    formData.append("image", postImage);
    formData.append("category", category);
    formData.append("wallet_address", "1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX");
    formData.append("post_owner", "Midoriya");

    postDatas.push(formData);
  };

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
      <Box
        style={{
          width: "60%",
          margin: "50px auto 0",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <TextField
          variant="filled"
          size="small"
          fullWidth
          placeholder="Title"
          onChange={(e) => setPostTitle(e.target.value)}
        />
        <TextField
          variant="filled"
          fullWidth
          placeholder="CREATE A POST :-)"
          onChange={(e) => setContent(e.target.value)}
        />
        <Box
          style={{ width: "100%", display: "flex", justifyContent: "flex-end" }}
        >
          <p
            style={{
              margin: "0",
              padding: "2px",
              display: postImage ? null : "none",
            }}
          >
            path: {postImage}
          </p>
          <input
            accept="image/*"
            id="icon-button-file"
            type="file"
            style={{ display: "none" }}
            onChange={(e) => setPostImage(e.target.value)}
          />
          <label
            htmlFor="icon-button-file"
            style={{ margin: "0", padding: "0" }}
          >
            <MuiButton
              title={"Upload"}
              variant="outlined"
              startIcon={<PhotoCamera />}
              disableElevation={false}
              component="span"
              style={{
                backgroundColor: "#3AB0FF",
                color: "white",
                borderRadius: "0 0 0 10px",
              }}
            />
          </label>
          <MuiButton
            title={"POST"}
            variant="outlined"
            onClick={createPost}
            disableElevation={true}
            style={{
              width: "130px",
              backgroundColor: "#3AB0FF",
              color: "white",
              borderRadius: "0 0 10px 0",
            }}
          />
        </Box>
      </Box>

      {/* Posts starts here */}
      <Posts />
    </Box>
  );
};

export default Dashboard;
