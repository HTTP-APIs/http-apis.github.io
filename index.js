let $sidebar_toggle_button = document.getElementById("sidebar-toggle-btn");
let $m_sidebar = document.querySelector(".m-sidebar");

const handleSidebarToggleBtn = function(){
  console.log($m_sidebar.style.transform);
  $m_sidebar.classList.toggle("move_m_sidebar_up");
  $sidebar_toggle_button.classList.toggle("sidebar-toggle-btn-clicked");
}