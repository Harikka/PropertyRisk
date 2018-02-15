<template>
  <div id="app">
      <div style="float:right;padding-right:15px;">
      <!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
  Create
</button>
  </div>
    <router-view/>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">CreateRisk</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
         <form>
          <table>
            <tr class="form-group">
              <td style="padding-left:8px;"><label for=lblRiskname class="col-form-label" style="float:left;">Name</label></td>
              <td><input type="text" class="form-control" id="Risk-name" v-model="User.RiskName"></td>
            </tr>
            <tr class="ContentSectionsBreak"></tr>
            <tr class="form-group">
              <td style="padding-left:8px;"><label for=lblDescription class="col-form-label" style="float:left;">Description</label></td>
              <td><textarea class="form-control" id="message-text" v-model="User.Description"></textarea></td>
            </tr>
            <tr class="ContentSectionsBreak"></tr>
            <tr class="form-group">
              <td style="padding-left:8px;"><label for=lblRisktype class="col-form-label" style="float:left;">Type</label></td>
              <td>
                    <div class="form-group">
                <select class="form-control selectpicker show-tick" id="PropertyType" v-model="User.Propertytype">
                  <option>House</option>
                  <option>AutoMobile</option>
                  <option>Medical</option>
                </select>
              </div>
              </td>
            </tr>
            <tr class="ContentSectionsBreak"></tr>
            <tr class="form-group">
              <td style="padding-left:8px;"><label for=lblexpense class="col-form-label" style="float:left;">Expenses limit</label></td>
              <td><input type="text" class="form-control" id="Risk-expenses" v-model="User.MedicalExpenses"></td>  
               <td style="padding-left:25px;"><label for=lblexpense class="col-form-label" style="float:left;">$</label></td>
        </tr>
        <tr class="ContentSectionsBreak"></tr>
            <tr class="form-group">
              <td style="padding-left:8px;"><label for=lblDescription class="col-form-label" style="float:left;">Type of Insurance</label></td>
              <td> <div class="form-group">
                <select class="form-control selectpicker show-tick" id="PropertyType" v-model="User.ExpenseType">
                  <option>Self</option>
                  <option>Family</option>
                </select>
              </div></td>  
        </tr>
          </table>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <router-link to="/">
        <button type="button" class="btn btn-primary" data-dismiss="modal" @click="addToAPI">Save changes</button>
        </router-link>
      </div>
    </div>
  </div>
</div>
  </div>
</template>

<script>
import axios from "axios";
import jquery from "jquery";
export default {
  name: "App",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      User: {
        RiskName: "",
        Description: "",
        Propertytype: "",
        MedicalExpenses: "",
        ExpenseType: ""
      }
    };
  },
  methods: {
    addToAPI() {
      let newUser = {
        RiskName: this.User.RiskName,
        Description: this.User.Description,
        Propertytype: this.User.Propertytype,
        MedicalExpenses: this.User.MedicalExpenses,
        ExpenseType: this.User.ExpenseType
      };
      console.log(newUser);
      axios
        .post("http://localhost:3000/users", newUser)
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log("not record successfully");
        });
    }
  }
};
</script>
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.ContentSectionsBreak {
  height: 10px;
}
</style>
