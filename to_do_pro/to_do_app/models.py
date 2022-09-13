from datetime import date
from turtle import title
from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
class Task(models.Model):
    date_for_event=models.DateField(default=date.today(), null=False)
    time_for_event=models.TimeField(null=True)
    email=models.CharField(max_length=250, null=True)
    address=models.CharField(max_length=250, null=True)
    phone=models.CharField(max_length=20, null=True)
    url=models.CharField(max_length=250, null=True)
    details=models.TextField(null=True)
    title= models.CharField(max_length=250)
    completed= models.BooleanField(default= False, blank= True, null=True)
    user=models.ForeignKey('AppUser', on_delete=models.CASCADE)
    
class DummyTask(models.Model):
    title= models.CharField(max_length=250)
    completed= models.BooleanField(default= False, blank= True, null=True)
    
class AppUser(AbstractUser):
    name = models.CharField(max_length=250, null=False, default='unkown')
    email = models.EmailField(
        verbose_name='email address',
        max_length= 255,
        unique=True,
    )
    
    USERNAME_FIELD= 'email'
    REQUIRED_FIELDS= []
    
    