<script>
import axios from "axios";

export default {
  name: "http",
  baseUrl: "http://localhost:5000",
  async loginAsBank(payload) {
    return axios.post(this.baseUrl + "/login/bank", payload);
  },
  async loginAsUser(payload) {
    return axios.post(this.baseUrl + "/login/user", payload);
  },
  async CreateUser(payload) {
    return axios.post(this.baseUrl + "/createAcc", payload);
  },
  async GetUserData(payload) {
    let { data } = await axios.get(this.baseUrl + "/user", payload);
    return data;
  },
};
</script>
