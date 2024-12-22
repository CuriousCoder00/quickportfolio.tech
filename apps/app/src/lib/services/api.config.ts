import axios from 'axios';

const baseURL_V1 = import.meta.env.VITE_BASE_API_URL + '/api/v1';

export const axiosInstance = axios.create({
    baseURL: baseURL_V1,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    },
})

axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use((response) => {
    return response;
}, (error) => {
    if (error.response?.status === 401) {
        localStorage.removeItem('token');
        window.location.href = '/auth/login';
    }
    return Promise.reject(error);
});

export const api = {
    login: '/auth/login',
    register: '/auth/register',
    me: '/auth/me',
    logout: '/auth/logout',
    forgotPassword: '/auth/forgot-password',
    resetPassword: '/auth/reset-password',
    verifyEmail: '/auth/verify-email',
    resendVerificationEmail: '/auth/resend-verification-email',
    changePassword: '/auth/change-password',
    updateProfile: '/auth/update-profile',
    updatePassword: '/auth/update-password',
    updateEmail: '/auth/update-email',
    deleteAccount: '/auth/delete-account',
    users: '/users',
    user: (id: string) => `/users/${id}`,
    userPosts: (id: string) => `/users/${id}/posts`,
    userPost: (id: string, postId: string) => `/users/${id}/posts/${postId}`,
    posts: '/posts',
    post: (id: string) => `/posts/${id}`,
    comments: '/comments',
    comment: (id: string) => `/comments/${id}`,
    likes: '/likes',
    like: (id: string) => `/likes/${id}`,
    follow: '/follow',
    unfollow: (id: string) => `/follow/${id}`,
    followers: (id: string) => `/followers/${id}`,
    following: (id: string) => `/following/${id}`,
    search: '/search',
    searchUsers: '/search/users',
    searchPosts: '/search/posts',
    searchComments: '/search/comments',
    searchLikes: '/search/likes',
    searchFollowers: '/search/followers',
    searchFollowing: '/search/following',
    searchTags: '/search/tags',
    tags: '/tags',
    tag: (id: string) => `/tags/${id}`,
    tagPosts: (id: string) => `/tags/${id}/posts`,
    tagPost: (id: string, postId: string) => `/tags/${id}/posts/${postId}`,
    notifications: '/notifications',
    notification: (id: string) => `/notifications/${id}`,
    markAsRead: '/mark-as-read',
    markAllAsRead: '/mark-all-as-read',
    settings: '/settings',
    setting: (id: string) => `/settings/${id}`,
    themes: '/themes',
    theme: (id: string) => `/themes/${id}`,
    themeSettings: (id: string) => `/themes/${id}/settings`,
}