from django.urls import path
from .views import EmployeeListView, EmployeeUpdateView

urlpatterns = [
    path("employees/", EmployeeListView.as_view(), name="employee-list"),
    path("employees/<int:pk>/", EmployeeUpdateView.as_view(), name="employee-update"),
]