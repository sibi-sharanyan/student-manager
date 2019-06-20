import Component from "@ember/component";

export default Component.extend({
  init() {
    this._super(...arguments);
    this.set("mydata", []);
    $(".nav-element3").addClass("opt");
  },
  actions: {
    editid(sno) {
      var snoval = encodeURIComponent(sno);
      var snokey = encodeURIComponent("sno");
      var deletedata = snokey + "=" + snoval;
      $.ajax({
        url: "/emback/delete",
        method: "POST",
        data: deletedata
      }).then(data => {
        // alert(data.fname);
        var obj = {
          fname: data.fname,
          phno: data.phno,
          dept: data.dept,
          sno: data.sno
        };
        this.get("mydata").pushObject(obj);
      });
    },
    submitedit(fname, phno, dept) {
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
        alert("Data Updated");
      });
    }
  }
});
