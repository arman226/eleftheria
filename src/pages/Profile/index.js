import React from "react";
import Box from "@material-ui/core/Box";
import imagePlaceholder from "../../images/image_placeholder.jpg";

const Profile = () => {
  return (
    <Box style={{ width: "100%", height: "100vh", margin: "20px" }}>
      <Box style={{ width: "100%", height: "100vh" }}>
        <img
          src={imagePlaceholder}
          alt="placeholder"
          style={{ width: "100%" }}
        />
      </Box>
    </Box>
  );
};

export default Profile;
