<template>
        <div class="container">
    	<div class="row">
	    	 <h1 style="font-size:20px"><i class="fa fa-lock" aria-hidden="true"></i> Sistema de Campañas</h1>
        </div>
        <br /><br />
        <div class="input-group">
            <div class="input-group-prepend">
                <span class="input-group-text"><i class="fas fa-user-tie"></i></span>
            </div>
            <input type="text" name="" class="form-control" placeholder="CUIL o Pasaporte" v-model="cuil"/>
        </div>
        <br />
        <div class="input-group">
            <div class="input-group-prepend">
                <span class="input-group-text"><i class="fa fa-key icon"></i></span>
            </div>
                <input type="Password" name="" class="form-control" placeholder="password" v-model="pass" />
        </div><br />
        <div class="checkbox">
            <label><input type="checkbox" value=""/> Remember me</label>
        </div><br />
        <button type="button" v-on:click='login' class="btn btn-success" style="width:200px;margin-bottom:20px">
            <span class="glyphicon glyphicon-off"></span> Ingresar
        </button>
        <br /> 
        
	</div>
</template>

<style scoped>
  .container{
        border:2px solid blue;
        text-align:center;
        
        height:500px;
        width:400px;
    }
    body{
        padding:70px;
    }
    h1{
        margin:auto;
    }
    .row{
        height:90px;
        width:396px;
        background-color:paleturquoise;
    }
</style>

<script>
import axios from 'axios'
import qs from 'qs'

export default {
    data() {
        return {
            cuil : "",
            pass : ""
        }
    },
    methods : {
        login() {
            if (this.cuil != "" && this.pass != "") {
                let options = {
                    headers: {
                        'accept': 'application/json',
                        'content-type': 'application/x-www-form-urlencoded'
                    }
                };
                axios.post(
                    'http://localhost:3000/login', 
                    qs.stringify({cuil : this.cuil, pass : this.pass}),
                    options
                ).then((rs) => {
                    
                    
                })




            }

        }



    }
}
</script>