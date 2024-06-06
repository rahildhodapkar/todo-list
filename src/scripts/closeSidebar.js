export default function() {
  const sidebar = document.querySelector('.sidebar');
  const sidebarButton = document.querySelector('.sidebar .sidebar-header > button');

  let currentWidth = sidebar.style.width || '200px'; 

  sidebarButton.addEventListener('click', () => {
    if (sidebar.style.width === '0px') {
      sidebar.style.minWidth = '200px'
      sidebar.style.width = currentWidth;
      sidebar.style.padding = ''; 
      sidebar.style.margin = '';  
      sidebar.style.overflow = ''; 
    } else {
      currentWidth = sidebar.style.width;
      sidebar.style.minWidth = '0px'
      sidebar.style.width = '0px';
      sidebar.style.padding = '0';
      sidebar.style.margin = '0';
      sidebar.style.overflow = 'hidden';
    }
  });
}