<template>
  <div>
    <h1>Login Page</h1>
    <form>
      <div>
        <label>username</label><br />
        <input type="text" v-model="username" />
      </div>
      <div>
        <label>Password</label><br />
        <input type="password" v-model="password" />
      </div>
      <div>
        <button type="button" @click="login">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import setAuthToken from "../ulti/setAuthToken";
export default {
  name: "Login",
  data() {
    return {
      username: "hongluyen2",
      password: "123456",
    };
  },
  methods: {
    login() {
      console.log(this.username, this.password);

      fetch("http://localhost:8088/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: this.username,
          password: this.password,
        }),
      })
        .then((res) => {
          console.log(res);
          try {
            let json = res.json();
            return json;
          } catch (error) {
            return new Promise((resolve, reject) => reject(res.text()));
          }
        })
        .then((data) => {
          console.log(data.accessToken);
          if (data) {
            localStorage.setItem(
              "LOCAL_STORAGE_TOKEN_NAME",
              data.accessToken
            );
            setAuthToken(data.accessToken)
          } else {
            localStorage.removeItem("LOCAL_STORAGE_TOKEN_NAME");
          }
        })
        .catch((error) => {
          console.log(error);
        });
      // axios({
      //   method: "post",
      //   url: "http://localhost:8088/login",
      //   data: {
      //     username: this.username,
      //     password: this.password,
      //   },
      // })
      //   .then((response) => {
      //     console.log(response);
      //     if (response.data) {
      //       localStorage.setItem(
      //         "LOCAL_STORAGE_TOKEN_NAME",
      //         response.data.accessToken
      //       );
      //       setAuthToken( response.data.accessToken)
      //     }else{
      //     }
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //   });
    },
  },
};
</script>

<style scoped>
</style>