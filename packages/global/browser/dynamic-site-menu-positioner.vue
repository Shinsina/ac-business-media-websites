<template>
  <div class="site-menu-listener" />
</template>

<script>
import EventBus from '@mindful-web/marko-web/browser/event-bus';

export default {
  created() {
    EventBus.$on('site-menu-expanded', (expanded) => {
      if (expanded) {
        const header = document.getElementsByClassName('site-navbar--top')[0];
        const menu = document.getElementsByClassName('site-menu')[0];
        menu.style.top = `${header.offsetTop + header.offsetHeight}px`;
      }
    });
  },
};
</script>
