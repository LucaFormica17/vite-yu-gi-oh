<script>
export default {
    name: 'AppHeader',
}
</script>
<template lang="">
    <header>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="d-flex my-3">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Yu-Gi-Oh%21_%28Logo%29.jpg/100px-Yu-Gi-Oh%21_%28Logo%29.jpg" alt="logo">
                        <h1>Yu-Gi-Oh API</h1>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>
<style lang="scss" scoped>
    header{
        background-color: white;
        padding: 15px 0;


        h1{
            margin-left: 50px;
            
        }
    }
</style>