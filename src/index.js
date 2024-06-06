import huskyImg from "./images/husky.jpeg"
import "./style.css";
import resizeSidebar from "./scripts/resizeSidebar";
import closeSidebar from "./scripts/closeSidebar";
import manageTasksDriver from "./scripts/inbox";
import handleAddTaskButton from "./scripts/handleDialogButtons";
import loadInbox from "./scripts/loadInbox";
import loadToday from "./scripts/loadToday";
import loadUpcoming from "./scripts/loadUpcoming";

function init() {
  document.querySelector("img").src = huskyImg;
  resizeSidebar();
  closeSidebar();
  manageTasksDriver();
  handleAddTaskButton();
  loadInbox();

  const buttons = document.querySelectorAll(".sidebar-button");

  buttons[2].addEventListener("click", () => {
    loadInbox();
  });

  buttons[3].addEventListener("click", () => {
    loadToday();
  });

  buttons[4].addEventListener("click", () => {
    loadUpcoming();
  });
}

init();