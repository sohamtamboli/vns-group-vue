<template>
    <div class="container my-2" style="background:#f1f1f1;width:50%;border-color:black">
        <h2>Contact Us</h2>
        <hr>
            <b-form @submit="onSubmit" @reset="onReset">
                <b-form-group id="input-group-1" label="" label-for="input-1">
                    <b-form-input
                    id="input-1"
                    v-model="form.name"
                    required
                    placeholder="Enter name"
                    ></b-form-input>
                </b-form-group>
                
                <b-form-group
                    id="input-group-2"
                    label=""
                    label-for="input-2"
                    description="We'll never share your email with anyone else."
                >
                    <b-form-input
                        id="input-2"
                        v-model="form.email"
                        type="email"
                        required
                        placeholder="Enter email"
                    ></b-form-input>
                </b-form-group>
                
                <b-form-group id="input-group-3" label="" label-for="input-2">
                    <b-form-input
                    id="input-3"
                    v-model="form.subject"
                    required
                    placeholder="Enter subject"
                    ></b-form-input>
                </b-form-group>
                <b-form-group id="input-group-4" label="">
                    <textarea
                        v-model="form.message"
                        class="form-control"
                        placeholder="Enter message"
                        rows="4"
                    ></textarea>
                 </b-form-group>

                <div class="form-group row">
                    <div class="col-md-2  my-2">
                        <b-button type="submit"  class="btn form-control"  variant="primary">Submit</b-button>
                    </div>
                    <div class="col-md-2 ml-auto my-2">
                        <b-button type="reset" class="btn form-control" variant="danger">Reset</b-button>
                     </div>
                </div>


             </b-form>
             
            

    </div>
</template>

<script>
import { apiService } from '../common/api.service.js';

export default {
    
    name:"ContactUs",   

        
    data() {
        return {
            form: {
                name: null,
                email: null,
                subject: null,
                message: null
            }
        }
    },
    methods:{
        onSubmit(evt) {
            evt.preventDefault()
                console.log("this.form",this.form)
                console.log("JSON.stringify(this.form)",JSON.stringify(this.form))
                let endpoint = "/api/contact/";
                let method = "POST";
                apiService(endpoint,method,this.form).then(
                    this.form.name = '',
                    this.form.email = '',
                    this.form.subject = '',
                    this.form.message = ''
                )
                alert("you have succesfully submited form")
                
      },
      onReset(evt) {
        evt.preventDefault()
        this.form.name = ''
        this.form.email = ''
        this.form.subject = ''
        this.form.message = ''
        this.show = false
        this.$nextTick(() =>
        {
          this.show = true
        })

        },
    },
    created() {
    document.title="Contact Us";
    }
    

}
</script>

<style scoped>
#input-group-1 input-1{
    color: red;
    
}
/* #input-group-1{
    width: 50%;
}
#input-group-2{
    width: 50%;
}
#input-group-3{
    width: 50%;
}
#input-group-4{
    width: 50%;
} */


</style>