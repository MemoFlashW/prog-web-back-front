import personalApi from '../api/personalAPI'
import { ref } from 'vue'
import type { personal } from '../interfaces/personal-interface'
//Modulo de personal
export const usePersonal = () =>{
    const personal = ref<personal[]>([]);

    const traePersonal = async () =>{
        const respuesta=await personalApi.get<personal[]>('/');
        personal.value = respuesta.data;
    }
    return {
        personal,
        traePersonal
    }
}