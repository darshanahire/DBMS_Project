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
          <div class="col-12 col-md-4 d-flex justify-content-center align-items-center flex-column">
            <h2>John Doe</h2>
            <div>
              <div>
                <h6>
               johndoe@gmail.com
                </h6>
                </div>
              </div>
          </div>
          <div class="col-12 col-md-6 text-md-start my-3 my-md-0 d-flex">
            <div class="card col-6">
              <div class="card-body d-flex justify-content-center align-items-center">
                <h4 >Account No : 1234567890</h4>
              </div>
            </div>
            <div class="card col-6">
              <div class="card-body d-flex justify-content-center align-items-center">
                <h4>Account Balance : {{currBal}}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-4"><div class="mt-5">
      <p >
  <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample1" aria-expanded="false" aria-controls="collapseWidthExample">
    Deposit Money
  </button>
</p>
<div style="min-height: 120px;">
  <div class="collapse collapse-horizontal" id="collapseWidthExample1">
    <div class="card card-body" style="width: 300px;height:330px">
     <form  @submit.prevent class="my-5">
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Ammount</label>
    <input type="number" class="form-control" placeholder="Enter Ammount" aria-describedby="emailHelp" v-model="depositAmount">
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" placeholder="Enter Password" id="exampleInputPassword1" v-model="password">
  </div>
  <div class="text-center"><button type="submit" class="btn btn-dark w-50 mt-2" @click="DepositMoney">PAY</button></div>
</form>
    </div>
  </div>
</div>
    </div></div>
      <div class="col-4"><div class="mt-5">
      <p >
  <button class="btn btn-warning" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample2" aria-expanded="false" aria-controls="collapseWidthExample">
    Pay To Someone
  </button>
</p>
<div style="min-height: 120px;">
  <div class="collapse collapse-horizontal" id="collapseWidthExample2">
    <div class="card card-body" style="width: 300px;height:330px">
  <form  @submit.prevent>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">username or Mobile Number</label>
    <input type="number" class="form-control" placeholder="Enter username / Mobile" aria-describedby="emailHelp">
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Ammount</label>
    <input type="number" class="form-control" placeholder="Enter Ammount" aria-describedby="emailHelp">
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" placeholder="Enter Password" id="exampleInputPassword1">
  </div>
  <div class="text-center"><button type="submit" class="btn btn-dark w-50">PAY</button></div>
</form>    </div>
  </div>
</div>
    </div></div>
      <div class="col-4"><div class="mt-5">
      <p >
  <button class="btn btn-danger" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample3" aria-expanded="false" aria-controls="collapseWidthExample">
    Withdraw Money
  </button>
</p>
<div style="min-height: 120px;">
  <div class="collapse collapse-horizontal" id="collapseWidthExample3">
    <div class="card card-body" style="width: 300px;height:330px">
   <form  @submit.prevent>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Ammount</label>
    <input type="number" class="form-control" placeholder="Enter Ammount" aria-describedby="emailHelp" v-model="withdrawAmount">
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" placeholder="Enter Password" id="exampleInputPassword1" v-model="password">
  </div>
  <div class="text-center"><button type="submit" class="btn btn-dark w-50" @click="WithdrowMoney">PAY</button></div>
</form>    </div>
  </div>
</div>
    </div></div>
    </div>
  </div>
</template>

<script>
import http from "@/services/http.vue";
export default {
  name: "UserProfile",
  async mounted() {
    let data = await http.GetUserData();
  },
  data() {
    return {
      userDetails: {
      },
      depositAmount:0,
      withdrawAmount:0,
      password:"",
      currBal:0
    };
  },
    methods: {
    DepositMoney() {
      let payload = {
        depositAmount:this.depositAmount,
        password: this.password
      };
      http
        .DepositMoney(payload)
        .then((data) => {
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    WithdrowMoney() {
      let payload = {
        withdrawAmount:this.withdrawAmount,
        password: this.password
      };
      http
        .WithdrowMoney(payload)
        .then((data) => {
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created:function (){
     http
        .GetCurrBal()
        .then((data) => {
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });

      http.GetUserData()
  }
};
</script>

<style scoped>
form{
  width: 250px;
}
</style>