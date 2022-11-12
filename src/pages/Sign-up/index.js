import { Box, Input } from "@material-ui/core";
import React from "react";

const CHOICES = [
  "Politics",
  "Religion",
  "Feminism",
  "Photography",
  "Greek Mythology",
  "Music",
];
const Signup = () => {
  return (
    <Box style={{ textAlign: "center" }}>
      <Input placeholder="Type Nickname..." />
      <br />
      <br />
      <>What are the things that you find Internesting?</>

      <br />
    </Box>
  );
};

export default Signup;
