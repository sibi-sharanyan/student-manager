import Component from "@ember/component";
import $ from "jquery";
export default Component.extend({
  init() {
    this._super(...arguments);
    $(".nav-element2").addClass("opt");
    var objArr = [{ fname: "hello" }];
    var self = this;
    $.ajax("/emback/records").then(data => {
      this.set("arrayOfData", data.data);
    });
  },
  actions: {
    addValue(fname, phno, dept) {
      var fnameval = encodeURIComponent(fname);
      var deptval = encodeURIComponent(dept);
      var phnoval = encodeURIComponent(phno);

      var fnamekey = encodeURIComponent("fname");
      var deptkey = encodeURIComponent("dept");
      var phnokey = encodeURIComponent("phno");
      var postdata =
        fnamekey +
        "=" +
        fnameval +
        "&" +
        deptkey +
        "=" +
        deptval +
        "&" +
        phnokey +
        "=" +
        phnoval;
      $.ajax({
        url: "/emback/create",
        method: "POST",
        data: postdata
      }).then(data => {
        var obj = { fname: fname, phno: phno, dept: dept, sno: data.sno };
        this.get("arrayOfData").pushObject(obj);
      });
    },
    deleteValue(sno) {
      var snoval = encodeURIComponent(sno);
      var snokey = encodeURIComponent("sno");
      var deletedata = snokey + "=" + snoval;
      $.ajax({
        url: "/emback/delete",
        method: "POST",
        data: deletedata
      }).then(data => {
        $.ajax("/emback/records").then(data => {
          this.set("arrayOfData", data.data);
        });
      });
    }
  }
});
