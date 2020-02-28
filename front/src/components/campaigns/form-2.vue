<template>
    <div class="container" style="text-align: center">
        <h1 style="margin-top:50px;margin-bottom:50px;border-bottom:1px solid; text-align:left">
            Formulario de Campañas - Paso 2
        </h1>

        <div class="btn-group btn-group-toggle" data-toggle="buttons" style="width:600px">
            <label class="btn btn-secondary active" style="cursor:pointer" v-on:click="showForm('sms')">
                <input type="radio" name="options" v-model='medio' value='sms' checked > 
                SMS
            </label>
            <label class="btn btn-secondary" style="cursor:pointer" v-on:click="showForm('whatsapp')">
                <input type="radio" name="options" v-model='medio' value='whatsapp' autocomplete="off"> 
                WhatsApp
            </label>
            <label class="btn btn-secondary" style="cursor:pointer" v-on:click="showForm('push')">
                <input type="radio" name="options" v-model='medio' value='push' autocomplete="off"> 
                Push
            </label>
            <label class="btn btn-secondary" style="cursor:pointer" v-on:click="showForm('email')">
                <input type="radio" name="options" v-model='medio' value='email' autocomplete="off"> 
                Email
            </label>
        </div>
        <div>
            <form style="margin-top:50px" v-show="medio=='sms'">
                <div class="row">
                    <div class="col" style="text-align:left">
                        <label>Texto</label>
                        <textarea class="form-control" rows="7"></textarea>
                    </div>
                    <div class="col" style="text-align:left">
                        <label>Destinatarios</label>
                        <textarea class="form-control" rows="7"></textarea>
                    </div>
                </div>
            </form>
            <form style="margin-top:50px" v-show="medio=='whatsapp'">
                <div class="row">
                    <div class="col" style="text-align:left">
                        <label>Texto</label>
                        <textarea class="form-control" rows="7"></textarea>
                    </div>
                    <div class="col" style="text-align:left">
                        <label>Destinatarios</label>
                        <textarea class="form-control" rows="7"></textarea>
                    </div>
                </div>
                <div class="row" style="margin-top:10px">
                    <div class="col-6" style="text-align:left">
                        <label>Adjunto</label>
                        <input type="file" class="form-control">
                    </div>
                </div>
            </form>
            <form style="margin-top:50px" v-show="medio=='push'">
                <div class="row">
                    <div class="col" style="text-align:left">
                        <label>Texto</label>
                        <textarea class="form-control" rows="7"></textarea>
                    </div>
                    <div class="col" style="text-align:left">
                        <label>Destinatarios</label>
                        <textarea class="form-control" rows="7"></textarea>
                    </div>
                </div>
            </form>
          

            <form style="margin-top:50px" v-show="medio=='email'">
                <div class="col-6" style="text-align:left; float:left">
                    <label v-show="email.type=='standard' || email.type=='html'">Texto</label>
                    <label v-show='email.type=="image"'>Image</label>
                    <textarea class="form-control" rows="7"  v-show="email.type=='standard' || email.type=='html'"></textarea>
                    <input class="form-control" type="file" v-show='email.type=="image"'>
                    <div style="margin-top:10px">
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="emailType"
                            style="z-index:99999"
                            v-on:click='setEmailType("standard")' checked>
                            <label class="form-check-label">Standard</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="emailType"
                            style="z-index:99999"
                            v-on:click='setEmailType("html")'>
                            <label class="form-check-label">HTML</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="emailType"
                            style="z-index:99999"
                            v-on:click='setEmailType("image")'>
                            <label class="form-check-label">Imagen</label>
                        </div>
                    </div>
                </div>    
                <div class="col-6" style="text-align:left; float:right">
                        <label>Destinatarios</label>
                        <textarea class="form-control" rows="7"></textarea>
                    </div>            
                <div class="col-6" style="margin-top:10px;text-align:left">
                    <label>Asunto</label>
                    <input type="text" class="form-control">
                    
                </div>
                <div class="col-6" style="margin-top:10px;text-align:left">
                    <label>Adjunto</label>
                    <input type="file" class="form-control">
                </div>
            </form>



        </div>
        <div style="margin-top:20px">
            <router-link to='/campaign-form'>
                <button type="submit" class="btn btn-danger my-1 float-right" style="margin-left: 15px;">Cancelar</button>
            </router-link>
            <router-link to='/campaign-list'>
                <button type="submit" class="btn btn-info my-1 float-right" style="margin-left: 15px;">Guardar</button>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            medio : 'sms',
            email : {
                type : 'standard'
            }
        }
    },
    methods : {
        showForm(medioValue) {
           this.medio = medioValue
        },
        setEmailType(typeValue) {
            console.log(this.email.type)
            this.email.type = typeValue;
            console.log(this.email.type)
        }
    }
    
}
</script>