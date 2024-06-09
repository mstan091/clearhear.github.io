// Family booking
function enableFamily(e) {
  d = document.getElementById("appt-family").value;
}

function familyAppnt(e) {
  v = document.getElementById("appt-family").value;
  if (v=="2"){
    document.getElementById("appt-adults").removeAttribute('disabled');
    document.getElementById("appt-kids").removeAttribute('disabled');
  }
  else{
    document.getElementById("appt-adults").setAttribute("disabled","disabled");
    document.getElementById("appt-kids").setAttribute("disabled","disabled");
  }
}

// Booking confirmation
function displayBookConf(e){
   document.getElementById("ch-col-confirmbook").className="col ch-display-confirmation";
}

function cancelBookConf(e){
  document.getElementById("ch-col-confirmbook").className="col ch-col-conf-book";
}