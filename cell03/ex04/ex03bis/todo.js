$(document).ready(function () {
  function saveTDs() {
    const tdArray = $("#ft_list .TD")
      .map(function () {
        return $(this).text();
      })
      .get();
    str_array = JSON.stringify(tdArray);
    en_str_array = encodeURIComponent(str_array);
    document.cookie = `tds=${en_str_array}`;
    console.log(document.cookie);
  }

  function loadTDs() {
    const cookies = document.cookie.split("=")[1];
    console.log(cookies);
    de_cookie = decodeURIComponent(cookies);
    console.log(de_cookie);
    if (de_cookie) {
      const tdArray = JSON.parse(de_cookie);
      tdArray.forEach((tdText) => {
        const $TD = $("<div>").text(tdText).addClass("TD");
        $("#ft_list").append($TD);
      });
    }
  }

  $("#btn").on("click", function () {
    const TDM = prompt("Please enter your TD");
    if (TDM && TDM.trim()) {
      const $TD = $("<div>").text(TDM).addClass("TD");
      $("#ft_list").prepend($TD);
      saveTDs();
    }
  });

  $(document).on("click", ".TD", function () {
    if (confirm("Remove This TD?")) {
      $(this).remove();
      saveTDs();
    }
  });

  loadTDs();
});
