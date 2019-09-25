let $menu_toggle_button = document.getElementById("menu-toggle-btn");
let $m_sidebar = document.querySelector(".m-sidebar");

const handleSidebarToggleBtn = function(){
  console.log($m_sidebar.style.transform);
  $m_sidebar.classList.toggle("move_m_sidebar_up");
  $menu_toggle_button.classList.toggle("is-active");
} 