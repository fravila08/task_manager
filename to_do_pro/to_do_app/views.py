from datetime import date
from django.contrib.auth import authenticate, login, logout
from django.http import HttpResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import *

@api_view(['GET', 'POST'])
def index(request):
    theIndex=open('static/index.html').read()
    return HttpResponse(theIndex)

@api_view(["GET"])
def get_task(request):
    current_task= Task.objects.filter(completed = False, date_for_event=date.today()).values()
    return Response(list(current_task))


@api_view(["GET", "POST"])
def completed_task(request):
    if request.method == "GET":
        complete_task=Task.objects.filter(completed = True, date_for_event=date.today()).values()
        return Response(list(complete_task))
    if request.method == "POST":
        task_id=request.data["taskId"]
        board= request.data["boardDrop"]
        task=Task.objects.get(id = task_id)
        if board == "board_1":
            task.completed = False
            task.save()
        if board== "board_2":
            task.completed = True
            task.save()
        return Response(True)
    
@api_view(["GET"])
def all_incomplete_task(request):
    all_task=Task.objects.filter(completed = False).values()
    all_task=list(all_task)
    all_task = sorted(all_task, key=lambda d: d['date_for_event']) 
    return Response(list(all_task))

@api_view(["GET"])
def myCompletedTask(request):
    my_task=Task.objects.filter(completed = True).values()
    my_task=list(my_task)
    my_task = sorted(my_task, key=lambda d: d['date_for_event']) 
    return Response(list(my_task))

@api_view(["POST"])
def new_task(request):
    try:
        print(request.data)
        title=request.data["title"]
        incoming=Task.objects.create(title=title)
        if "time_for_event" in request.data:
            time_for_event=request.data["time_for_event"]
            incoming.time_for_event= time_for_event
            incoming.save()
        if "date_for_event" in request.data:
            date_for_event=request.data["date_for_event"]
            incoming.date_for_event= date_for_event
            incoming.save()
        if "address" in request.data:
            address=request.data["address"]
            incoming.address= address
            incoming.save()
        if "phone" in request.data:
            phone= request.data["phone"]
            incoming.phone = phone
            incoming.save()
        if "email" in request.data:
            email= request.data["email"]
            incoming.email= email
            incoming.save()
        if "url" in request.data:
            url= request.data["url"]
            incoming.url = url
            incoming.save()
        if "details" in request.data:
            details= request.data["details"]
            incoming.details=details
            incoming.save()
        print(list(incoming))
        return Response({"msg":"new item was created"})
    except Exception as e:
        print(e)
        return Response({"msg":"failure to save"})
    
@api_view(["DELETE"])
def deleting_task(request, itemId):
    task=Task.objects.get(id = itemId)
    task.delete()
    return Response({"msg":"task deleted"})

@api_view(["PUT"])
def complete_this_task(request):
    itemId=request.data["myItemId"]
    task=Task.objects.get(id = itemId)
    task.completed = True
    task.save()
    return Response(True)

