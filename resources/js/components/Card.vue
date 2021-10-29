<template>
  <div class="card bg-white">
    <div class="py-4 px-4 text-sm">
      <h3 class="mb-2">Basic System Information</h3>
      <p class="pb-1"><span class="font-bold pr-3 truncate">OS:</span>{{ os }}</p>
      <p class="pb-1"><span class="font-bold pr-3 truncate">PHP Version:</span>{{ php }}</p>
      <p class="pb-1"><span class="font-bold pr-3 truncate">Database:</span>{{ database }}</p>
      <p class="pb-1">
          <span class="font-bold pr-3 truncate">Laravel Version:</span>{{ laravel }}
          <span class="font-bold pr-3 truncate">Nova Version:</span>{{ nova }}
        </p>
      <p class="pb-1">
          <span class="font-bold pr-3 truncate">UTC time:</span>{{ utc_time }}
      </p>
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
