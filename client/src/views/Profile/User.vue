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
    <div class="row p-2">
      <div
        class="
          col-4
          d-flex
          justify-content-around
          flex-column
          align-items-center
        "
      >
        <div class="">
          <div>
            <button
              type="button"
              class="btn btn-primary moneyBtn"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Deposit Money
            </button>
          </div>

          <!-- Modal -->
          <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">
                    Deposit Money
                  </h5>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body d-flex justify-content-center">
                  <form @submit.prevent class="">
                    <div class="mb-3">
                      <label for="exampleInputEmail1" class="form-label">
                        Enter Amount to Deposite</label
                      >
                      <input
                        type="number"
                        class="form-control"
                        placeholder="Enter Ammount"
                        aria-describedby="emailHelp"
                        v-model="depositAmount"
                      />
                    </div>
                  </form>
                </div>
                <div class="modal-footer d-flex justify-content-center">
                  <button
                    type="button"
                    class="btn btn-danger"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    class="btn btn-primary"
                    data-bs-dismiss="modal"
                    @click="DepositMoney"
                  >
                    Deposit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="">
          <div>
            <div>
              <button
                type="button"
                class="btn btn-warning moneyBtn"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal1"
              >
                Withdraw Money
              </button>
            </div>

            <!-- Modal -->
            <div
              class="modal fade"
              id="exampleModal1"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">
                      Withdraw Money
                    </h5>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body d-flex justify-content-center">
                    <form @submit.prevent class="">
                      <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">
                          Enter Amount to Withdraw</label
                        >
                        <input
                          type="number"
                          class="form-control"
                          placeholder="Enter Ammount"
                          aria-describedby="emailHelp"
                          v-model="withdrawAmount"
                        />
                      </div>
                    </form>
                  </div>
                  <div class="modal-footer d-flex justify-content-center">
                    <button
                      type="button"
                      class="btn btn-danger"
                      data-bs-dismiss="modal"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      class="btn btn-warning"
                      data-bs-dismiss="modal"
                      @click="WithdrawMoney"
                    >
                      Withdraw
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-8 mt-3">
        <TableCustom
          :tableData="tableData"
          :fields="table_fields"
          :isSelectionBox="true"
          heading="Transactions History"
          :isSelectable="true"
          :isPagination="true"
          emptyTableText="no transaction"
        />
      </div>
    </div>
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
  async created() {
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
        .then(async (data) => {
          this.userDetails = await http.GetUserData({});
          this.tableData = await http.GetUserTransactions();
          this.currBal = this.userDetails.acc_bal;
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
        .then(async (data) => {
          this.userDetails = await http.GetUserData({});
          this.tableData = await http.GetUserTransactions();
          this.currBal = this.userDetails.acc_bal;
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
.moneyBtn {
  height: 60px !important;
  width: 300px;
}
</style>