<template>
  <div id="Top" v-on:click="state = !state">{{ time }}</div>
</template>

<script>
export default {
  name: 'Top',
  data() {
    return {
      state: true,
      time: '',
    };
  },
  created() {
    setInterval(() => this.updateTime(), 1 * 100);
  },
  methods: {
    updateTime: function() {
      let Time = new Date();
      let hours = Time.getHours().toString();
      hours.length < 2 ? (hours = '0' + hours) : null;
      let minutes = Time.getMinutes().toString();
      minutes.length < 2 ? (minutes = '0' + minutes) : null;
      if (this.state) this.time = hours + ':' + minutes;
      else {
        let seconds = Time.getSeconds().toString();
        seconds.length < 2 ? (seconds = '0' + seconds) : null;
        this.time = hours + ':' + minutes + ':' + seconds;
      }
    },
  },
};
</script>
