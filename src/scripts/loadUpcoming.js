import { inbox } from "./inbox";
import { createTaskCard } from "./createTaskCard";

export default function() {
  const container = document.querySelector(".task-container");

  container.innerHTML = "";
  const h1 = document.createElement("h1");
  h1.textContent = "Upcoming";
  container.appendChild(h1);

  const res = inbox.filterInboxToUpcoming();

  createTaskCard("Priority One", res[0]);
  createTaskCard("Priority Two", res[1]);
  createTaskCard("Priority Three", res[2]);
  createTaskCard("Priority Four", res[3]);
}