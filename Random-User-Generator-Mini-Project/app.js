/**+-(1-C)-This is how we declare our Vue.js "Components":_*/
const app = Vue.createApp({
  /**+-(1-E)-We can write Vue.js "HTML" here:_*/
  //template: "<h1>Hello {{firstName}}</h1>",
  /**+-(1-F)-We write the Vue.js JS Logic with the Function "data() { return {***} }", like this:_*/
  data() {
    return {
      firstName: "Jhon",
      lastName: "Doe",
      email: "john@gmail.com",
      gender: "male",
      picture: "https://randomuser.me/api/portraits/men/10.jpg",
    };
  },
  methods: {
    async getUser() {
      const res = await fetch("https://randomuser.me/api");
      const { results } = await res.json();
      //console.log(results);

      this.firstName = results[0].name.first;
      this.lastName = results[0].name.last;
      this.email = results[0].email;
      this.gender = results[0].gender;
      this.picture = results[0].picture.large;
    },
  },
}).mount("#App1");
