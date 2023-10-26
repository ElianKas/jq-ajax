$(function () {
  $(".techniken").on("click", function (e) {
    e.preventDefault();
    let url = $(this).attr("href");
    $(".details").load(url);
  });
});
