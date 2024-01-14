$(document).ready(function () {
  $(".btn_toggle").click(function () {
    $(".p1").toggle(function () {
      console.log("toggled");
      let color = $("div.box").css("background-color");
      $(".p1").css("color", color);
    });
  });
  $(".btn_fade").click(function () {
    $(".p2").fadeToggle("slow", function () {
      console.log("faded out");
    });
  });
  $(".animatebtn").click(function () {
    $(".box").animate({
      width: "200px",
      height: "200px",
    });
    console.log("animated");
  });
  $(".hello").click(function () {
    let color = $(".hello").css("backgroundColor", "blue");
    $(".hello").css("textColor", color);
  });
  $(".hello").blur(function () {
    let color = $(".hello").css("backgroundColor", "");
    $(".hello").css("textColor", color);
  });
  //!Form Ajax
  // $("#output").load("sample.txt", function (response, statusTxt, xhr) {
  //   if (statusTxt === "success") alert("Success!");
  //   if (statusTxt === "error") alert("Error" + xhr.statusTxt);
  // });
  //!Ajax API call
  $.get("https://jsonplaceholder.typicode.com/users", function (data, status) {
    console.log(data, status);
  });
  $.post(
    "https://jsonplaceholder.typicode.com/posts",
    {
      title: "This is title",
      body: "this is body",
    },
    function (data, status) {
      console.log(data, status);
    }
  );
  //!Form
  // $("input").focus(function () {
  //   $(this).css("background-color", "skyblue");
  // });
  // $("input").blur(function () {
  //   $(this).css("background-color", "");
  // });
  // $("input").change(function () {
  //   console.log($(this).val());
  // });
  // $("#regform").submit(function (event) {
  //   event.preventDefault();
  //   console.log("submitted");
  // });

  //!AJAX

  //!h and s keypressed hide and show
  // $("body").keydown(function (event) {
  //   if (event.which === 72) {
  //     $(".p2").hide();
  //   }
  //   if (event.which === 83) {
  //     $(".p2").show();
  //   }
  // });
});
