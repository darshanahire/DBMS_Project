<script>
import axios from "axios";

export default {
  name: "http",
  baseUrl: "http://localhost:5000/api",
  async loginAsBank(payload) {
    return axios.post(this.baseUrl + "/login/bank", payload);
  },
  async loginAsUser(payload) {
    return axios.post(this.baseUrl + "/user/login", payload);
  },
  async CreateUser(payload) {
    return axios.post(this.baseUrl + "/createAcc", payload);
  },
  async GetUserData(payload) {
    let { data } = await axios.get(this.baseUrl + "/user", payload);
    return data;
  },
  async DepositMoney(payload) {
    let { data }=await axios.post(this.baseUrl + "tr/deposit", payload);
    return data;
  },
  async WithdrowMoney(payload) {
    let { data }=await axios.post(this.baseUrl + "tr/withdraw", payload);
    return data;
  },
  async GetCurrBal() {
    let { data }=await axios.get(this.baseUrl + "/current-balance");
    return data;
  },
};
</script>
