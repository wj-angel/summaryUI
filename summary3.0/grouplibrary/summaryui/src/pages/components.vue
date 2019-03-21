<template>
    <div class="bigapp">
        <su-components-header></su-components-header>
        <su-components-nav></su-components-nav>
    </div>
</template>

<script>
import Public from '../assets/css/public.css';
import SuComponentsHeader from "../components/components/SuComponentsHeader";
import SuComponentsNav from "../components/components/SuComponentsNav";
export default {
    name:"components",
    components:{SuComponentsHeader,SuComponentsNav}
}
</script>

<style>
.bigapp{
    padding-top: 60px;
    height: 100%;
}

</style>
