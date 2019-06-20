import Component from "@ember/component";

export default Component.extend({
  init() {
    this._super(...arguments);
    $(".nav-element1").addClass("opt");
  },
  actions: {
    addValue(fname, phno, dept) {
      //   window.location.reload(true);
      alert("Data Added");
      this.set("arrayOfData", []);
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
    update(val) {
      alert(value);
    }
  }
});
