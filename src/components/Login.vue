<template>
  <div class="hello">
    <div class="index-component">
      <div
        v-if="isAuthenticated"
        class="authentication-status"
      >
        You are successfully authenticated
        <div class="authentication-status__token">
          {{ $auth.getToken() }}
        </div>
      </div>

      <button @click="authLogout()">
        Logout
      </button>

      <hr>

      <button
        class="button--github"
        @click="auth('github')"
      >
        Auth github
      </button>
      <button
        class="button--facebook"
        @click="auth('facebook')"
      >
        Auth facebook
      </button>
      <button
        class="button--google"
        @click="auth('google')"
      >
        Auth google
      </button>
      <button
        class="button--twitter"
        @click="auth('twitter')"
      >
        Auth twitter
      </button>

      <hr>

      <button
        class="button--instagram"
        @click="auth('instagram')"
      >
        Auth instagram
      </button>
      <button
        class="button--bitbucket"
        @click="auth('bitbucket')"
      >
        Auth bitbucket
      </button>
      <button
        class="button--linkedin"
        @click="auth('linkedin')"
      >
        Auth LinkedIn
      </button>
      <button
        class="button--live"
        @click="auth('live')"
      >
        Auth Live
      </button>

      <pre
        v-if="response !== null"
        class="response"
      >{{ JSON.stringify(response, null, 2) }}</pre>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data: function () {
    return {
      isAuthenticated: this.$auth.isAuthenticated(),
      access_token: null,
      response: null
    };
  },
  methods: {
    authLogout: function () {
      var this_ = this;
      this.$auth.logout().then(function () {
        if (!this_.$auth.isAuthenticated()) {
          this_.response = null;
        }

        this_.isAuthenticated = this_.$auth.isAuthenticated();
      });
    },

    auth: function(provider) {
      if (this.$auth.isAuthenticated()) {
        this.$auth.logout();
      }

      this.response = null;

      var this_ = this;
      this.$auth.authenticate(provider).then(function (authResponse) {
        this_.isAuthenticated = this_.$auth.isAuthenticated();
        if (provider === 'facebook') {
          this_.$http.get('https://graph.facebook.com/v2.5/me', {
            params: { access_token: this_.$auth.getToken() }
          }).then(function (response) {
            this_.response = response;
          });
        } else if (provider === 'google') {
          this_.$http.get('https://www.googleapis.com/plus/v1/people/me/openIdConnect').then(function (response) {
            this_.response = response;
          });
        } else if (provider === 'twitter') {
          this_.response = authResponse.body.profile;
        } else if (provider === 'instagram') {
          this_.response = authResponse;
        }
      }).catch(function (err) {
        this_.isAuthenticated = this_.$auth.isAuthenticated();
        this_.response = err;
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*, html, body {
      margin: 0;
      padding: 0;
    }

    html {
      font-size: 14px;
      line-height: 1.5;
    }

    body {
      font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    }

    button {
      background-color: transparent;
      border: 1px solid #ddd;
      border-radius: 3px;
      font-size: inherit;
      font-weight: 700;
      line-height: 2rem;
      padding: 0 2rem;
    }

    button:hover {
      cursor: pointer;
    }

    .button--github     { color: #4078c0; border: 1px solid #4078c0; }
    .button--facebook   { color: #3b5998; border: 1px solid #3b5998; }
    .button--google     { color: #ea4335; border: 1px solid #ea4335; }
    .button--twitter    { color: #1da1f2; border: 1px solid #1da1f2; }
    .button--instagram  { color: #c13584; border: 1px solid #c13584; }
    .button--bitbucket  { color: #205081; border: 1px solid #205081; }
    .button--linkedin  { color: #0077b5; border: 1px solid #0077b5; }
    .button--live  { color: #f65314; border: 1px solid #f65314; }

    .authentication-status {
      background-color: #42b983;
      color: #fff;
      left: 0;
      padding: 16px 32px;
      position: fixed;
      right: 0;
      text-align: center;
      top: 0;
    }

    hr {
      border: 0;
      border-bottom: 1px solid #ddd;
      margin: 2rem 0;
    }

    #app {
      margin: 32px auto;
      max-width: 640px;
      padding-top: 53px;
      word-break: break-all;
    }
</style>
