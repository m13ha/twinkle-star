import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { useAppContext } from "../context/app-context";
import ImgMediaCard from "./StarCard";

const StarModal = () => {
  const { activeStarInfo, isModalOpened, closeModal } = useAppContext();
  const { type, variability, examples, description } = activeStarInfo;

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "90%",
    minWidth: "300px",
    flexWrap: "wrap",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div>
      <Modal
        open={isModalOpened}
        onClose={closeModal}
        aria-labelledby={type}
        aria-describedby="modal-modal-description"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Box sx={style}>
          <ImgMediaCard props={{type, variability, examples, description}} />
        </Box>
      </Modal>
    </div>
  );
};

export default StarModal;
