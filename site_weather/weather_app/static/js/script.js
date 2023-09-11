$(function () {
  var citySuggestion = $("#city-suggestion");

  $("#city").on("input", function () {
    var cityName = $(this).val();

    $("#weather").empty();
    citySuggestion.empty();

    if (cityName.trim() !== "") {
      $.getJSON(
        "https://api.openweathermap.org/data/2.5/find?q=" +
          cityName +
          "&appid=6cfa59fa4d915fc369cf8c1953dd7ac4&units=metric&lang=" +
          (localStorage.getItem("language") || "en"),
        function (data) {
          if (data.list && data.list.length > 0) {
            var firstCityName = data.list[0].name;
            citySuggestion.text("Возможно, вы ищете: " + firstCityName);
          }
        }
      );
    }
  });
});
