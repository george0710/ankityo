<script>
export default {
  created () {
    window.scroll(0,0);
  },
  methods:{
    goTo(routeName,params) {
      let self = this;
      self.$nextTick( function() {

        // Show Vue Loading Layer
        // let loader = this.$loading.show({
        //   loader: 'spinner',
        //   color: '#e8b30f',
        //   backgroundColor: '#000',
        //   opacity: 0.5,
        // });
        console.log(routeName);
        console.log(params);
        // Retrieve new page
        self.$router.push(

          // First param : location
          routeName,
          params,

          // Second param : onComplete
          () => setTimeout(() => loader.hide(), 3 * 1000)
        );
      });
    }
  }

};
</script>
