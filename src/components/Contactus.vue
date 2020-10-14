<template>
    <div class="container mt-2">
        <h1>ContactUs</h1>
            <b-form @submit="onSubmit" @reset="onReset">
                <b-form-group id="input-group-1" label="Your Name:" label-for="input-1">
                    <b-form-input
                    id="input-1"
                    v-model="form.name"
                    required
                    placeholder="Enter name"
                    ></b-form-input>
                </b-form-group>
                
                <b-form-group
                    id="input-group-2"
                    label="Email address:"
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
                
                <b-form-group id="input-group-3" label="Subject:" label-for="input-2">
                    <b-form-input
                    id="input-3"
                    v-model="form.subject"
                    required
                    placeholder="Enter subject"
                    ></b-form-input>
                </b-form-group>
                <b-form-group id="input-group-4" label="Message">
                    <textarea
                        v-model="form.message"
                        class="form-control"
                        placeholder="Enter message"
                        rows="3"
                    ></textarea>
                 </b-form-group>
                <b-button type="submit" variant="primary">Submit</b-button>
                <b-button type="reset" variant="danger">Reset</b-button>
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