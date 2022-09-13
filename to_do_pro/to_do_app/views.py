from datetime import date
from django.contrib.auth import authenticate, login, logout
from django.http import HttpResponse, JsonResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import *
from django.core import serializers

@api_view(['GET', 'POST'])
def index(request):
    theIndex=open('static/index.html').read()
    return HttpResponse(theIndex)

@api_view(["GET"])
def get_task(request):
    try:
        current_task= Task.objects.filter(user= request.user, completed = False, date_for_event=date.today()).values()
        return Response(list(current_task))
    except:
        return Response(False)


@api_view(["GET", "POST"])
def completed_task(request):
    if request.method == "GET":
        try:
            complete_task=Task.objects.filter(user= request.user, completed = True, date_for_event=date.today()).values()
            return Response(list(complete_task))
        except:
            return Response(False)
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
    all_task=Task.objects.filter(user=request.user, completed = False).values()
    all_task=list(all_task)
    all_task = sorted(all_task, key=lambda d: d['date_for_event']) 
    return Response(list(all_task))

@api_view(["GET"])
def myCompletedTask(request):
    my_task=Task.objects.filter(user=request.user, completed = True).values()
    my_task=list(my_task)
    my_task = sorted(my_task, key=lambda d: d['date_for_event']) 
    return Response(list(my_task))

@api_view(["POST"])
def new_task(request):
    try:
        title=request.data["title"]
        incoming=Task.objects.create(user=request.user, title=title)
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

@api_view(['POST'])
def sign_up(request):
    try:
        AppUser.objects.create_user(name=request.data['name'], username=request.data['email'], password=request.data['password'], email=request.data['email'])
    except Exception as e:
        print(str(e))
    return HttpResponse('Youve signed up')

@api_view(['POST'])
def log_in(request):
    email = request.data['email']
    password=request.data['password']
    user = authenticate(username= email, password = password)
    if user is not None:
        if user.is_active:
            try:
                login(request._request, user)
            except Exception as e:
                print(str(e))
            return HttpResponse('Youre logged in')
        else: 
            return HttpResponse('Not Active')
    else:
        return HttpResponse('No user recognized')
    
@api_view(['POST'])
def log_out(request):
    logout(request)
    return HttpResponse('Logged Out')

@api_view(['GET'])                
def curr_user(request):
    if request.user.is_authenticated:
        data= serializers.serialize("json", [request.user], fields=['name', 'email', 'password'])
        return HttpResponse(data)
    else:
        return JsonResponse({'user':None})
    
@api_view(["GET"])
def dummy_data(request):
    try:
        incompleteData=DummyTask.objects.filter(completed = False).values()
        return Response(list(incompleteData))
    except Exception as e:
        print(e)
        return Response (False)