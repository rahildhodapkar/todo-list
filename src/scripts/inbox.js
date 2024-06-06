import { parseISO } from "date-fns";

class Inbox {
  constructor() {
    if (Inbox.instance) {
      return Inbox.instance;
    }

    this.priorityOne = [];
    this.priorityTwo = [];
    this.priorityThree = [];
    this.priorityFour = [];
    this.id = 0;

    Inbox.instance = this;
    return this;
  }

  addTask(task) {
    const priorityLevel = task.priority;

    if (task !== null) {
      this.id++;
      task.id = this.id;

      if (priorityLevel === "Priority One") {
        this.priorityOne.push(task);
      } else if (priorityLevel === "Priority Two") {
        this.priorityTwo.push(task);
      } else if (priorityLevel === "Priority Three") {
        this.priorityThree.push(task);
      } else {
        this.priorityFour.push(task);
      }
    }
  }

  sortInboxByDate() {
    const sortByDate = (a, b) => {
      const dateA = new Date(a.dueDate);
      const dateB = new Date(b.dueDate);
      return dateA - dateB;
    };

    this.priorityOne.sort(sortByDate);
    this.priorityTwo.sort(sortByDate);
    this.priorityThree.sort(sortByDate);
    this.priorityFour.sort(sortByDate);
  }

  filterInboxToToday() {
    const isToday = (task) => {
      const taskDate = new Date(task.dueDate);
      const today = new Date();
      return (
        taskDate.getDate() === today.getDate() &&
        taskDate.getMonth() === today.getMonth() &&
        taskDate.getFullYear() === today.getFullYear()
      );
    };

    return [
      this.priorityOne.filter(isToday),
      this.priorityTwo.filter(isToday),
      this.priorityThree.filter(isToday),
      this.priorityFour.filter(isToday),
    ];
  }

  filterInboxToUpcoming() {
    const isFuture = (task) => {
      const taskDate = new Date(task.dueDate);
      const today = new Date();
      return (
        taskDate.getDate() > today.getDate() &&
        taskDate.getMonth() > today.getMonth() &&
        taskDate.getFullYear() > today.getFullYear()
      );
    };

    return [
      this.priorityOne.filter(isFuture),
      this.priorityTwo.filter(isFuture),
      this.priorityThree.filter(isFuture),
      this.priorityFour.filter(isFuture),
    ];
  }

  filterInboxByProject(project) {
    const filterByProject = (task) => task.project === project;

    return [
      this.priorityOne.filter(filterByProject),
      this.priorityTwo.filter(filterByProject),
      this.priorityThree.filter(filterByProject),
      this.priorityFour.filter(filterByProject),
    ];
  }
}

function createTask(title, description, dueDate, priority, project, comments) {
  return {
    title,
    description,
    dueDate,
    priority,
    project,
    comments,
    id: null,
  };
}

function setUpListeners(inbox) {
  const dialog = document.querySelector("dialog");

  document.getElementById("add-task").addEventListener("click", () => {
    dialog.showModal();
  });

  document.querySelector("dialog form").addEventListener("submit", (event) => {
    event.preventDefault();
    const input = document.querySelector("input#task-name").value;
    const desc = document.querySelector("input#task-description").value;
    const date = parseISO(document.querySelector("input#task-date").value);
    const priority = document.querySelector("select#task-priority").value;
    const project = document.querySelector("select#task-project").value;

    const newTask = createTask(input, desc, date, priority, project, "");

    inbox.addTask(newTask);

    dialog.close();
  });
}

const inbox = new Inbox();

export default function () {
  setUpListeners(inbox);
}

export { inbox };
