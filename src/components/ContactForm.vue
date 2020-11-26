<template>
    <div class="container my-3">
      <h2>Contact Us</h2>
      <hr />
        <form @submit.prevent="sendEmail">
          <input 
            type="text" 
            v-model="name"
            name="name"
            placeholder="Your Name"
          >
          <input 
            type="email" 
            v-model="email"
            name="email"
            placeholder="Your Email"
            >
          <textarea 
            name="message"
            v-model="message"
            cols="30" rows="5"
            placeholder="Message">
          </textarea>
          
          <input type="submit" value="Send">
        </form>
    </div>
</template>

<script>
import emailjs from 'emailjs-com';
export default {
  name: 'ContactUs',
  data() {
    return {
      name: '',
      email: '',
      message: ''
    }
  },
  methods: {
    sendEmail(e) {
      try {
        emailjs.sendForm('service_f9y7ec6', 'template_rwvoict', e.target, 'user_Mwh1a8NNuFMj0FmY1R6TR', {
          name: this.name,
          email: this.email,
          message: this.meessage
        })
        alert("you have succesfully submited form");
        console.log('it works!!!')
      } catch (error) {
          console.log({error})
      }
      // Reset form field
      this.name = ''
      this.email = ''
      this.message = ''
    },
  }
}
</script>
<style scoped>
* {box-sizing: border-box;}

.container {
  display: block;
  margin:auto;
  text-align: center;
  border-radius: 5px;
  background: #ffffff !important;
  padding: 20px;
  width: 38% !important;
}

label {
  float: left;
}

input[type=text], [type=email], textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}

input[type=submit] {
  background-color: #4CAF50;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #45a049;
}
@media only screen and (max-width: 600px) {
		.container {
			width: 75% !important;
		}
	}
	
</style>