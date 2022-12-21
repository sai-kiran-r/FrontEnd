function addrow(){
    var tableMain = document.getElementById("myTable");
    var length = tableMain.rows.length;
    var newRow = tableMain.rows[1].cloneNode(true);
    var studentDetail = tableMain.rows[2].cloneNode(true);
    newRow.cells[1].innerHTML = "Student" + " " + ((length+1)/2);
    newRow.cells[2].innerHTML = "Teacher" + " " + ((length+1)/2);
    tableMain.appendChild(newRow);
    tableMain.appendChild(studentDetail);
  }
  function selectone(one){
      var o = one.parentNode.parentNode;
      var x = document.getElementById("deleteEl");
      if(one.checked){
          o.lastElementChild.removeAttribute("class");
          o.lastElementChild.style.display = "block";
          o.style.backgroundColor = "orange";
          button.style.backgroundColor = "orange";
          x.style.display = "block";
      }
      if((!one.checked)){
        // else{
          button.style.backgroundColor = "grey";
          o.style.backgroundColor = "white";
          o.lastElementChild.style.display = "none";
        o.lastElementChild.classlist.add("delete");
        x.style.display = "none";
      }
  }
  function Delete(one){
      var rowone = one.parentNode.parentNode;
      var rowtwo = rowone.nextElementSibling;
      rowone.parentNode.removeChild(rowone);
      rowtwo.parentNode.removeChild(rowtwo);
  }
  function hide(one){
      var h = one.parentElement.parentElement.nextElementSibling;
      if(h.style.display != "none"){
          h.style.display = "none";
      }
      else{
          h.style.display = "block";
      }
  }
