<template>
          <div class="container">
             <!-- Outer Row -->
             <div class="row justify-content-center my-5">
                 <div class="col-xl-10 col-xl-12 col-md-9">
                     <div class="card o-hidden border-0 shadow-lg my-5">
                         <div class="card-body p-0">
                             <!-- Nested Row within Card Body -->
                             <div class="row">
                                 <div class="col-lg-6 d-none d-lg-block bg-login-image"></div>

                                     <div class="col-lg-6 login" >
                                         <div class="p-5">
                                             <div class="text-center">

                                                 <h1 class="h4 text-gray-900 mb-4">Welcome Back !</h1>
                                             </div>
                                             <ValidationObserver
                                                 ref="observer"
                                                 v-slot="{
                                        handleSubmit,
                                    }"
                                             >
                                                 <form class="user"
                                                       novalidate
                                                       @submit.prevent="handleSubmit(onSubmit)">
                                                     <div class="form-group">
                                                         <input type="email" class="form-control form-control-user"
                                                                id="exampleInputEmail" aria-describedby="emailHelp"
                                                                v-model="email" placeholder="Enter Email Address...">
                                                     </div>
                                                     <div v-show="emailError" class="text-danger">
                                                         ... the email is not valid
                                                     </div>
                                                     <div class="form-group">
                                                         <input type="password" class="form-control form-control-user"
                                                                id="exampleInputPassword" v-model="password" placeholder="Password">
                                                     </div>
                                                     <div v-show="passwordError" class="text-danger">
                                                         ... the password is not valid
                                                     </div>
                                                     <div class="form-group">
                                                         <div class="custom-control custom-checkbox small">
                                                             <input type="checkbox" class="custom-control-input" id="customCheck">
                                                             <label class="custom-control-label" for="customCheck">Remember
                                                                 Me</label>
                                                         </div>
                                                     </div>

                                                     <button
                                                         type="submit"
                                                         class="btn btn-primary btn-user btn-block"
                                                         :disabled="status.loggingIn"
                                                     >
                                                         Login
                                                     </button>
                                                 </form>
                                             </ValidationObserver>
                                         </div>
                                     </div>


                              </div>
                         </div>
                     </div>
                 </div>
             </div>
         </div>


</template>
<script>
import { mapState, mapActions } from "vuex";
import {
    ValidationObserver,
    ValidationProvider,

} from "vee-validate";
export default {
    components: {  ValidationProvider, ValidationObserver },

    data() {
        return {
            loading: false,
            btnLoading: false,

            password: '',
            email: '',
        }
    },
    computed: {
        active() {
            return this.loading;
        },
        isAuthenticated() {
            return this.$store.getters.user;
        },
        emailError() {
            return !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email)) && this.email.length > 0
        },
        passwordError() {
            return this.password.length > 0 && this.password.length < 7
        },
        isValidForm() {
            return this.password.length > 5 && (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email))
        },
        ...mapState("account", ["status"]),

    },
    methods: {
        ...mapActions("account", ["login"]),
        onSubmit(e) {
            const { email, password } = this;
            if (email && password) {
                this.login({ email, password }).catch((err) => {
                    console.log("err");
                });
            }
        },
    },

}
</script>
<style>
.login{
    background: linear-gradient(-45deg, #fff, #fff, #89A099 , #89A099);
    background-size: 400% 400%;
    animation: gradient 15s ease infinite;
 }

@keyframes gradient {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
}

</style>

