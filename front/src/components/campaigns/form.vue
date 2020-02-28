<template>
    <div class="container">

        <h1 style="margin-top:50px;margin-bottom:50px;border-bottom:1px solid">Formulario de Campañas</h1>
        <form>
            <div class="form-group row">
                <label for="staticEmail" class="col-sm-2 col-form-label">Nombre</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control">
                </div>
            </div>
            <div class="form-group row">
                <label for="inputPassword" class="col-sm-2 col-form-label">Ejecución</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control">
                </div>
            </div>
            <div class="form-group row">
                <label for="inputPassword" class="col-sm-2 col-form-label">F. Inicio</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control">
                </div>
            </div>
            <fieldset class="form-group">
                <div class="row">
                <legend class="col-form-label col-sm-2 pt-0">Medio</legend>
                <div class="col-sm-10">
                    <div class="form-check">
                    <input class="form-check-input" type="checkbox" name="gridRadios" value="option1" checked>
                    <label class="form-check-label" for="gridRadios1">
                        SMS
                    </label>
                    </div>
                    <div class="form-check">
                    <input class="form-check-input" type="checkbox" name="gridRadios" id="gridRadios2" value="option2">
                    <label class="form-check-label" for="gridRadios2">
                        WhatsApp
                    </label>
                    </div>
                    <div class="form-check">
                    <input class="form-check-input" type="checkbox" name="gridRadios" id="gridRadios3" value="option3">
                    <label class="form-check-label" for="gridRadios3">
                        Push
                    </label>
                    </div>
                    <div class="form-check">
                    <input class="form-check-input" type="checkbox" name="gridRadios" id="gridRadios3" value="option3">
                    <label class="form-check-label" for="gridRadios3">
                        Email
                    </label>
                    </div>
                </div>
                </div>
            </fieldset>
        </form>
        <div>
            <router-link to='/campaign-list'>
                <button type="submit" class="btn btn-danger my-1 float-right" style="margin-left: 15px;">Cancelar</button>
            </router-link>
            <router-link to='/campaign-list'>
                <button type="submit" class="btn btn-info my-1 float-right" style="margin-left: 15px;">Guardar</button>
            </router-link>
            <router-link to='/campaign-form-2'>
                <button type="submit" class="btn btn-secondary my-1 float-right">Siguiente</button>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>