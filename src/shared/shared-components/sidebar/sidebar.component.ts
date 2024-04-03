import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../../shared/services/language.service';
import { AuthorizeService } from '../../../auth/authorize.service';
import { TranslateService } from '@ngx-translate/core';

declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
  hasChildren?: boolean;
  children?: RouteInfo[];
  subMenuId?: string;
  authRoles?: string[];
}
export let ROUTES: RouteInfo[];
ROUTES = [
  {
    path: "/dashboard",
    title: "Dashboard",
    icon: "dashboard",
    class: "",
    hasChildren: false,
    authRoles: ['Admin', 'Accountant'],
  },

  {
    path: "",
    title: "clientsManagement",
    icon: "contact_page",
    class: "",
    hasChildren: true,
    subMenuId: "clientManagementSubMenu",
    authRoles: ['Admin', 'Accountant', 'Assistant'],
    children: [
      {
        path: "/forms/client-list",
        title: "ListClients",
        icon: "supervisor_account",
        class: "sub-menu",
        authRoles: ['Admin', 'Accountant', 'Assistant'],
        hasChildren: false,
      },
      {
        path: "/forms/client-create",
        title: "AddClient",
        icon: "person_add_alt_1",
        class: "sub-menu",
        authRoles: ['Admin', 'Accountant', 'Assistant'],
        hasChildren: false,
      },
    ],
  },
  {
    path: "",
    title: "driversManagement",
    icon: "commute",
    class: "",
    hasChildren: true,
    subMenuId: "driverManagementSubMenu",
    authRoles: ['Admin', 'Accountant', 'Assistant'],
    children: [
      {
        path: "/forms/driver-list",
        title: "ListDrivers",
        icon: "supervisor_account",
        class: "sub-menu",
        authRoles: ['Admin', 'Accountant', 'Assistant'],
        hasChildren: false,
      },
      {
        path: "/forms/driver-create",
        title: "AddDriver",
        icon: "person_add_alt_1",
        class: "sub-menu",
        authRoles: ['Admin', 'Accountant', 'Assistant'],
        hasChildren: false,
      },
    ],
  },

  {
    path: "",
    title: "endUsersManagement",
    icon: "contacts",
    class: "",
    hasChildren: true,
    subMenuId: "endUsersManagementSubMenu",
    authRoles: ['Admin', 'Accountant', 'Assistant'],
    children: [
      {
        path: "/forms/endusers-list",
        title: "endUsersList",
        icon: "supervisor_account",
        class: "sub-menu",
        authRoles: ['Admin', 'Accountant', 'Assistant'],
        hasChildren: false,
      },
      {
        path: "/forms/enduser-create",
        title: "addEndUser",
        icon: "person_add_alt_1",
        class: "sub-menu",
        authRoles: ['Admin', 'Accountant', 'Assistant'],
        hasChildren: false,
      },
    ],
  },
  {
    path: "",
    title: "ordersManagement",
    icon: "assignment",
    class: "",
    hasChildren: true,
    subMenuId: "ordersManagementSubMenu",
    authRoles: ['Admin', 'Accountant', 'Assistant', 'DataEntry'],
    children: [
      {
        path: "/forms/order-list",
        title: "ordersList",
        icon: "menu",
        class: "sub-menu",
        authRoles: ['Admin', 'Accountant', 'Assistant', 'DataEntry'],
        hasChildren: false,
      },
      {
        path: "/forms/order-create",
        title: "orderAdd",
        icon: "create_new_folder",
        class: "sub-menu",
        authRoles: ['Admin', 'Accountant', 'Assistant', 'DataEntry'],
        hasChildren: false,
      },
      {
        path: "/forms/reports-search",
        title: "reports",
        icon: "description",
        class: "sub-menu",
        authRoles: ['Admin', 'Accountant', 'Assistant'],
        hasChildren: false,
      },
      {
        path: "/forms/company-revenue",
        title: "companyRevenue",
        icon: "attach_money",
        class: "sub-menu",
        authRoles: ['Admin', 'Accountant'],
        hasChildren: false,
      },
      {
        path: "/forms/order-list-admin",
        title: "adminOrderList",
        icon: "perm_identity",
        class: "sub-menu",
        authRoles: ['Admin', 'Accountant'],
        hasChildren: false,
      },
      {
        path: "/forms/postponed-orders",
        title: "postponedOrders",
        icon: "alarm_off",
        class: "sub-menu",
        authRoles: ['Admin', 'Accountant', 'Assistant', 'DataEntry'],
        hasChildren: false,
      }
    ],
  },
  {
    path: '',
    title: 'employeesManagement',
    icon: 'account_circle',
    class: '',
    hasChildren: true,
    subMenuId: 'employeeManagementSubMenu',
    authRoles: ['Admin', 'Accountant', 'Assistant'],
    children: [
      {
        path: '/forms/employees-list',
        title: 'ListEmployees',
        icon: 'supervisor_account',
        class: 'sub-menu',
        authRoles: ['Admin', 'Accountant', 'Assistant'],
        hasChildren: false
      },
      {
        path: '/forms/employee-create',
        title: 'AddEmployee',
        icon: 'person_add_alt_1',
        class: 'sub-menu',
        authRoles: ['Admin', 'Accountant', 'Assistant'],
        hasChildren: false
      },

    ]
  },
  {
    path: '',
    title: 'recordsManagement',
    icon: 'insert_drive_file',
    class: '',
    hasChildren: true,
    subMenuId: 'recordManagementSubMenu',
    authRoles: ['Admin', 'Accountant', 'Assistant'],
    children: [
      {
        path: '/forms/records-list', title: 'ListRecords',
        icon: 'menu',
        authRoles: ['Admin', 'Accountant', 'Assistant'],
        class: 'sub-menu', hasChildren: false
      }
    ]
  },
  {
    path: '',
    title: 'financialRoundsManagement',
    icon: 'pages',
    class: '',
    hasChildren: true,
    subMenuId: 'financialRoundsManagementSubMenu',
    authRoles: ['Admin', 'Accountant', 'Assistant'],
    children: [
      { path: '/forms/rounds-list', title: 'listRounds', authRoles: ['Admin', 'Accountant', 'Assistant'], icon: 'menu', class: 'sub-menu', hasChildren: false }
    ]
  },


];
export const LOOCKUPS_ROUTES: RouteInfo[] = [
  {
    path: "",
    title: "citiesManagement",
    icon: "location_city",
    class: "",
    hasChildren: true,
    subMenuId: "citiesManagementSubMenu",
    authRoles: ['Admin', 'Accountant', 'Assistant', 'DataEntry'],
    children: [
      {
        path: "/forms/city-list",
        title: "ListCities",
        icon: "menu",
        class: "sub-menu",
        authRoles: ['Admin', 'Accountant', 'Assistant', 'DataEntry'],
        hasChildren: false,
      },
      {
        path: "/forms/city-create",
        title: "AddCity",
        icon: "add_to_photos",
        class: "sub-menu",
        authRoles: ['Admin', 'Accountant', 'Assistant', 'DataEntry'],
        hasChildren: false,
      },
    ],
  },
  {
    path: "",
    title: "areagroupManagement",
    icon: "location_searching",
    class: "",
    hasChildren: true,
    subMenuId: "areagroupManagementSubMenu",
    authRoles: ['Admin', 'Accountant', 'Assistant', 'DataEntry'],
    children: [
      {
        path: "/forms/areagroup-list",
        title: "ListAreaGroups",
        icon: "menu",
        class: "sub-menu",
        authRoles: ['Admin', 'Accountant', 'Assistant', 'DataEntry'],
        hasChildren: false,
      },
      {
        path: "/forms/areagroup-create",
        title: "AddAreaGroup",
        icon: "add_to_photos",
        class: "sub-menu",
        authRoles: ['Admin', 'Accountant', 'Assistant', 'DataEntry'],
        hasChildren: false,
      },
    ],
  },
  {
    path: "",
    title: "areasManagement",
    icon: "room",
    class: "",
    hasChildren: true,
    subMenuId: "areasManagementSubMenu",
    authRoles: ['Admin', 'Accountant', 'Assistant', 'DataEntry'],
    children: [
      {
        path: "/forms/area-list",
        title: "areasList",
        icon: "menu",
        class: "sub-menu",
        authRoles: ['Admin', 'Accountant', 'Assistant', 'DataEntry'],
        hasChildren: false,
      },
      {
        path: "/forms/area-create",
        title: "AddArea",
        icon: "add_location",
        class: "sub-menu",
        authRoles: ['Admin', 'Accountant', 'Assistant', 'DataEntry'],
        hasChildren: false,
      },
    ],
  },
  {
    path: "",
    title: "orderstatusManagement",
    icon: "insert_comment",
    class: "",
    hasChildren: true,
    subMenuId: "orderstatusManagementSubMenu",
    authRoles: ['Admin', 'Accountant', 'Assistant', 'DataEntry'],
    children: [
      {
        path: "/forms/order-status-list",
        title: "ListOrderStatus",
        icon: "menu",
        class: "sub-menu",
        authRoles: ['Admin', 'Accountant', 'Assistant', 'DataEntry'],
        hasChildren: false,
      },
      {
        path: "/forms/order-status-create",
        title: "AddOrderStatus",
        icon: "create_new_folder",
        class: "sub-menu",
        authRoles: ['Admin', 'Accountant', 'Assistant', 'DataEntry'],
        hasChildren: false,
      },
    ],
  },
  {
    path: "",
    title: "promoCodeManagement",
    icon: "text_fields",
    class: "",
    hasChildren: true,
    subMenuId: "promoCodeManagementSubMenu",
    authRoles: ['Admin', 'Accountant', 'Assistant', 'DataEntry'],
    children: [
      {
        path: "/forms/promo-code-list",
        title: "listCodes",
        icon: "menu",
        class: "sub-menu",
        authRoles: ['Admin', 'Accountant', 'Assistant', 'DataEntry'],
        hasChildren: false,
      },
      {
        path: "/forms/promo-code-create",
        title: "addCode",
        icon: "create_new_folder",
        class: "sub-menu",
        authRoles: ['Admin', 'Accountant', 'Assistant', 'DataEntry'],
        hasChildren: false,
      },
    ],
  }, {
    path: "",
    title: "employeesMessagesManagement",
    icon: "mail_outline",
    class: "",
    hasChildren: true,
    subMenuId: "employeesMessagesManagementSubMenu",
    authRoles: ['Admin', 'Accountant', 'Assistant', 'DataEntry'],
    children: [

      {
        path: "/forms/message-create",
        title: "AddMsg",
        icon: "add_to_photos",
        class: "sub-menu",
        authRoles: ['Admin', 'Accountant', 'Assistant'],
        hasChildren: false,
      },
      {
        path: "/forms/messages",
        title: "employeeMessages",
        icon: "add_to_photos",
        class: "sub-menu",
        authRoles: ['Admin', 'Accountant', 'Assistant', 'DataEntry'],
        hasChildren: false,
      }
    ],
  },
  {
    path: "",
    title: "pushNotifications",
    icon: "mail_outline",
    class: "",
    hasChildren: true,
    subMenuId: "pushNotificationsSubMenu",
    authRoles: ['Admin', 'Accountant', 'Assistant', 'DataEntry'],
    children: [

      {
        path: "/forms/push-notifications",
        title: "sendPushNotification",
        icon: "add_to_photos",
        class: "sub-menu",
        authRoles: ['Admin', 'Accountant', 'Assistant', 'DataEntry'],
        hasChildren: false,
      }
    ],
  }
];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"],
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  loockupsItems: any[];
  sideBarShow = false;
  rightIcon = "position:absolute;left:280px;cursor:pointer";
  leftIcon = "position:absolute;right:280px;cursor:pointer"
  company: string = "Alkayan";
  public authorizeRoles;
  constructor(
    private authService: AuthorizeService,
    public languageService: LanguageService,
    private translate: TranslateService
  ) { }

  ngOnInit() {
    $("#mainBar").hide('slow');
    this.menuItems = ROUTES.filter((menuItem) => menuItem);
    this.loockupsItems = LOOCKUPS_ROUTES.filter((menuItem) => menuItem);
    this.authorizeRoles = this.authService.getLoggedInUsersRole();
  }
  openSideBar() {

  }

  closeSideBar() {
    $("#mainBar").hide('slow');
  }
  public checkRoles(tabRoles: string[]) {
    if (tabRoles && tabRoles.length) {
      if (this.authorizeRoles.find((x) => tabRoles.find((t) => t == x))) {
        return true;
      }
      return false;
    }
    return false;

  }
  isMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  }

}
