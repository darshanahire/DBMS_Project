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
    <hr>
    <h6 class="text-success">List of Accounts</h6>
    <hr>
    <hr>
    <h6 class="text-warning">Transaction History</h6>
    <hr>
    </div>
  </div>
</template>

<script>
export default {
  name: "BankProfile",
  data(){
    return{
managerDetails:{
  username: 'Manager',
  email: 'manager@gmail.com',
  bank_no: 123456789
}
    }
  }
};
</script>

<style>
</style>