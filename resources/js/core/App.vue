<template>
    <div>
         <navbar-component />
        <div>
            <global-home></global-home>
        </div>
        <footer-component />

     </div>
</template>

<script>
export default {
    name: "App",

    components: {
        NavbarComponent: () => import("./partiels/NavBar"),
        FooterComponent: () => import("./partiels/Footer"),
     },
};
</script>
