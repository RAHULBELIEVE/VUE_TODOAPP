const app = Vue.createApp({
  data() {
    return {
      show: false,
      enteredval: "",
      goals: [],
      localgoals: JSON.parse(localStorage.getItem("goals")),
    };
  },
  methods: {
    getfromlocal(e) {
      if (localStorage.getItem("goals")) {
        this.goals = this.localgoals;
        e.target.innerHTML = `${this.goals.length} FOUND`;
      }
    },
    addtogoal() {
      if (this.enteredval === "") {
        this.show = true;
      } else {
        this.show = false;
        // console.log(typeof this.goals);
        this.goals.push(this.enteredval);
        this.enteredval = "";
        localStorage.setItem("goals", JSON.stringify(this.goals));
      }
    },
    deleteitem(val) {
      // console.log(val.target.innerHTML);
      index = this.goals.indexOf(val.target.innerHTML);
      console.log(index);
      this.goals.splice(index, 1);
      localStorage.setItem("goals", JSON.stringify(this.goals));
    },
  },
});

app.mount(".todoapp");
