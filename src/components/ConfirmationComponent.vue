<template>
  <div>
    <h1>Subscription Confirmation</h1>
    <div v-if="loading">Confirming subscription...</div>
    <div v-if="confirmationMessage" :class="{ 'success': confirmed, 'error': !confirmed }">
      {{ confirmationMessage }}
    </div>
    <div v-if="confirmed">
      <a href="#" @click.prevent="deleteSubscription">Unsubscribe</a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: true,
      confirmationMessage: '',
      confirmed: false,
      token: '' // Add a data property to store the token
    };
  },
  watch: {
    $route(to, from) {
      // Watch for changes in the route parameters
      this.token = to.params.token;
      this.confirmSubscription();
    }
  },
  mounted() {
    // Initial call to confirm subscription
    this.token = this.$route.params.token;
    this.confirmSubscription();
  },
  methods: {
    confirmSubscription() {
      // Send a request to confirm subscription using the token
      fetch(`https://comfortmeubel.netlify.app/confirm/${this.token}`, { // Use the correct base URL
        method: 'PUT'
      })
          .then(response => response.json())
          .then(data => {
            if (data.message === 'Successfully confirmed!') {
              // Show confirmation message
              this.confirmationMessage = data.message;
              this.confirmed = true;
            } else {
              // Show error message
              this.confirmationMessage = data.message;
            }
          })
          .catch(error => {
            console.error('Error:', error);
            // Show error message
            this.confirmationMessage = 'Error confirming subscription. Please try again later.';
          })
          .finally(() => {
            this.loading = false;
          });
    },
    deleteSubscription() {
      // Send a delete request to the specified backend using the token
      fetch(`https://two324-1dvo-wpl2-groep-06-backend-1.onrender.com/api/subscriptions`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({token: this.token})
      })
          .then(response => response.json())
          .then(data => {
            if (data.message === 'Successfully unsubscribed!') {
              this.confirmationMessage = data.message;
              this.confirmed = false;
            } else {
              this.confirmationMessage = data.message;
            }
          })
          .catch(error => {
            console.error('Error:', error);
            this.confirmationMessage = 'Error unsubscribing. Please try again later.';
          })
    }
  }
};
</script>

<style>
.success {
  color: green;
}

.error {
  color: red;
}
</style>
