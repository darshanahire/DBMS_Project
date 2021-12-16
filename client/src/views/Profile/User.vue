<template>
  <div class="container-fluid">
    <div class="card mt-4">
      <div class="card-body font-14">
        <div class="row text-center">
          <div class="col-12 col-md-2 align-items-center">
            <img
              src="@/assets/avatar.png"
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
            <h2>{{ userDetails.username }}</h2>
            <div>
              <div>
                <h6>{{ userDetails.email }}</h6>
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
                <h4>Account No : {{ userDetails.acc_no }}</h4>
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
                <h4>Account Bal. : {{ currBal }}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-4">
        <div class="mt-5">
          <p>
            <button
              class="btn btn-primary"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseWidthExample1"
              aria-expanded="false"
              aria-controls="collapseWidthExample"
            >
              Deposit Money
            </button>
          </p>
          <div style="min-height: 120px">
            <div
              class="collapse collapse-horizontal"
              id="collapseWidthExample1"
            >
              <div class="card card-body" style="width: 300px; height: 330px">
                <form @submit.prevent class="my-5">
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label"
                      >Amount</label
                    >
                    <input
                      type="number"
                      class="form-control"
                      placeholder="Enter Ammount"
                      aria-describedby="emailHelp"
                      v-model="depositAmount"
                    />
                  </div>
                  <div class="text-center">
                    <button
                      type="submit"
                      class="btn btn-dark w-50 mt-2"
                      @click="DepositMoney"
                    >
                      PAY
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-4">
        <div class="mt-5">
          <p>
            <button
              class="btn btn-warning"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseWidthExample2"
              aria-expanded="false"
              aria-controls="collapseWidthExample"
            >
              Pay To Someone
            </button>
          </p>
          <div style="min-height: 120px">
            <div
              class="collapse collapse-horizontal"
              id="collapseWidthExample2"
            >
              <div class="card card-body" style="width: 300px; height: 330px">
                <form @submit.prevent>
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label"
                      >username or Mobile Number</label
                    >
                    <input
                      type="number"
                      class="form-control"
                      placeholder="Enter username / Mobile"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label"
                      >Ammount</label
                    >
                    <input
                      type="number"
                      class="form-control"
                      placeholder="Enter Ammount"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div class="text-center">
                    <button type="submit" class="btn btn-dark w-50">PAY</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-4">
        <div class="mt-5">
          <p>
            <button
              class="btn btn-danger"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseWidthExample3"
              aria-expanded="false"
              aria-controls="collapseWidthExample"
            >
              Withdraw Money
            </button>
          </p>
          <div style="min-height: 120px">
            <div
              class="collapse collapse-horizontal"
              id="collapseWidthExample3"
            >
              <div class="card card-body" style="width: 300px; height: 330px">
                <form @submit.prevent>
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label"
                      >Amount</label
                    >
                    <input
                      type="number"
                      class="form-control"
                      placeholder="Enter Ammount"
                      aria-describedby="emailHelp"
                      v-model="withdrawAmount"
                    />
                  </div>
                  <div class="text-center">
                    <button
                      type="submit"
                      class="btn btn-dark w-50"
                      @click="WithdrawMoney"
                    >
                      PAY
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <TableCustom
      :tableData="tableData"
      :fields="table_fields"
      :isSelectionBox="true"
      heading="Transactions"
      :isSelectable="true"
      :isPagination="true"
      emptyTableText="no transaction"
    />
  </div>
</template>

<script>
import http from "@/services/http.vue";
import TableCustom from "../../components/TableCustom.vue";
export default {
  name: "UserProfile",
  components: {
    TableCustom,
  },
  async mounted() {
    this.userDetails = await http.GetUserData({});
    this.tableData = await http.GetUserTransactions();
    this.currBal = this.userDetails.acc_bal;
  },
  data() {
    return {
      userDetails: {},
      depositAmount: 0,
      withdrawAmount: 0,
      password: "",
      currBal: 0,

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
    };
  },
  methods: {
    DepositMoney() {
      let payload = { depositAmount: this.depositAmount };
      http
        .DepositMoney(payload)
        .then((data) => {
          alert("deposit successfully !!!");
        })
        .catch((err) => {
          alert("deposit failed !!!");
        });
    },

    WithdrawMoney() {
      let payload = { withdrawAmount: this.withdrawAmount };
      http
        .WithdrawMoney(payload)
        .then((data) => {
          alert("withdraw successfully !!!");
        })
        .catch((err) => {
          alert("Insufficient Balance");
        });
    },
  },
};
</script>

<style scoped>
form {
  width: 250px;
}
</style>