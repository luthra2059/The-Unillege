from django.contrib import admin
from .models import Post, Comment, Vote, Alumni, VoteAlumni, Events, Test, Notes
# Register your models here.
admin.site.register(Post)
admin.site.register(Comment)
admin.site.register(Vote)
admin.site.register(Alumni)
admin.site.register(VoteAlumni)
admin.site.register(Events)
admin.site.register(Test)
admin.site.register(Notes)