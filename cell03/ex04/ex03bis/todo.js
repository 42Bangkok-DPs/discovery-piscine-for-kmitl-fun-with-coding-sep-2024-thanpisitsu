$(document).ready(function () {
  function saveTDs() {
    const tdArray = $("#ft_list .task")
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
    de_cookie = decodeURIComponent(cookies);
    if (de_cookie) {
      const tdArray = JSON.parse(de_cookie);
      tdArray.forEach((tdText) => {
        const $TD = $("<div>").text(tdText).addClass("task");
        $("#ft_list").append($TD);
      });
    }
  }

  $("#new_task").on("click", function () {
    const TDM = prompt("Enter new Task");
    if (TDM && TDM.trim()) {
      const $TD = $("<div>").text(TDM).addClass("task");
      $("#ft_list").prepend($TD);
      saveTDs();
    }
  });

  $(document).on("click", ".task", function () {
    if (confirm("Do you want to remove this task?")) {
      $(this).remove();
      saveTDs();
    }
  });

  loadTDs();
});
