<template>
  <div>
    <div class="text-center my-3">
    <h2>Bank Account Manager</h2>
     <div class="card mt-4">
      <div class="card-body font-14">
        <div class="row text-center">
          <div class="col-12 col-md-2 align-items-center">
            <img
              src="@/assets/bankAvatar.jpg"
              class="img-fluid rounded-circle border"
              width="100px"
              alt="user"
            />
          </div>
          <div
            class="
              col-12 col-md-4
              d-flex
              justify-content-center
              align-items-center
              flex-column
            "
          >
            <h2>{{ managerDetails.username }}</h2>
            <div>
              <div>
                <h6>{{ managerDetails.email }}</h6>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 text-md-start my-3 my-md-0 d-flex">
            <div class="card col-6">
              <div
                class="
                  card-body
                  d-flex
                  justify-content-center
                  align-items-center
                "
              >
                <h4>Bank No : {{ managerDetails.bank_no }}</h4>
              </div>
            </div>
            <div class="card col-6">
              <div
                class="
                  card-body
                  d-flex
                  justify-content-center
                  align-items-center
                  px-1
                "
              >
                <h4>Total Transaction: 140</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <h5 class="text-success my-3">List of Accounts</h5>
    <TableCustom
          :tableData="tableDataAccounts"
          :fields="table_fieldsAccounts"
          :isSelectionBox="true"
          :isSelectable="true"
          :isPagination="true"
          emptyTableText="No Accounts Fount"
        />
        <hr>
    <h5 class="text-warning my-3">Transaction History</h5>
     <TableCustom
          :tableData="tableData"
          :fields="table_fields"
          :isSelectionBox="true"
          :isSelectable="true"
          :isPagination="true"
          emptyTableText="no transaction"
        />
    </div>
  </div>
</template>

<script>
import http from "@/services/http.vue";
import TableCustom from "../../components/TableCustom.vue";
export default {
  name: "BankProfile",
  components: {
    TableCustom,
  },
   async mounted() {
    // this.managerDetails = await http.GetUserData({});
    this.tableData = await http.GetUserTransactions();
    
    this.tableDataAccounts = await http.GetAllAcc();
    
  },
  data(){
    return{
managerDetails:{
  username: 'Manager',
  email: 'manager@gmail.com',
  bank_no: 123456789
},
 table_fields: [
        { label: "Transaction ID", key: "tr_id" },
        {
          label: "Transaction Type",
          key: "tr_type",
        },
        {
          label: "Transaction Amount",
          key: "tr_amount",
        },
        {
          label: "Date",
          key: "created_time",
        },
      ],
      tableData: [],
 table_fieldsAccounts: [
        { label: "UserName", key: "username" },
        {
          label: "Account Number",
          key: "acc_no",
        },
        {
          label: "Email",
          key: "email",
        },
        {
          label: "Mobile",
          key: "mobile_no",
        },
      ],
      tableDataAccounts: [],
    }
  }
};
</script>

<style>
</style>