from rest_framework.permissions import BasePermission


class DenyAny(BasePermission):
    def has_permission():
        return False

    def has_object_permission():
        return False
