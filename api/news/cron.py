import logging

logger = logging.getLogger(__name__)

from django.http import HttpResponse


def home(request):
    return HttpResponse("Django")

def print_hello():
    print("Hello")
    logger.info("Cron job was called")