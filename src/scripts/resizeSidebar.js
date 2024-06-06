export default function() {
  const sidebar = document.querySelector('.sidebar');
  const handle = document.querySelector('.resize-handle');
                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
  handle.addEventListener('mousedown', (e) => {
    e.preventDefault();
    
    document.body.style.cursor = "ew-resize";
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });

  function onMouseMove(e) {
    const newWidth = e.clientX - sidebar.getBoundingClientRect().left;
    
    if (newWidth > 200 && newWidth < window.innerWidth * 0.2) {
      sidebar.style.width = newWidth + 'px';
    }
  }

  function onMouseUp() {
    document.body.style.cursor = "";
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
  }
}