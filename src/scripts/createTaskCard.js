import { format, parseISO, isValid } from "date-fns";

export function createTaskCard(title, tasks, today=false) {
  const outerDiv = document.createElement("div");

  const h3 = document.createElement("h3");
  h3.textContent = title;

  outerDiv.appendChild(h3);

  tasks.forEach((task) => {
    const innerDiv = document.createElement("div");
    innerDiv.classList.add("task-card")

    const taskTitle = document.createElement("h4");
    taskTitle.textContent = task.title;

    const taskDesc = document.createElement("p");
    taskDesc.textContent = task.description ? task.description : "";

    const taskDate = document.createElement("p");
    let dueDate;
    if (typeof task.dueDate === "string") {
      dueDate = parseISO(task.dueDate);
    } else {
      dueDate = new Date(task.dueDate);
    }

    taskDate.textContent = isValid(dueDate) ? format(dueDate, "PPPP") : "";

    const taskProject = document.createElement("p");
    taskProject.textContent = task.project ? task.project : "No project!";

    const miscDiv = document.createElement("div");
    if (!today) { miscDiv.appendChild(taskDate); }
    miscDiv.appendChild(taskProject);
    miscDiv.classList.add("misc-bar");

    const taskPriority = document.createElement("p");
    

    if (task.priority === "Priority One") {
      innerDiv.style.backgroundColor = "rgba(245, 40, 145, 0.34)";
    } else if (task.priority === "Priority Two") {
      innerDiv.style.backgroundColor = "rgba(245, 153, 39, 0.34)";
    } else if (task.priority === "Priority Three") {
      innerDiv.style.backgroundColor = "rgba(217, 245, 39, 0.34)";
    } else {
      innerDiv.style.backgroundColor = "rgba(39, 245, 46, 0.34)";
    }

    innerDiv.appendChild(taskTitle);
    innerDiv.appendChild(taskDesc);
    innerDiv.appendChild(taskPriority);
    innerDiv.appendChild(miscDiv);

    outerDiv.appendChild(innerDiv);

    document.querySelector(".task-container").appendChild(outerDiv);
  });
}
