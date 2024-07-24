import os 
from celery import Celery 
'''

1.Setting the default Django settings module.
2.Creating a Celery application instance.
3.Configuring Celery to use settings from Django.
4.Automatically discovering tasks from all installed Django apps.

'''
# set the default Django settings module for the 'celery' program. 
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'drokponews.settings') 

app = Celery('drokponews') 

# Using a string here means the worker doesn't 
# have to serialize the configuration object to 
# child processes. - namespace='CELERY' means all 
# celery-related configuration keys should 
# have a `CELERY_` prefix. 
app.config_from_object('django.conf:settings', 
					namespace='CELERY') 

# Load task modules from all registered Django app configs. 
app.autodiscover_tasks() 
