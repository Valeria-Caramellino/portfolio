<script>
import Navbar from '../components/Navbar.vue';
import { store } from '../store';

export default{
    name:"SingleProject",
    components:{
        Navbar
    },
    data() {
        return {
            store,
            project: null 
        };
    },
    created() {
        const projectId = this.$route.params.id;
        const projectList = this.store.group_projects;

        this.project = projectList.find(project => project.id == projectId);
        console.log(this.project);

        if (!this.project) {
        // Progetto non trovato, reindirizza a una pagina di errore
            this.$router.push({ name: 'error', params: { code: 404 } });
            return;
        }
    },
    
};

</script>
<template>

    <body>
        <header>
            <Navbar/>
        </header>
        <main>
            <div v-if="project">
                <img :src="project.img" alt="img">
                <h2>{{ project.title }}</h2>
                <p>{{ project.text }}</p>
                <a :href="project.github">github</a>
            </div>
            <div v-else>
                Progetto non trovato
            </div>
            
        </main>
    </body>
</template>
<style lang="scss" scoped>
@use'../style/variable.scss' as*;

body{
    background-image: url(../assets/img_bg/sun.svg);
    background-size: 130% 120% ;
    height: $vh_100;
}

</style>