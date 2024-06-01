import "./style.css";
import resizeSidebar from "./scripts/resizeSidebar";
import closeSidebar from "./scripts/closeSidebar";

document.addEventListener("DOMContentLoaded", () => { 
  resizeSidebar();
  closeSidebar();
});