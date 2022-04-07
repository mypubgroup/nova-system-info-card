<template>
  <div class="card bg-white">
    <div class="p-6">
      <h3 class="mb-4">Basic System Information</h3>
      <p class="pb-2 truncate"><span class="font-bold pr-3">OS:</span>{{ os }}</p>
      <p class="pb-2 truncate"><span class="font-bold pr-3">PHP Version:</span>{{ php }}</p>
      <p class="pb-2 truncate"><span class="font-bold pr-3">Database:</span>{{ database }}</p>
      <p class="pb-2 truncate"><span class="font-bold pr-3">Laravel Version:</span>{{ laravel }}</p>
      <p class="pb-2 truncate"><span class="font-bold pr-3">Nova Version:</span>{{ nova }}</p>
      <p class="truncate"><span class="font-bold pr-3">UTC time:</span>{{ utc_time }}</p>
    </div>
  </div>
</template>

<script>

  export default {
    props: ['card'],

    data () {
      return {
        os: null,
        php: null,
        database: null,
      }
    },

    mounted () {
      Nova.request().get('/nova-vendor/codeat3/nova-system-info-card/check')
        .then(({data}) => {
          this.os = data.os
          this.php = data.php
          this.database = data.database
          this.laravel = data.laravel
          this.nova = data.nova
          this.utc_time = data.utc_time
        })
    },
  }
</script>
