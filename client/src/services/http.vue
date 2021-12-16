<script>
import axios from "axios";

export default {
  name: "http",
  baseUrl: "",
  async loginAsBank(payload) {
    return await axios.post(this.baseUrl + "/login/bank", payload);
  },

  async loginAsUser(payload) {
    return await axios.post(this.baseUrl + "/login/user", payload);
  },
};
</script>
