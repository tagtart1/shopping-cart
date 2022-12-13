import Guppy from "../images/product-images/guppy.jpeg";
import cowboyHat from "../images/product-images/cowboyhat.jpg";
import santaHat from "../images/product-images/santahat.jpg";
import topHat from "../images/product-images/tophat.jpg";
import coconut from "../images/product-images/coconut.jpg";
import uniqid from "uniqid";
import hairyFrog from "../images/product-images/hairyfrog.png";
const productList = {
  frogs: [
    {
      name: "Guppy",
      price: "$19.99",
      img: Guppy,
      id: uniqid(),
    },
    {
      name: "Jimmy",
      price: "$24.99",
      img: Guppy,
      id: uniqid(),
    },
    {
      name: "Matt",
      price: "$15.99",
      img: Guppy,
      id: uniqid(),
    },
    {
      name: "Hairy Frog jimmy",
      price: "$16.99",
      img: hairyFrog,
      id: uniqid(),
    },
  ],
  food: [
    {
      name: "Coconut",
      price: "$2.49",
      img: coconut,
      id: uniqid(),
    },
  ],
  accessories: [
    {
      name: "Top Hat",
      price: "$9.99",
      img: topHat,
      id: uniqid(),
    },
    {
      name: "Santa Hat",
      price: "$7.99",
      img: santaHat,
      id: uniqid(),
    },
    {
      name: "Cowboy Hat",
      price: "$6.99",
      img: cowboyHat,
      id: uniqid(),
    },
  ],
};

export default productList;
