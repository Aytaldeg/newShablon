import request from '@/api/axios';
import Posts from '@/types/Post';

import Todo from '@/types/Todo';

export const getTodos = () => request.get<Todo[]>('todos/1');
export const getPosts = () => request.get<Posts[]>('posts');
