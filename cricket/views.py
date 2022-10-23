from .models import User
from django.shortcuts import render
from django.db.models import Q


def home(request):
    def get_ip(request):
        address = request.META.get('HTTP_X_FORWARDED_FOR')
        if address:
            ip = address.split(',')[-1].strip()
        else:
            ip = request.META.get('REMOTE_ADDR')
        return ip

    ip = get_ip(request)
    u = User(user=ip)
    print(ip)
    result = User.objects.filter(Q(user__icontains=ip))
    if len(result) == 1:
        print("user exist")
    elif len(result) > 1:
        print("user exist more .....")
    else:
        u.save()
        print("user is unique")
    count = User.objects.all().count()
    print("Total user is ", count)

    return render(request, 'base.html', {'count': count})


def privacy_policy(request):
    return render(request=request, template_name='privacy_policy.html')


def contact_us(request):
    return render(request=request, template_name='contact_us.html')
