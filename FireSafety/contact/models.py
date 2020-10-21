from django.db import models
from django.db.models.signals import pre_save,post_save
from django.core.mail import send_mail
from django.conf import settings

# Create your models here.
class Contact_Us(models.Model):
    name=models.CharField(max_length=50)
    email=models.EmailField(max_length=50)
    subject=models.CharField(max_length=50)
    message=models.TextField()

    def __str__(self):
        return self.email


 
            
 
def post_save_session_reciver(sender,instance,created,*args, **kwargs):
    if created:
        first_name = instance.name
        print('first name is',first_name)
        email = instance.email
        print("email",email)
        subject = instance.subject
        print("subject-",subject)
        message=instance.message
        print("message",message)
        subject = subject
        message = "Name-{} \n\n Email-{} \n\n message-{}".format(first_name,email,message)
        email_from = settings.EMAIL_HOST_USER
        recipient_list = ['atharva55@yahoo.com',]
        send_mail( subject, message, email_from, recipient_list )
         

post_save.connect(post_save_session_reciver,sender=Contact_Us)
