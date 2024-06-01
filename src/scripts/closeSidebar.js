export default function() {
  const sidebar = document.querySelector('.sidebar');
  const sidebarButton = document.querySelector('.sidebar .sidebar-header > button');

  let currentWidth = sidebar.style.width || '200px'; 

  sidebarButton.addEventListener('click', () => {
    if (sidebar.style.width === '0%') {
      sidebar.style.width = currentWidth;
    } else {
      currentWidth = sidebar.style.width;
      sidebar.style.minWidth = '0%';
      sidebar.style.width = '0%'
    }
  });
}