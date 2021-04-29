// var tab_active = document.querySelectorAll(`#nav-item`);
// var i;
// for (i = 0; i <= tab_active.length; i++) {
//   tab_active[i].addEventListener(`click`, function () {
//     this.prevAll().removeClass("nav-active-tab");
//     this.nextAll().removeClass("nav-active-tab");
//     this.addClass("nav-active-tab");
//   });
// }

var tab_active = document.getElementsByClassName(`nav-item`);
var i;
for (i = 0; i <= tab_active.length; i++) {
  tab_active[i].addEventListener(`click`, function () {
    $(this).prevAll().removeClass("nav-active-tab");
    $(this).nextAll().removeClass("nav-active-tab");
    $(this).addClass("nav-active-tab");
  });
}

