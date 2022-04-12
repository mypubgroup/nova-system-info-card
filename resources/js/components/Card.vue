<template>
  <div class="card bg-white">
    <div class="p-6">
      <h3 class="mb-4">{{ __('Basic System Information') }}</h3>
      <table class="w-full text-left table-collapse">
        <tbody class="align-baseline">
          <tr>
            <td class="py-2 font-bold">{{ __('Operating System') }}</td>
            <td class="p-2">{{ os }}</td>
          </tr>
          <tr>
            <td class="py-2 font-bold">{{ __('PHP Version') }}</td>
            <td class="p-2">{{ php }}</td>
          </tr>
          <tr>
            <td class="py-2 font-bold">{{ __('Database') }}</td>
            <td class="p-2">{{ database }}</td>
          </tr>
          <tr>
            <td class="py-2 font-bold">{{ __('Laravel Version') }}</td>
            <td class="p-2">{{ laravel }}</td>
          </tr>
          <tr>
            <td class="py-2 font-bold">{{ __('Nova Version') }}</td>
            <td class="p-2">{{ nova }}</td>
          </tr>
          <tr>
            <td class="py-2 font-bold">{{ __('UTC Time') }}</td>
            <td class="p-2">{{ utc_time }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'card',
  ],

  data() {
    return {
      os: null,
      php: null,
      database: null,
    }
  },

  mounted() {
    Nova.request()
      .get('/nova-vendor/codeat3/nova-system-info-card/check')
      .then(({ data }) => {
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
