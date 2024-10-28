import Bug from "@/assets/svgs/dashboard/bug.svg";
import User from "@/assets/svgs/dashboard/user.svg";
import Update from "@/assets/svgs/dashboard/update.svg";
import { faker } from "@faker-js/faker";

export const notifications = [
  {
    id: faker.database.mongodbObjectId(),
    title: "You fixed a bug.",
    subTitle: "Just now",
    icon: Bug,
  },
  {
    id: faker.database.mongodbObjectId(),
    title: "New user registered.",
    subTitle: "59 minutes ago",
    icon: User,
  },
  {
    id: faker.database.mongodbObjectId(),
    title: "You fixed a bug.",
    subTitle: "12 hours ago",
    icon: Bug,
  },
  {
    id: faker.database.mongodbObjectId(),
    title: "Andi Lane subscribed to you.",
    subTitle: "Today, 11:59 AM",
    icon: Update,
  },
];

export const activities = [
  {
    id: faker.database.mongodbObjectId(),
    title: "Changed the style.",
    subTitle: "Just now",
    icon: faker.image.url(),
  },
  {
    id: faker.database.mongodbObjectId(),
    title: "Released a new version.",
    subTitle: "59 minutes ago",
    icon: faker.image.url(),
  },
  {
    id: faker.database.mongodbObjectId(),
    title: "Submitted a bug.",
    subTitle: "12 hours ago",
    icon: faker.image.url(),
  },
  {
    id: faker.database.mongodbObjectId(),
    title: "Modified A data in Page X.",
    subTitle: "Today, 11:59 AM",
    icon: faker.image.url(),
  },
  {
    id: faker.database.mongodbObjectId(),
    title: "Deleted a page in Project X.",
    subTitle: "Feb 2, 2024",
    icon: faker.image.url(),
  },
];

export const contact = [
  {
    id: faker.database.mongodbObjectId(),
    name: faker.person.fullName(),
    icon: faker.image.url(),
  },
  {
    id: faker.database.mongodbObjectId(),
    name: faker.person.fullName(),
    icon: faker.image.url(),
  },
  {
    id: faker.database.mongodbObjectId(),
    name: faker.person.fullName(),
    icon: faker.image.url(),
  },
  {
    id: faker.database.mongodbObjectId(),
    name: faker.person.fullName(),
    icon: faker.image.url(),
  },
  {
    id: faker.database.mongodbObjectId(),
    name: faker.person.fullName(),
    icon: faker.image.url(),
  },
  {
    id: faker.database.mongodbObjectId(),
    name: faker.person.fullName(),
    icon: faker.image.url(),
  },
];

export const reportData = [
  {
    id: faker.database.mongodbObjectId(),
    title: "Requests",
    percent: faker.number.float({ min: -100, max: 100, multipleOf: 0.02 }),
    value: faker.number.int({ max: 10000 }),
    bg: "#E3F5FF",
  },
  {
    id: faker.database.mongodbObjectId(),
    title: "KYC",
    percent: faker.number.float({ min: -100, max: 100, multipleOf: 0.02 }),
    value: faker.number.int({ max: 10000 }),
    bg: "#E5ECF6",
  },
  {
    id: faker.database.mongodbObjectId(),
    title: "Tasks",
    percent: faker.number.float({ min: -100, max: 100, multipleOf: 0.02 }),
    value: faker.number.int({ max: 10000 }),
    bg: "#E3F5FF",
  },
  {
    id: faker.database.mongodbObjectId(),
    title: "Customers",
    percent: faker.number.float({ min: -100, max: 100, multipleOf: 0.02 }),
    value: faker.number.int({ max: 10000 }),
    bg: "#E5ECF6",
  },
];

export const websiteData = [
  {
    id: faker.database.mongodbObjectId(),
    title: "Google",
    w: "4",
  },
  {
    id: faker.database.mongodbObjectId(),
    title: "Youtube",
    w: "5",
  },
  {
    id: faker.database.mongodbObjectId(),
    title: "Instagram",
    w: "3",
  },
  {
    id: faker.database.mongodbObjectId(),
    title: "Pinterest",
    w: "6",
  },
  {
    id: faker.database.mongodbObjectId(),
    title: "Facebook",
    w: "2",
  },
  {
    id: faker.database.mongodbObjectId(),
    title: "Twitter",
    w: "4",
  },
];

export const usersGraphData = {
  label: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  thisYear: Array.from({ length: 7 }, () =>
    faker.number.int({ min: 1000, max: 30000 }),
  ),
  lastYear: Array.from({ length: 7 }, () =>
    faker.number.int({ min: 1000, max: 30000 }),
  ),
};

export const reportGraphData = {
  label: ["Linux", "Mac", "iOS", "Windows", "Android", "Other"],
  data: Array.from({ length: 6 }, () =>
    faker.number.int({ min: 1000, max: 30000 }),
  ),
  color: ["#95A4FC", "#BAEDBD", "#1C1C1C", "#B1E3FF", "#A8C5DA", "#A1E3CB"],
};

export const trafficGraphData = {
  label: ["Nigeria", "Ghana", "Kenya", "Benin Republic"],
  data: Array.from({ length: 4 }, () =>
    faker.number.int({ min: 1000, max: 30000 }),
  ),
  color: ["#1C1C1C", "#A1E3CB", "#B1E3FF", "#A8C5DA"],
};

export const marketingGraphData = {
  label: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ],
  data: Array.from({ length: 12 }, () =>
    faker.number.int({ min: 1000, max: 30000 }),
  ),
  color: ["#95A4FC", "#BAEDBD", "#1C1C1C", "#B1E3FF", "#A8C5DA", "#A1E3CB"],
};
