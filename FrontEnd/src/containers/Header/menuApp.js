import { PATH } from "../../utils";

export const adminMenu = [
    { //hệ thống
        name: 'menu.system.header', menus: [
            // {
            //     name: 'menu.system.system-administrator.header',
            //     subMenus: [
            //         { name: 'menu.system.system-administrator.user-manage', link: '/system/user-manage' },
            //         { name: 'menu.system.system-administrator.product-manage', link: '/system/product-manage' },
            //         // { name: 'menu.system.system-administrator.register-package-group-or-account', link: '/system/register-package-group-or-account' },
            //     ]
            // },
            // { name: 'menu.system.system-parameter.header', link: '/system/system-parameter' },
            { name: 'menu.system.manage-user', link: `${PATH.MANAGE_USER}` },
            { name: 'menu.system.manage-question', link: `${PATH.MANAGE_QUESTION}` },
            { name: 'menu.system.manage-question-group', link: `${PATH.MANAGE_QUESTION_GROUP}` },
            { name: 'menu.system.exam', link: `${PATH.EXAM}` }
        ]
    },
];