from django.contrib import admin
from .models import Log

@admin.register(Log)
class LogModel(admin.ModelAdmin):
    list_filter = ('location', 'completed', 'timestamp')
    list_display = ('location', 'completed', 'timestamp')
