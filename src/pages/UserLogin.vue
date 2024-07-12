<template>
  <q-form @submit="onSubmit">
    <q-input v-model="email" label="Username" />
    <q-input v-model="password" label="Password" type="password" />
    <q-btn type="submit" label="Login" />
  </q-form>
</template>

<script>
// import axios from "boot/axios";
import axios from "axios";

export default {
  name: "UserLogin",
  data() {
    return {
      email: "admin@gmail.com",
      password: "admin",
    };
  },
  methods: {
    async onSubmit() {
      try {
        // const token = document
        //   .querySelector('meta[name="csrf-token"]')
        //   .getAttribute("content");

        // axios.defaults.headers.common["X-CSRF-TOKEN"] = token;

        axios.defaults.withCredentials = true;

        axios
          .get("http://127.0.0.1:8000/api/sanctum/csrf-cookie")
          .then((response) => {
            // Ahora puedes hacer tu solicitud de inicio de sesión
            axios
              .post("http://127.0.0.1:8000/api/login", {
                email: this.email,
                password: this.password,
              })
              .then((response) => {
                console.log("Login successful:", response.data);
              })
              .catch((error) => {
                console.error("Error during login:", error.response.data);
              });
          })
          .catch((error) => {
            console.error("Error fetching CSRF token:", error);
          });

        // Obtén el token CSRF de la cookie XSRF-TOKEN
        // const csrfToken = this.$cookies.get("XSRF-TOKEN");
        // Realiza la solicitud POST incluyendo el token CSRF
        //   const response = await axios.post("http://127.0.0.1:8000/api/login", {
        //     // _token: csrfToken,
        //     email: this.email,
        //     password: this.password,
        //   });
        //   localStorage.setItem("token", response.data.token);
        //   this.$router.push("/");
      } catch (error) {
        console.error("Error logging in", error);
      }
    },
    // login() {
    //   axios
    //     .post("/login", {
    //       email: this.email,
    //       password: this.password,
    //     })
    //     .then((response) => {
    //       console.log(response.data);
    //     })
    //     .catch((error) => {
    //       console.error("Error de login:", error);
    //     });
    // },
  },
};
</script>

<style></style>
