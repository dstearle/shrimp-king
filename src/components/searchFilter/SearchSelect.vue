<template>

  <!-- Allows us to close search list by clicking outside window -->
  <on-click-outside :do="close">

    <div class="search-select" :class="{ 'is-active': isOpen }">

      <!-- Button that controls search list -->
      <button ref="button" @click="open" type="button" class="search-select-input">

        <!-- Displays selected value -->
        <span v-if="value !== null">{{ value }}</span>

        <!-- Default value if nothing has been selected -->
        <span v-else class="search-select-placeholder">Search by #Tag...</span>

      </button>

      <!-- Shows the dropdown list when activated -->
      <div v-show="isOpen" class="search-select-dropdown">

        <!-- Input for user -->
        <!-- keydown.esc uses the close method -->
        <input 
          class="search-select-search" 
          v-model="search"
          ref="search"
          @keydown.esc="close"
          @keydown.up="highlightPrev"
          @keydown.down="highlightNext"
          @keydown.enter="selectHighlighted"
          @keydown.tab.prevent
        >

        <!-- List of items to be shown -->
        <ul ref="options" class="search-select-options">

          <!-- Generates each item in the search list -->
          <!-- @click="select(option)" allows us to select an option from the list -->
          <li 
            class="search-select-option"
            :class="{ 'is-active': i === highlightedIndex }"
            v-for="(option, i) in filteredOptions"
            :key="option"
            @click="select(option)"
          >{{ option }}</li>

        </ul>

        <!-- If search result not found displays text -->
        <div v-show="filteredOptions.length === 0" class="search-select-empty">No results found for "{{ search }}"</div>

      </div>

    </div>

  </on-click-outside>
  
</template>

<script>

  import OnClickOutside from './OnClickOutside.vue'

  export default {

    components: {

      OnClickOutside

    },

    props: ['value', 'options', 'filterFunction'],

    data() {

      return {

        isOpen: false,
        search: '',
        highlightedIndex: 0,
        arr: []

      }

    },

    computed: {

      // applySearchFilter passed down through props
      filteredOptions() {

        return this.filterFunction(this.search, this.options)

      }

    },

    methods: {

      // Opens the search list when clicked by user
      open() {

        if(this.isOpen) { return }
        this.isOpen = true
        this.$nextTick(() => {

          // When search is opened puts focus into the search input for user
          this.$refs.search.focus()
          this.scrollToHighlighted()

        })

      },

      // Closes the search list when an option is selected
      close() {

        // Prevents focus from happening if list is not open
        if (!this.isOpen) { return }
        this.isOpen = false

        // Sets focus back to input area when search is closed
        this.$refs.button.focus()

      },

      // Selects the item from the list
      select(option) {
        
        // Sets value to match the selected option
        this.$emit('input', option)

        // Resets the search to empty
        this.search = ""

        // Sets index back to the start after selection
        this.highlightedIndex = 0

        this.arr.push(option);
        console.log(this.arr);

        // Closes the search when done
        this.close()

      },

      // Selects the item
      selectHighlighted() {

        // Selects the current highlighted item by index
        this.select(this.filteredOptions[this.highlightedIndex])

      },

      scrollToHighlighted() {

        // Sets the list view to the index when user goes all the way up
        this.$refs.options.children[this.highlightedIndex].scrollIntoView({ block: 'nearest' })

      },

      // Refactor for highlightPrev & highlightNext
      highlight(index) {

        this.highlightedIndex = index

        // Detracts plus one to the index to change the highlight position
        if(this.highlightedIndex < 0) {

          this.highlightedIndex = this.filteredOptions.length - 1

        }

        // Adds plus one to the index to change the highlight position
        if(this.highlightedIndex > this.filteredOptions.length - 1) {

          this.highlightedIndex = 0

        }

        // Sets the list view to the index when user goes all the way up
        this.scrollToHighlighted()

      },

      // Allows user to move up the list with the up arrow key
      highlightPrev() {

        // Detracts plus one to the index to change the highlight position
        // this.highlightedIndex = this.highlightedIndex - 1
        this.highlight(this.highlightedIndex - 1)

      },

      // Allows user to move down the list with the down arrow key
      highlightNext() {

        // Adds plus one to the index to change the highlight position
        // this.highlightedIndex = this.highlightedIndex + 1
        this.highlight(this.highlightedIndex + 1)

      }

    }

  }

</script>

<style>

  .search-select {
    position: relative;
  }

  .search-select-input {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    text-align: left;
    display: block;
    width: 100%;
    border-width: 1px;
    padding: 0.5rem 0.75rem;
    background-color: #fff;
    border-radius: 0.25rem;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .search-select-input:focus {
    outline: 0;
    -webkit-box-shadow: 0 0 0 3px rgba(52, 144, 220, 0.5);
    box-shadow: 0 0 0 3px rgba(52, 144, 220, 0.5);
  }

  .search-select-placeholder {
    color: #8795a1;
  }

  .search-select.is-active .search-select-input {
    -webkit-box-shadow: 0 0 0 3px rgba(52, 144, 220, 0.5);
    box-shadow: 0 0 0 3px rgba(52, 144, 220, 0.5);
  }

  .search-select-dropdown {
    margin-top: 0.25rem;
    margin-bottom: 0.25rem;
    position: absolute;
    right: 0;
    left: 0;
    background-color: #3d4852;
    padding: 0.5rem;
    border-radius: 0.25rem;
    -webkit-box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
    z-index: 50;
  }

  .search-select-search {
    display: block;
    margin-bottom: 0.5rem;
    width: 100%;
    padding: 0.5rem 0.75rem;
    background-color: #606f7b;
    color: #fff;
    border-radius: 0.25rem;
  }

  .search-select-search:focus {
    outline: 0;
  }

  .search-select-options {
    list-style: none;
    padding: 0;
    position: relative;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    max-height: 14rem;
  }

  .search-select-option {
    padding: 0.5rem 0.75rem;
    color: #fff;
    cursor: pointer;
    border-radius: 0.25rem;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .search-select-option:hover {
    background-color: #606f7b;
  }

  .search-select-option.is-active,
  .search-select-option.is-active:hover {
    background-color: #3490dc;
  }
  
  .search-select-empty {
    padding: 0.5rem 0.75rem;
    color: #b8c2cc;
  }

</style>