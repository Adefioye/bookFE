import { Box, Typography, Paper, Divider } from "@mui/material";
import book1 from "./../../../Images/BooksImages/new-book-1.png";

import Ratings from "./Ratings";
import CheckoutAndReviewBox from "./CheckoutAndReviewBox";

const BookInfo = () => {
  return (
    <Box sx={{ display: "flex", py: "2em" }}>
      <Box sx={{ flex: "1 0 25%" }}>
        <img src={book1} alt="book image" width="70%" />
      </Box>
      <Box sx={{ flex: "1 0 40%" }}>
        <Box>
          <Typography variant="h4" mb="0.2em">
            Javascript Cookbook
          </Typography>
          <Typography variant="h6" color="primary" mb="0.2em">
            Luv, Sofia
          </Typography>
          <Typography variant="subtitle1" mb="0.2em">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio vitae
            aperiam nemo nulla dignissimos eum. Provident voluptatibus sed
            impedit exercitationem earum? Perferendis voluptas accusamus rem
            inventore assumenda! Nisi, non. Tempore. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Consequuntur, possimus error culpa
            vero dolorum perspiciatis voluptas eveniet qui recusandae, dolores
            quasi rerum quae. Iure a cum eius veritatis sequi eveniet. Lorem,
            ipsum dolor sit amet consectetur adipisicing elit. Illo, blanditiis
            architecto adipisci minus officia nesciunt amet! Minus,
            exercitationem soluta. Doloremque vitae rem atque id assumenda
            accusamus voluptas iste accusantium eum?
          </Typography>
          <Ratings />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flex: "1 0 35%",
        }}
      >
        <CheckoutAndReviewBox />
      </Box>
    </Box>
  );
};

export default BookInfo;
