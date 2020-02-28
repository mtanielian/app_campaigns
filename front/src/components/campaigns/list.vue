<template>
    <div class="container">
        <h1 style="margin-top:50px;margin-bottom:50px;border-bottom:1px solid">Listado de Campañas
            
            <router-link to='/campaign-form'>
                <button type="button" class="btn btn-dark float-right">Crear Campaña</button>
            </router-link>
        </h1>
        <form class="form-inline" style="margin-bottom:5px">
            <label class="my-1 mr-2">Nombre</label>
            <input type="text" class="form-control mr-sm-2">

            <label class="my-1 mr-2" for="inlineFormCustomSelectPref">Ejecución</label>
            <select class="custom-select my-1 mr-sm-2">
                <option selected></option>
                <option value="1">Automático</option>
                <option value="2">Manual</option>
            </select>
            <input type="text" class="form-control mr-sm-2" style="width:120px">

            <label class="my-1 mr-2" for="inlineFormCustomSelectPref">Medio</label>
            <select class="custom-select my-1 mr-sm-2">
                <option selected></option>
                <option value="1">SMS</option>
                <option value="2">WhatsApp</option>
                <option value="2">Push</option>
                <option value="2">Email</option>
            </select>
            
            <div class="col-3">
                <button type="submit" style="margin-left:15px" class="btn btn-info my-1 float-right">Buscar</button>
                <button type="submit" class="btn btn-secondary my-1 float-right">Limpiar</button>
            </div>
        </form>
    
        <div>
            <table class="table">
                <thead class="thead-dark">
                    <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col">Ejecución</th>
                    <th scope="col">Medios</th>
                    <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>
                        Editar / Re lanzar / Cancelar
                    </td>
                    </tr>
                    <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>
                        Editar / Re lanzar / Cancelar
                    </td>
                    </tr>
                    <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>
                        Editar / Re lanzar / Cancelar
                    </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>


<script>
export default {
    
}
</script>