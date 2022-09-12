# Generated by Django 4.0.5 on 2022-09-12 06:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('to_do_app', '0003_task_time_for_event_alter_task_date_for_event'),
    ]

    operations = [
        migrations.AddField(
            model_name='task',
            name='address',
            field=models.CharField(max_length=250, null=True),
        ),
        migrations.AddField(
            model_name='task',
            name='details',
            field=models.TextField(null=True),
        ),
        migrations.AddField(
            model_name='task',
            name='email',
            field=models.CharField(max_length=250, null=True),
        ),
        migrations.AddField(
            model_name='task',
            name='phone',
            field=models.IntegerField(null=True),
        ),
        migrations.AddField(
            model_name='task',
            name='url',
            field=models.CharField(max_length=250, null=True),
        ),
    ]
