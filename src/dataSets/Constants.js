import action from "./images/action.png";
import drama from "./images/drama.png";
import fanstasy from "./images/fantasy.png";
import fiction from "./images/fiction.png";
import horror from "./images/horror.png";
import music from "./images/music.png";
import romace from "./images/romance.png";
import thriller from "./images/thriller.png";
import western from "./images/western.png";

const categories = [
  {
    label: "Action",
    value: "action",
    imgUrl: action,
    bgColor: "#FF5209",
    isSelected: false,
  },
  {
    label: "Drama",
    value: "drama",
    imgUrl: drama,
    bgColor: "#D7A4FF",
    isSelected: false,
  },
  {
    label: "Romance",
    value: "romance",
    imgUrl: romace,
    bgColor: "#148A08",
    isSelected: false,
  },
  {
    label: "Thriller",
    value: "thriller",
    imgUrl: thriller,
    bgColor: "#84C2FF",
    isSelected: false,
  },
  {
    label: "Western",
    value: "western",
    imgUrl: western,
    bgColor: "#902500",
    isSelected: false,
  },
  {
    label: "Horror",
    value: "horror",
    imgUrl: horror,
    bgColor: "#7358FF",
    isSelected: false,
  },
  {
    label: "Fantasy",
    value: "fantasy",
    imgUrl: fanstasy,
    bgColor: "#FF4ADE",
    isSelected: false,
  },
  {
    label: "Music",
    value: "music",
    imgUrl: music,
    bgColor: "#E61E32",
    isSelected: false,
  },
  {
    label: "Fiction",
    value: "fiction",
    imgUrl: fiction,
    bgColor: "#6CD061",
    isSelected: false,
  },
];

export default categories;
