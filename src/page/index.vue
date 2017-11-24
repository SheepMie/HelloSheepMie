<template>
        
        <div class="index_center text-center">
            <div class="index_time">
                {{alpha}}
                {{beta}}
                {{gamma}}

            </div>
        </div>
</template>

<script>

    export default {
        name:'index',
        data(){
            return {
                hour: '',
                minute: '',
                secondDecade: [],
                secondUnit: [],
                toggle: false,
                toggleTime: true,
                alpha:0,
                beta:0,
                gamma:0
            }
        },
        mounted() {
            var vm = this;
            window.addEventListener("deviceorientation", orientationHandler, false);  
            function orientationHandler(event) {  
                vm.alpha = Math.round(event.alpha);
                vm.beta = Math.round(event.beta);
                vm.gamma = Math.round(event.gamma);
            }
        }
        
    }
</script>