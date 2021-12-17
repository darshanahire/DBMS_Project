<script>
import axios from "axios";

export default {
  name: "http",
  baseUrl: "http://localhost:5000/api",
  async loginAsBank(payload) {
    return axios.post(this.baseUrl + "/user/login-manager", payload);
  },
  async loginAsUser(payload) {
    return axios.post(this.baseUrl + "/user/login", payload);
  },
  async CreateUser(payload) {
    return axios.post(this.baseUrl + "/user/createAcc", payload);
  },
  async GetUserData(payload) {
    let { data } = await axios.get(this.baseUrl + "/auth/me", payload);
    return data;
  },
  async DepositMoney(payload) {
    let { data } = await axios.post(this.baseUrl + "/tr/deposit", payload);
    return data;
  },
  async WithdrawMoney(payload) {
    let { data } = await axios.post(this.baseUrl + "/tr/withdraw", payload);
    return data;
  },
  async GetCurrBal() {
    let { data } = await axios.get(this.baseUrl + "/tr/current-balance");
    return data;
  },
  async GetUserTransactions() {
    let { data } = await axios.get(this.baseUrl + "/tr/user/all");
    return data;
  },
  async GetAllTransactions() {
    let { data } = await axios.get(this.baseUrl + "/tr/manager/all");
    return data;
  },
  async GetAllAcc() {
    let { data } = await axios.get(this.baseUrl + "/user/all");
    return data;
  },
  async DeleteUser(payload) {
    return axios.post(this.baseUrl + "/manager/delete-user", payload);
  },
};
</script>
