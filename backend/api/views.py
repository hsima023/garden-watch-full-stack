from .serializers import LogSerializer
from rest_framework import viewsets, permissions

class LogViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    serializer_class = LogSerializer

    def get_queryset(self):
        return self.request.user.users.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

