<script setup>

</script>

<template>
  <div class="hero-buttons">
    <RouterLink to="/register" class="button register">Register</RouterLink>
    <RouterLink to="/login" class="button login">Login</RouterLink>
    <h1>VFlix</h1>
  </div>
</template>

<style scoped>
h1 {
  margin-left: auto;
  padding: 1%;
  color: #4073ad;
}

.hero-buttons {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.button {
  margin-right: 10px;   
}

.hero-buttons .button {
  display: inline-block;
  background-color: #4073ad;
  color: #ffffff;
  padding: 10px 30px;
  font-size: 18px;
  text-align: center;
  text-decoration: none;
  border: none;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.hero-buttons .button:hover {
  background-color: #305a8a;
}
</style>
