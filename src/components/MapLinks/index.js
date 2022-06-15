import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Divider,
  IconButton,
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
  Link,
} from "@mui/material";
import { ChevronRight, ExpandMore } from "@mui/icons-material";
import React from "react";
import { Box } from "@mui/system";

const links = [
  {
    link: "https://www.dns-shop.ru/",
    shopName: "DNS",
    icon: "./assets/img/dns.png",
    branchs: [
      {
        link: "https://2gis.ru/nizhnevartovsk/branches/1689386731287729/firm/70000001036307265/76.547196%2C60.940879",
        address: "​Кузоваткина, 17",
      },
      {
        link: "https://2gis.ru/nizhnevartovsk/branches/1689386731287729/firm/70000001041960082/76.598257%2C60.932226",
        address: "Дружбы Народов, 23",
      },
      {
        link: "https://2gis.ru/nizhnevartovsk/branches/1689386731287729/firm/70000001044354348/76.556406%2C60.939087",
        address: "​МФК Green Park ​Ленина, 8 ​1 этаж",
      },
      {
        link: "https://2gis.ru/nizhnevartovsk/branches/1689386731287729/firm/70000001020290790/76.598161%2C60.93927",
        address: "МК Европа-Сити Чапаева, 27​ 1 этаж",
      },
    ],
  },
  {
    link: "https://www.mvideo.ru/",
    shopName: "М.Видео",
    icon: "./assets/img/mvideo.jpg",
    branchs: [
      {
        link: "https://2gis.ru/nizhnevartovsk/branches/1689386731215936/firm/1689379141523337/76.598342%2C60.939715",
        address: "​МК Европа-Сити​Чапаева, 27 ​2 этаж",
      },
      {
        link: "https://2gis.ru/nizhnevartovsk/branches/1689386731215936/firm/1689378141291630/76.591022%2C60.934029",
        address: "​Каньон​ Ленина, 44​ 2 этаж",
      },
      {
        link: "https://2gis.ru/nizhnevartovsk/branches/1689386731215936/firm/1689378141290546/76.545709%2C60.941309",
        address: "​ТРЦ Югра Молл​Ленина, 15п​ 3 этаж",
      },
    ],
  },
];

export default function MapLinks() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <List sx={{ width: "100%", padding: "1em" }}>
      {links.map((shop, i) => {
        return (
          <React.Fragment key={i}>
            <Accordion
              expanded={expanded === `panel${i}`}
              onChange={handleChange(`panel${i}`)}
              prefix={<ChevronRight />}
            >
              <AccordionSummary
                expandIcon={<ExpandMore />}
                aria-controls={`panel${i}bh-content`}
                id={`panel${i}bh-header`}
              >
                <Box sx={{ width: "15%" }}>
                  <Avatar
                    alt="Remy Sharp"
                    src={shop.icon}
                    sx={{ objectFit: "contain" }}
                  />
                </Box>
                <Box
                  sx={{
                    width: "85%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                  }}
                >
                  <Typography>{shop.shopName}</Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <Link
                  underline="none"
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    window.open(shop.link, "_blank");
                  }}
                >
                  {`Сайт`}
                </Link>
                <Divider />
                <List>
                  {shop.branchs.map((branch, i) => {
                    return (
                      <ListItem key={i}>
                        <Link
                          underline="always"
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            window.open(branch.link, "_blank");
                          }}
                        >
                          {branch.address}
                        </Link>
                      </ListItem>
                    );
                  })}
                </List>
              </AccordionDetails>
            </Accordion>
          </React.Fragment>
        );
      })}
    </List>
  );
}
