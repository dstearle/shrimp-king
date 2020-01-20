<script>

    // This component will allow us to close the search list by clicking outside of the area
    export default {

        props: ['do'],
        mounted() {
            // Listens for the even of clicking outside the component
            const listener = (e) => {

                // If user clicks inside the component the event does not run
                if(e.target === this.$el || this.$el.contains(e.target)) {
                    return
                }

                this.do()
            }

            document.addEventListener('click', listener)
            this.$once('hook:beforeDestroy', () => {
                document.removeEventListener('click', listener)
            })
        },
        render() {
            return this.$slots.default[0]
        }

    }

</script>