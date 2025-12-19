import { ImageDown, Mail, Webhook } from "lucide-react";
import { Activity } from "./types";

export const activities: Activity[] = [
  {
    id: "1",
    icon: ImageDown,
    title: "New image uploaded",
    description: "screenshot-2024.png",
    time: "2 hours ago",
    color: "blue",
  },
  {
    id: "2",
    icon: Mail,
    title: "Email received",
    description: "test@temp.pixelpipe.dev",
    time: "4 hours ago",
    color: "purple",
  },
  {
    id: "3",
    icon: Webhook,
    title: "Webhook triggered",
    description: "POST /hook/xyz123",
    time: "1 day ago",
    color: "green",
  },
];
