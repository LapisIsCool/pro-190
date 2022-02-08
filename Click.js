AFRAME.registerComponent("on-click", {
  init: function () {
    this.click();
  },
  click: function () {
    $("orangeButton").click(function () {
      alert("Handler for .click() called.");
    });
  },
});
