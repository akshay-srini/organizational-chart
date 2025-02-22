from django.db import models

# Create your models here.
class Employee(models.Model):
    role_choice = [
        ("founder", "founder"),
        ("ceo", "ceo"),
        ("cto", "cto"),
        ("manager", "manager"),
        ("frontend", "frontend"),
        ("backend", "backend")
    ]
    name = models.CharField(max_length=255)
    role = models.CharField(max_length=100, choices=role_choice)
    manager = models.ForeignKey('self', null=True, blank=True, on_delete=models.SET_NULL, related_name="subordinates")
    has_children= models.BooleanField(default=False)
    children_count = models.PositiveIntegerField(default=0)

    def __str__(self):
        return self.name