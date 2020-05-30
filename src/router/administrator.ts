export default {
    path: '/administrator',
    name: 'Administrator',
    component: () => import('@/views/administrator/Administrator.vue'),
    children: [
        {
            path: 'role',
            name: 'Role',
            component: () => import('@/views/administrator/role/Role.vue'),
        },
        {
            path: 'group-role',
            name: 'Group role',
            component: () => import('@/views/administrator/group-user/GroupUser.vue'),
        },
    ],
};
