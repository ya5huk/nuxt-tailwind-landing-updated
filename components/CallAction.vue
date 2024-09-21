<template>
  <section class="call--action">
    <div class="call--container">
      <div class="px-4 text-left text-white max-w-7xl sm:px-6 lg:px-8">
        <h2 class="call--heading">
          <span class="block">Get your business online</span>
        </h2>
        <p class="call--subheading">
          Let's grow your audience, promote services and sell products.
        </p>
      </div>
      <div class="lg:flex-shrink-0 lg:mt-0 text-center mt-4">
        <div class="inline-flex rounded-md shadow">
          <a href="#" class="btn btn--action">
            Get Started Today
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">

</script>

<style lang="postcss" scoped>
.call--action {
  @apply py-5 bg-primary;
}

.call--action .btn--action {
  @apply px-5 py-3 border border-transparent text-primary bg-white;
}

.call--action .call--container {
  @apply max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-10;
}

.call--action .call--heading {
  @apply text-3xl font-bold tracking-tight text-white sm:text-4xl;
}

.call--action .call--subheading {
  @apply max-w-md mx-auto text-base sm:text-lg md:text-xl md:max-w-3xl;
}
</style>



