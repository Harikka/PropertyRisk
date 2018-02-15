<template>
<div class="row" style="padding-left:30px;">
  <div class="col-sm-3 col-xs-6" style="padding-top:10px;">
    <div class="card">
      <div class="card-block" style="height:140px">
        <table>
          <tr>
         <td>
         <h4 class="card-title">Total Risk created for House</h4>
         </td>
          </tr>
          <tr>
          <td style="float:left;padding-left:30px;padding-right:60px;margin-top:-10px;">
         <img :src="House" style="width:100px;height:100px;padding-top:10px;padding-bottom:10px;"/>
          </td>
          <td style="float:left">
        <h1 class="card-text" style="font-size:80px;">{{property.length}}</h1>
          </td>
        </tr>
        </table>
      </div>
      <div>
        <router-link to="/Property">
        <a href="#" class="btn btn-primary" style="width:250px">Read More...</a>
        </router-link>
      </div>
    </div>
  </div>
  <div class="col-sm-3 col-xs-6" style="padding-top:10px;">
    <div class="card">
      <div class="card-block" style="height:140px;">
         <table>
          <tr>
         <td>
        <h4 class="card-title">Total Risk created for Auto Mobile</h4>
        </td>
          </tr>
          <tr>
          <td style="float:left;padding-left:30px;padding-right:60px;margin-top:-10px;">
        <img :src="Automobile" style="width:100px;height:100px;padding-top:10px;padding-bottom:10px;"/>
          <td style="float:left">        
        <h1 class="card-text" style="font-size:60px;">{{AutoMobile.length}}</h1>
         </td>
        </tr>
        </table>
      </div>
      <div>
        <router-link to="/AutoMobile">
        <a href="#" class="btn btn-primary" style="width:250px">Read More...</a>
        </router-link>
      </div>
    </div>
  </div>
   <div class="col-sm-3 col-xs-6" style="padding-top:10px;">
    <div class="card">
      <div class="card-block" style="height:140px">
         <table>
          <tr>
         <td>
          <h4 class="card-title">Total Risk created for Medical</h4>
         </td>
          </tr>
          <tr>
          <td style="float:left;padding-left:30px;padding-right:60px;margin-top:-10px;">
          <img :src="medical" style="width:100px;height:100px;padding-top:10px;padding-bottom:10px;"/>
          <td style="float:left">   
        <h1 class="card-text" style="font-size:60px;">{{Medical.length}}</h1>
         </td>
        </tr>
        </table>
      </div>
      <div>
        <router-link to="/Medical">
        <a href="#" class="btn btn-primary" style="width:250px">Read More...</a>
        </router-link>
      </div>
    </div>
  </div>
</div>
</template>
<script>
import axios from "axios";
import moment from "moment";
import House from "../assets/House-icon.png";
import Automobile from "../assets/Automobile.png";
import medical from "../assets/Medical.png";
export default {
  name: "Dashboard",
  data() {
    return {
      property: [].length,
      AutoMobile: [].length,
      Medical: [].length,
      House: House,
      Automobile: Automobile,
      medical: medical
    };
  },
  methods: {
    moment
  },
  mounted() {
    axios
      .get("http://localhost:3000/House")
      .then(response => {
        console.log(response.data);
        this.property = response.data;
      })
      .catch(error => {
        console.log(error);
      }),
      axios
        .get("http://localhost:3000/AutoMobile")
        .then(response => {
          console.log(response.data);
          this.AutoMobile = response.data;
        })
        .catch(error => {
          console.log(error);
        }),
      axios
        .get("http://localhost:3000/Medical")
        .then(response => {
          console.log(response.data);
          this.Medical = response.data;
        })
        .catch(error => {
          console.log(error);
        });
  }
};
</script>