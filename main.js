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

function create_acc() {
  $(".recommended-groups").removeClass("d-none");
  $(".leaveagroup_btn").removeClass("d-none");
  $(".joinagroup_btn").addClass("d-none");
  $(".sg").removeClass("d-none");
  $(".website-top-create-acc").addClass("d-none");
}

function leave_acc() {
  $(".recommended-groups").addClass("d-none");
  $(".leaveagroup_btn").addClass("d-none");
  $(".joinagroup_btn").removeClass("d-none");
  $(".sg").addClass("d-none");
  $(".website-top-create-acc").removeClass("d-none");
}
