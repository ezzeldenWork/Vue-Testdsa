<template>
  <TheHeader title="LOL"></TheHeader>
  <StoredResources :resources="storedResources"> </StoredResources>
</template>

<script>
import TheHeader from "./components/layouts/TheHeader.vue";
import StoredResources from "./components/learning-resources/StoredResources.vue";
export default {
  name: "App",
  components: { StoredResources, TheHeader },
  data() {
    return {
      storedResources: [
        {
          id: "official-guide",
          title: "Official Guide",
          description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia, fuga.",
          link: "https://vuejs.org/",
        },
        {
          id: "Google-guide",
          title: "Google Guide",
          description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia, fuga.",
          link: "https://Google.org/",
        },
      ],
    };
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

* {
  box-sizing: border-box;
}

html {
  font-family: "Roboto", sans-serif;
}

body {
  margin: 0;
}
</style>
