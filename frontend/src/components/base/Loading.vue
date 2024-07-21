<template>
  <div class="text-center">
    <span class="loader"></span>
  </div>

</template>

<style scoped>
.loader {
  width: 80px;
  height: 80px;
  border: 7px solid #000;
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}

@keyframes rotation {
  0% {
      transform: rotate(0deg);
  }
  100% {
      transform: rotate(360deg);
  }
}
</style>