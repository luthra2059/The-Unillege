from django.shortcuts import render
from .models import Post, Comment, Vote
from .serializers import PostSerializer, CommentSerializer, VoteSerializer
from django.http import JsonResponse
from rest_framework import viewsets, permissions

class PostView(viewsets.ModelViewSet):
    permission_classes = [permissions.IsAuthenticated,]
    serializer_class = PostSerializer
    # queryset = Post.objects.all()
    def get_queryset(self):
        return Post.objects.all()
    def perform_create(self, serializer):
        serializer.save(author=self.request.user)
    
    
class CommentView(viewsets.ModelViewSet):
    serializer_class = CommentSerializer
    queryset = Comment.objects.all()
    
class VoteView(viewsets.ModelViewSet):
    serializer_class = VoteSerializer
    queryset = Vote.objects.all()


    

