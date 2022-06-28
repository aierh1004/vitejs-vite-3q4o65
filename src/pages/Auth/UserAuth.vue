<template>
  <form @submit.prevent="submitForm">
    <base-card>
      <div class="form-control">
        <label for="email">Email</label>
        <input type="email" id="email" v-model.trim="email" />
      </div>
      <p v-if="!formIsValid">
        Please enter a valid email and password must be at least characters
        long.
      </p>
      <div class="form-control">
        <label for="password">Password</label>
        <input type="password" id="password" v-model.trim="password" />
      </div>
      <base-button>Login</base-button>
      <base-button type="button" mode="flat" @click="switchAuthMode"
        >SignUp instead</base-button
      >
    </base-card>
  </form>
</template>
<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      formIsValid: true,
      mode: 'login',
    };
  },
  computed: {
    submitButtonCaption() {},
    switchButtonCaption() {},
  },
  method: {
    submitForm() {
      this.formIsValid = true;
      if (
        this.email === '' ||
        this.email.includes('@') ||
        this.password.length < 6
      ) {
        this.formIsValid = false;
        return;
      }
      //second http request...
    },
    switchAuthMode() {
      if (this.mode === 'signUp') {
        this.mode = 'login';
      } else {
        this.mode = 'signUp';
      }
    },
  },
};
</script>
<style scoped>
form {
  margin: 1rem;

  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}
</style>
