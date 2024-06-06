import { inbox } from "./inbox";
import { createTaskCard } from "./createTaskCard";

export default function() {
  const container = document.querySelector(".task-container");

  container.innerHTML = "";
  const h1 = document.createElement("h1");
  h1.textContent = "Inbox";
  container.appendChild(h1);

  inbox.sortInboxByDate();

  createTaskCard("Priority One", inbox.priorityOne);
  createTaskCard("Priority Two", inbox.priorityTwo);
  createTaskCard("Priority Three", inbox.priorityThree);
  createTaskCard("Priority Four", inbox.priorityFour);
}