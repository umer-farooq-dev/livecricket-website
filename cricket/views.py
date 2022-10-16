from django.shortcuts import render


#

def home(request):
    return render(request=request, template_name='base.html')


def privacy_policy(request):
    return render(request=request, template_name='privacy_policy.html')


def contact_us(request):
    return render(request=request, template_name='contact_us.html')
