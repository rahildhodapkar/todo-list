export default function() {
  const name = document.querySelector("input#task-name");
  const addTask = document.querySelector("button[type='submit']");
  const cancel = document.querySelector("button[type='reset']");
  const dialog = document.querySelector("dialog");

  if (!name.value) {
    addTask.disabled = true;
    addTask.classList.add("disabled");
  }

  name.addEventListener("input", () => {
    if (name.value) {
      addTask.disabled = false;
      addTask.classList.remove("disabled");
    } else {
      addTask.disabled = true;
      addTask.classList.add("disabled");
    }
  });

  cancel.addEventListener("click", () => {
    dialog.close();
  });
}