$(document).ready(() => {
  $(".submitButton").click(() => {
    event.preventDefault();
    let email = $(".emailField").val().replace('email=', '');
    console.log('email', email);
    let regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    console.log('Submit Button Clicked');
    if (email === "" || regex.test(email) == false) {
      $("alert").remove();
      let alert = $("<alert>").addClass("alert").text("There was an error with your email.");
      $(".form").append(alert);
      $(".emailField").focus();
    } else {
      $("alert").remove();
    }
  });
});