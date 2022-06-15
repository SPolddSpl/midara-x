import {
  List,
  ListItem,
  Avatar,
  ListItemAvatar,
  ListItemText,
  Paper,
  TextField,
  Button,
  Snackbar,
  Alert,
} from "@mui/material";
import { Facebook, Instagram, Phone } from "@mui/icons-material";
import { Box } from "@mui/system";
import { useState } from "react";

const links = [
  {
    name: "Instagram",
    icon: <Instagram />,
    link: "https://instagram.com",
  },
  {
    name: "FaceBook",
    icon: <Facebook />,
    link: "https://facebook.com",
  },
  {
    name: "Phone",
    icon: <Phone />,
    link: "tel:7123123123",
  },
];

export default function Contacts() {
  const [formValue, setFormValue] = useState({
    phone: "",
    name: "",
    description: "",
  });
  const [state, setState] = useState({
    open: false,
  });

  const { open } = state;

  const handleClick = (newState) => () => {
    if (!Object.keys(formValue).every((key) => formValue[key])) {
      return;
    }
    setState({ open: true, ...newState });
    setTimeout(() => {
      setFormValue({ name: "", phone: "", description: "" });
    }, 1500);
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  const handleChange = (event) => {
    setFormValue({ ...formValue, [event.target.name]: event.target.value });
  };

  return (
    <>
      <Box>
        <Paper>
          <Box sx={{ display: "flex" }}>
            <Box sx={{ width: "50%", padding: "1em" }}>
              <List sx={{ width: "100%" }}>
                {links.map((item) => {
                  return (
                    <ListItem
                      key={item.name}
                      sx={{
                        cursor: "pointer",
                      }}
                      onClick={(e) => {
                        e.preventDefault();
                        window.open(item.link, "_blank");
                      }}
                    >
                      <ListItemAvatar>
                        <Avatar>{item.icon}</Avatar>
                      </ListItemAvatar>
                      <ListItemText primary={item.name} />
                    </ListItem>
                  );
                })}
              </List>
            </Box>
            <Box
              component="form"
              sx={{
                display: "flex",
                width: "50%",
                flexDirection: "column",
                gap: "1em",
                padding: "1em",
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="outlined-multiline-flexible"
                label="Имя"
                name="name"
                value={formValue.name}
                onChange={handleChange}
              />
              <TextField
                id="outlined-multiline-flexible"
                label="Телефон"
                name="phone"
                value={formValue.phone}
                onChange={handleChange}
              />
              <TextField
                id="outlined-multiline-flexible"
                label="Описание"
                multiline
                maxRows={10}
                name="description"
                value={formValue.description}
                onChange={handleChange}
              />
              <Button onClick={handleClick({ open: true })} variant="outlined">
                Отправить
              </Button>
            </Box>
          </Box>
        </Paper>
      </Box>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={open}
        onClose={handleClose}
        key={"asd"}
        autoHideDuration={1500}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Ваша форма отправлена!
        </Alert>
      </Snackbar>
    </>
  );
}
