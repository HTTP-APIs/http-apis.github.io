let $menu_toggle_button = document.getElementById("menu-toggle-btn");
let $m_sidebar = document.querySelector(".m-sidebar");
let $sidebar = document.querySelector(".sidebar");

const handleSidebarToggleBtn = function(){
  console.log($m_sidebar.style.transform);
  $m_sidebar.classList.toggle("move_m_sidebar_up");
  $menu_toggle_button.classList.toggle("is-active");
} 

let widgetCSS = "" +
    "body{font-family: 'Roboto';}" +
    ".timeline-Widget{border-top-left-radius: 10px; border-top-right-radius: 10px; outline: #ffffff; border: solid 2px #ffffff; margin: auto;}" +
    ".timeline-Header{background-color: rgba(0, 0, 0, 0.9); border-top-left-radius: 10px; border-top-right-radius: 10px;}" +
    ".timeline-Header-title{color: #ffffff;}" +
    ".timeline-Tweet-text{color: #ffffff;}" +
    ".timeline-tweetList-tweet, .timeline-LoadMore, .timeline-Footer{background-color: rgba(0, 0, 0, 0.8);}" +
    ".TweetAuthor-name{color:#ffffff;}";

document.addEventListener("DOMContentLoaded", function(){
  // Function that changes background of twitter widget
  function populateIframe() {
  
  // Look for widget
  var ifrm = document.getElementById('twitter-widget-0')
  
  // If widget did generate to iframe
  if (ifrm !== null){
    var timelineWidget = ifrm.contentWindow.document.getElementsByClassName('timeline-Widget')[0];
    var timelineWidgetHeader = ifrm.contentWindow.document.getElementsByClassName('timeline-Header')[0];
    var timelineWidgetFooter = ifrm.contentWindow.document.getElementsByClassName('timeline-Footer')[0];
    // then if widget has content with class="timeline-Widget"
    if (timelineWidget !== undefined && timelineWidgetHeader !== undefined && timelineWidgetFooter !== undefined){
      // then change background color css for this class
      timelineWidget.style.border="1px solid #ddd";
      timelineWidget.style.borderRadius=0;

      timelineWidgetHeader.style.background="#f3f3f3";
      // timelineWidgetHeader.style.borderBottom="5px solid #ddd";
      // timelineWidgetHeader.style.boxShadow="0 0 20px #ccc";

      timelineWidgetFooter.style.background="#f3f3f3";
      // and leave setinterval
        clearInterval(myInterval);
        } else {
          // console.log('timelineWidget == undefined - ', timelineWidget);
        }
      } else {
      // console.log('ifrm === null - ', ifrm);
    }
  }
  
  // Run function every second until it will terminate setinterval by itself
  var myInterval = setInterval(populateIframe, 1000);
<<<<<<< HEAD
    
=======
  
>>>>>>> e944c1eee8d0fc5b9df90cd29460d83e79e8e55b
  });
