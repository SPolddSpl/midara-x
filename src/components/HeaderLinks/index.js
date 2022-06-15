import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { HexagonOutlined } from "@mui/icons-material";
import { Routes, useNavigate } from "react-router-dom";

const links = [
  {
    name: "Комплектующие",
    icon: <HexagonOutlined />,
    routeName: "/parts",
  },
  {
    name: "Контакты",
    icon: <HexagonOutlined />,
    routeName: "/contacts",
  },
];

export default function HeaderLinks() {
  const navigate = useNavigate();

  const navToRoute = (routeName) => {
    navigate(routeName, { replace: false });
  };
  return (
    <List>
      {links.map((item, index) => (
        <ListItem
          onClick={(e) => {
            e.preventDefault();
            navToRoute(item.routeName);
          }}
          key={index}
          disablePadding
        >
          <ListItemButton>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.name} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
}
