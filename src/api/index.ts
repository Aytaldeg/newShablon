import request from '@/api/axios';
import Posts from '@/types/Post';

export const getPosts = () => request.get<Posts[]>('posts');
