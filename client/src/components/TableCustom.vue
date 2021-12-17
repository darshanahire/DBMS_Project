<template>
  <div>
    <div v-if="!tableData.length" class="card p-2 b-radius-25">
      <div class="card-body">
        <p>{{ emptyTableText }}</p>
      </div>
    </div>
    <div v-else class="card p-2 b-radius-25">
      <div class="card-body">
        <h4 class="card-title text-start">{{ heading }}</h4>
        <b-table
          class="mt-3"
          stacked="md"
          hover
          bordered
          outlined
          striped
          responsive
          sticky-header
          :fields="fields"
          :items="items"
          :keyword="keyword"
          select-mode="multi"
          ref="customTable"
          @row-selected="onRowSelected"
          :selectable="isSelectable"
          :per-page="isPagination ? perPage : 0"
          :current-page="currentPage"
        >
          <template #cell(selected)="row">
            <b-form-group>
              <b-form-checkbox
                @change="selectRow(row)"
                v-model="row.rowSelected"
                size="lg"
              >
              </b-form-checkbox>
            </b-form-group>
          </template>
          <template #cell(delete)="row">
            <button class="btn btn-danger" @click="deleteUser(row.item)">
              Delete
            </button>
          </template>
        </b-table>
        <b-pagination
          v-if="isPagination"
          v-model="currentPage"
          :total-rows="rows"
          :per-page="perPage"
          aria-controls="my-table"
          first-number
          last-number
        ></b-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import http from "../services/http.vue";
export default {
  name: "tableCustom",
  props: {
    heading: String,
    emptyTableText: String,
    tableData: Array,
    fields: Array,
    isSelectable: Boolean,
    isPagination: Boolean,
    perPage: {
      type: Number,
      default: 5,
    },
  },
  data() {
    return {
      keyword: "",
      selectedRows: [],
      currentPage: 1,
    };
  },
  methods: {
    onRowSelected(itemSelected) {
      this.selectedRows = itemSelected;
      this.$emit("current-row-selected", itemSelected);
    },
    selectRow: function (row) {
      if (row.rowSelected) {
        this.$refs.customTable.selectRow(row.index);
      } else {
        this.$refs.customTable.unselectRow(row.index);
      }
    },
    async deleteUser(user) {
      console.log(user);
      http
        .DeleteUser(user)
        .then((data) => {
          alert("user deleted");
          this.$router.go();
        })
        .catch((err) => {
          alert("user deletion failed");
        });
    },
  },
  computed: {
    items() {
      let filteredData = this.tableData;
      // name filter
      filteredData = this.keyword
        ? filteredData.filter((item) => {
            return (
              (item.name !== undefined && item.name.includes(this.keyword)) ||
              (item.email !== undefined && item.email.includes(this.keyword)) ||
              (item.source !== undefined &&
                item.source.includes(this.keyword)) ||
              (item.company !== undefined &&
                item.company.includes(this.keyword))
            );
          })
        : filteredData;
      return filteredData;
    },
    rows() {
      return this.items.length;
    },
  },
};
</script>
<style>
.multiselect__content-wrapper,
.multiselect {
  width: fit-content !important;
}

.multiselect__option {
  width: 100% !important;
}
</style>
 
