function bold() {
    document.getElementById("textarea").style.fontWeight = "bold";
  }
  
  function italic() {
    document.getElementById("textarea").style.fontStyle = "italic";
  }
  
  function underline() {
    document.getElementById("textarea").style.textDecoration = "underline";
  }

  function strikeThrough(){
    document.getElementById("textarea").style.textDecoration = "line-through";
  }
  
  function superScript(){
    document.getElementById("textarea").style.textDecoration = "line-through";
  }
  
  function subscript(){
    document.getElementById("textarea").style.textDecoration = "line-through";
  }















  // Aligmnet
  function alignLeft() {
    document.getElementById("textarea").style.textAlign = "left";
  }
  
  function alignCenter() {
    document.getElementById("textarea").style.textAlign = "center";
  }
  
  function alignRight() {
    document.getElementById("textarea").style.textAlign = "right";
  }
  function justify() {
    document.getElementById("textarea").style.textAlign = "justify";
  }
  function indent() {
    document.getElementById("textarea").style.textIndent = "10px";
  }
  function outdent() {
    document.getElementById("textarea").style.textIndent = "-10px";
  }













  
  function upperCase() {
    document.getElementById("textarea").style.textTransform = "uppercase";
  }
  
  function lowerCase() {
    document.getElementById("textarea").style.textTransform = "lowercase";
  }
  
  function capitalize() {
    document.getElementById("textarea").style.textTransform = "capitalize";
  }
  
  //clear all Formating
  function clearT() {
    document.getElementById("textarea").style.fontWeight = "normal";
    document.getElementById("textarea").style.textDecoration = "none";
    document.getElementById("textarea").style.textAlign = "left";
    document.getElementById("textarea").style.fontStyle = "normal";
    document.getElementById("textarea").style.textTransform = "capitalize";
    document.getElementById("textarea").value = " ";
  }
  
  // dropdown ***************************
  /* When the user clicks on the button, toggle between hiding and showing the dropdown content */
  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function (event) {
    if (!event.target.matches(".dropbtn")) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("show")) {
          openDropdown.classList.remove("show");
        }
      }
    }
  };
  