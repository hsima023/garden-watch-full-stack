from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone

class Log(models.Model):
    loc_options = (("frontyard","FRONTYARD"),
                   ("backyard", "BACKYARD"),
                   ("rightside", "RIGHT SIDE"),
                   ("leftside", "LEFT SIDE"))

    location = models.CharField(max_length=10, choices=loc_options, default=None)
    owner = models.ForeignKey(User, related_name="users", on_delete=models.CASCADE, null=True)
    timestamp = models.DateTimeField(auto_now_add=timezone.now)
    completed = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.location}: {self.completed} {self.timestamp}"
