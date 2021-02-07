<template>
    <footer class="main-footer">
       <slot><a target="blank" href="https://www.webferrol.com">WEBFerrol.com</a></slot>
    </footer>
</template>




<style lang="scss" scoped>
    $bgcolor: #343a40;
    .main-footer{
        margin-top: 1em;
        background-color: $bgcolor;
    }
    a{
        display: inline-block;
        width: 100%;
        padding: 1em;
        color: orange;
        text-align: right;
        text-decoration:none;
    }
</style>