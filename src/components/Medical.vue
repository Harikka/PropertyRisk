<template>
<div id="Medical">
<div class="row" style="padding-left:30px;">
  <div class="col-sm-3 col-xs-6" v-for="property_alias in property" style="padding-top:10px;">
    <div class="card">
      <div class="card-block" style="height:100px;">

                     <h3 class="card-title">{{property_alias.RiskName}}</h3>
                    <p class="card-text">{{property_alias.Description}}</p>
                    </div>
      <div>
                    <a href="#" class="btn btn-primary">{{moment(property_alias.created_date).format('MM-DD-YYYY hh:mm a')}}</a>
                    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#DetailsModal" style="font-weight:bold">
                    Read More>
                    </button>
                    <!-- Modal -->
            <div class="modal fade" id="DetailsModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Details of Risk</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <table>
                    <tr class="form-group">
                        <td style="padding-left:8px;font-weight:bold;"><label for=lblRiskname class="col-form-label" style="float:left;">Name</label></td>
                        <td style="padding-left:30px;"><label for=lblRiskreviewname class="col-form-label" style="float:left;">{{property_alias.RiskName}}</label></td>
                        </tr>
                        <tr class="ContentSectionsBreak"></tr>
                        <tr class="form-group">
                        <td style="padding-left:8px;font-weight:bold;"><label for=lblRiskname class="col-form-label" style="float:left;">Description</label></td>
                        <td style="padding-left:30px;"><label for=lblRiskreviewname class="col-form-label" style="float:left;">{{property_alias.Description}}</label></td>
                        </tr>
                        <tr class="ContentSectionsBreak"></tr>
                                <tr class="form-group">
                        <td style="padding-left:8px;font-weight:bold;"><label for=lblpropertytype class="col-form-label" style="float:left;">Type</label></td>
                        <td style="padding-left:30px;"><label for=lblReveiewpropertytype class="col-form-label" style="float:left;">{{property_alias.Propertytype}}</label></td>
                        </tr>
                        <tr class="ContentSectionsBreak"></tr>
                        <tr class="form-group">
                        <td style="padding-left:8px;font-weight:bold;"><label for=lblmedicalexpenses class="col-form-label" style="float:left;">Expenses limit</label></td>
                        <td style="padding-left:30px;"><label for=lblreviewmedicalexpense class="col-form-label" style="float:left;">{{property_alias.MedicalExpenses}} $</label></td>
                        </tr>
                        <tr class="ContentSectionsBreak"></tr>
                        <tr class="form-group">
                        <td style="padding-left:8px;font-weight:bold;"><label for=lblexpensetype class="col-form-label" style="float:left;">Type of Insurance</label></td>
                        <td style="padding-left:30px;"><label for=expensetype class="col-form-label" style="float:left;">{{property_alias.ExpenseType}}</label></td>
                        </tr>
                        <tr class="ContentSectionsBreak"></tr>   
            </table>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
                </div>
            </div>
            </div>
                </div>
    </div>
  </div>
</div>
</div>
</template>
<script>
import axios from "axios";
import moment from "moment";

export default {
  name: "property",
  data() {
    return {
      property: []
    };
  },
  methods: {
    moment
  },
  mounted() {
    axios
      .get("http://localhost:3000/Medical")
      .then(response => {
        console.log(response.data);
        this.property = response.data;
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>