import { inbox } from "./inbox";
import { createTaskCard } from "./createTaskCard";

export default function() {
  const container = document.querySelector(".task-container");

  container.innerHTML = "";
  const h1 = document.createElement("h1");
  h1.textContent = "Today";
  container.appendChild(h1);

  const res = inbox.filterInboxToToday();

  createTaskCard("Priority One", res[0], true);
  createTaskCard("Priority Two", res[1], true);
  createTaskCard("Priority Three", res[2], true);
  createTaskCard("Priority Four", res[3], true);
}