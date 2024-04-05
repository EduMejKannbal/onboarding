var scorm = pipwerks.SCORM;
lmsConnected = scorm.init();

//Control Scorm
function init_Course() {
  if (lmsConnected) {
    var completionstatus = scorm.get("cmi.core.lesson_status");
    if (completionstatus === "failed" || completionstatus === "incomplete") {
      console.log('Esta actividad no ha sido completada');
    } else if (completionstatus === "completed" || completionstatus === "passed") {
      console.log('Ya haz completado la actividad con éxito');
    }
  } else {
    console.log("Advertencia: Esta actividad no está conectada al LMS, no se podrá guardar su progreso");
  }
}



function setComplete() {
  if (lmsConnected) {
    scorm.set("cmi.core.score.raw", 100);
    scorm.set("cmi.core.lesson_status", "passed");
    scorm.save();
  } else {
    console.log("Advertencia: Esta actividad no está conectada al LMS, no se podrá guardar su progreso");
  }
}
function exit_lms() {
  scorm.quit();
  parent.window.close();
}
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};
