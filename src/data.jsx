import circles from "./assets/savings/circles.png";
import flex from "./assets/savings/flex.png";
import lock from "./assets/savings/lock.png";
import shield from "./assets/savings/shield-done.png";

import green from "./assets/savings/greenRight.svg";
import lightBlue from "./assets/savings/lightBlueRight.svg";
import blue from "./assets/savings/blueRight.svg";
import pink from "./assets/savings/pinkRight.svg";

export const links = [
  {
    name: "Save",
    submenu: true,
    link: "/",
    sublink: [
      { name: "piggybank", s_name: "automated saving", link: "/" },
      { name: "piggybank", s_name: "automated saving", link: "/" },
      { name: "piggybank", s_name: "automated saving", link: "/" },
      { name: "piggybank", s_name: "automated saving", link: "/" },
      { name: "piggybank", s_name: "automated saving", link: "/" },
    ],
  },
  { name: "Invest", link: "/" },
  { name: "Stories", link: "/" },
  { name: "FAQs", link: "/" },
  { name: "Blog", link: "/" },
  { name: "E-book", link: "/" },
];

export const savingsList = [
  {
    icon: shield,
    heading: "Automated Savings",
    sub_heading:
      "Build a dedicated savings faster on your terms automatically or manually.",
    title: "Piggybank",
    semi_icon:blue
  },
  {
    icon: lock,
    heading: "Fixed Savings",
    sub_heading:
      "Lock money away for a fixed duration with no access to it until maturity. It’s like having a custom fixed deposit",
    title: "Safelock",
    semi_icon:lightBlue
  },
  {
    icon: circles,
    heading: "Goal-oriented Savings",
    sub_heading:
      "Reach all your savings goals faster. Save towards multiple goals on your own or with a group.",
    title: "Target Savings",
    semi_icon:green
  },
  {
    icon: flex,
    heading: "Flexible Savings",
    sub_heading:
      "Save, transfer, withdraw, manage and organise your money for free at any time.",
    title: "Flex Naira",
    semi_icon:pink
  },
];
