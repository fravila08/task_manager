from datetime import date
from django.db import models

# Create your models here.
class Task(models.Model):
    date_for_event=models.DateField(default=date.today(), null=False)
    time_for_event=models.TimeField(null=True)
    email=models.CharField(max_length=250, null=True)
    address=models.CharField(max_length=250, null=True)
    phone=models.IntegerField(null=True)
    url=models.CharField(max_length=250, null=True)
    details=models.TextField(null=True)
    title= models.CharField(max_length=250)
    completed= models.BooleanField(default= False, blank= True, null=True)
    
    