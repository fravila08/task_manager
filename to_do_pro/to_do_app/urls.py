
from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.index, name='home'),
    path('getTask', views.get_task, name='getTask'),
    path('allIncompleteTask', views.all_incomplete_task, name="incompleteTasd"),
    path("getComplete", views.completed_task, name="completed"),
    path("allCompleteTask", views.myCompletedTask, name="allcomp"),
    path("new_task", views.new_task, name="new_task"),
    path("deleteTask/<int:itemId>", views.deleting_task, name="deleteTask"),
]