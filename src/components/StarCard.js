import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import cepheid from "../resources/images/Cepheid_animation_1.gif"
import binary from "../resources/images/Eclipsing-binary.gif"
import transit from "../resources/images/planetary-transit.gif"
import supernova from "../resources/images/supernova.gif"
import dwarf from "../resources/images/dwarf-nova.gif";


const ImgMediaCard = ({ props }) => {
  const { type, variability, description } = props;

  const typeGif = () => {
    switch (type) {
      case "Planetary transiting variable stars":
        return transit;
        break;
      case "Cepheid Variables":
        return cepheid;
        break;
      case "Dwarf Nova (Cataclysmic Variables)":
        return dwarf;
        break;
      case "Classical Nova (Cataclysmic Variables)":
        return supernova;
        break;
      case "Eclipsing binary":
        return binary;
        break;
      default:
        break;
    }
  }

  return (
    <Card
      sx={{
        width: "80%",
        minWidth: "300px",
        maxWidth: "500px",
        fontSize: 16,
        background: "linear-gradient(to top, #283E51, #0A2342)",
      }}
      color="dark"
    >
      <CardContent>
        <CardMedia component="img" alt="green iguana" height="250" image={typeGif()} />
        <Typography variant="h5" component="p" color="#eff">
          {type}
        </Typography>
        <Typography variant="h6" color="#eff">
          {variability}
        </Typography>
        <Typography variant="body2" color="#eff">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default ImgMediaCard;
