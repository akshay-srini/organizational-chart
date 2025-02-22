from rest_framework import serializers
from .models import Employee

class EmployeeSerializer(serializers.ModelSerializer):
    subordinates = serializers.SerializerMethodField()

    class Meta:
        model = Employee
        fields = ['id','name','role','manager','has_children','children_count', 'subordinates']

    def get_subordinates(self, obj):
        return EmployeeSerializer(obj.subordinates.all(), many=True).data