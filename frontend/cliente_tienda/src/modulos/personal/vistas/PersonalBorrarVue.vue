<template>
    <div class="container mt-5" v-if="personal[0]">
            <div class="card">
            <div class="card-header">
                <h4>Borrar Personal</h4>
            </div>
            <div  class="alert alert-warning" role="alert">
            ¿Seguro de borrar la informacion?
            <i class="fa fa-warning"> </i>
            </div>
            <div class="card-body">
                <div class="mb-3">
                    Id
                    <input type="text" class="form-control" v-model="personal[0].id" disabled>
                </div>
                <div class="mb-3">
                    Nombre
                    <input type="text" class="form-control" v-model="personal[0].nombre" disabled>
                </div>
                <div class="mb-3">
                    Dirección
                    <input type="text" class="form-control" v-model="personal[0].direccion" disebled>
                </div>
                <div class="mb-3">
                    Teléfono
                    <input type="text" class="form-control" v-model="personal[0].telefono" disabled>
                </div>
                <div class="mb-3">
                    Estatus
                    <input type="text" class="form-control" v-model="personal[0].estatus" disabled>
                </div>
                <div class="mb-3">
                    <button class="btn btn-danger" @click="borrarPersonal(personal[0])" >
                        Borrar
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, watch } from 'vue';
import type { PersonalAgregar } from '../interfaces/personal-interface';
import { usePersonal } from '../controladores/usePersonal';
import { useRoute,useRouter } from 'vue-router';


const { traePersonaId, mensaje, personal, borrarPersonal } = usePersonal();
let idPersona:number=0;
//paramedtrod de la URL
const route = useRoute();
//Moverme de URL
const routerRedirect = useRouter();
// Observador - watch
watch(
    () => mensaje.value,
    newID => {
        routerRedirect.push('/personal');
    }
)

onMounted (async () =>{
    idPersona = Number(route.params.id);
    await traePersonaId(idPersona);
});
</script>
<style scoped></style>