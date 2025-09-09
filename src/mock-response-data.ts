export const mockReponse = {
  login: {
    message: 'Login successfully',
    data: {
      tokenType: 'Bearer',
      deviceId: 'b98e49eb-8741-4802-9293-d1efe4d32800',
      accessToken:
        'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJVc2VybmFtZTogc2F5bWVuZ2hvdXIiLCJpYXQiOjE3MzU5OTA1ODIsImV4cCI6MTgyMjM5MDU4Mn0.hZUT1l6cQ_JUCwcYfTdklxYOoZic4DJINF4EMw9YhdU',
      refreshToken:
        'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJVc2VybmFtZTogc2F5bWVuZ2hvdXIiLCJpYXQiOjE3MzU5OTA1ODIsImV4cCI6MjM0MDc5MDU4Mn0.e10JBlZ_vloZzcYKAvusphor9t5MTdGUDcWt_yd2ISs',
      expiresAt: '2027-10-01T18:36:22.103718'
    }
  },
  me: {
    message: 'User profile retrieved successfully',
    data: {
      user: {
        id: 1,
        createdDate: '2025-01-03T23:26:50.830738',
        createdBy: 'SYSTEM',
        modifiedDate: null,
        modifiedBy: null,
        firstName: 'Super',
        lastName: 'Admin',
        firstNameKh: 'Super',
        lastNameKh: 'Admin',
        username: 'superadmin',
        fullName: 'Super Admin',
        fullNameKh: 'Super Admin',
        displayName: 'Super Admin',
        email: 'testing@gmail.com',
        profileImageUrl: null,
        status: 'ACTIVE'
      },
      authorities: [
        'role:create',
        'role:edit',
        'role:view_details',
        'role:view_listing',
        'user:create',
        'user:edit',
        'user:view_details',
        'user:view_listing'
      ]
    }
  },
  getUsers: {
    data: [
      {
        id: 1,
        createdDate: '2025-01-03T23:26:50.830738',
        createdBy: 'SYSTEM',
        modifiedDate: null,
        modifiedBy: null,
        username: 'testing',
        firstName: 'Super',
        lastName: 'Admin',
        firstNameKh: 'Super',
        lastNameKh: 'Admin',
        fullName: 'Super Admin',
        fullNameKh: 'Super Admin',
        displayName: 'Super Admin',
        phoneNumber: null,
        email: 'testing@gmail.com',
        profileImageUrl: null,
        status: 'ACTIVE',
        branch: {
          id: 1,
          code: '000',
          nameEn: 'PNH - Head Office',
          nameKh: 'PNH - ការិយាល័យកណ្តាល'
        },
        roles: [
          {
            id: 1,
            nameEn: 'Super Admin',
            nameKh: 'អ្នកគ្រប់គ្រងជាន់ខ្ពស់'
          }
        ],
        departmentId: null,
        positionId: null
      },
      {
        id: 2,
        createdDate: '2025-01-03T23:34:10.583483',
        createdBy: 'testing',
        modifiedDate: null,
        modifiedBy: null,
        username: 'testing',
        firstName: 'testing',
        lastName: 'testing',
        firstNameKh: null,
        lastNameKh: null,
        fullName: 'testing testing',
        fullNameKh: null,
        displayName: 'testing testing',
        phoneNumber: null,
        email: null,
        profileImageUrl: null,
        status: 'ACTIVE',
        branch: {
          id: 1,
          code: '000',
          nameEn: 'PNH - Head Office',
          nameKh: 'PNH - ការិយាល័យកណ្តាល'
        },
        roles: [
          {
            id: 1,
            nameEn: 'Super Admin',
            nameKh: 'អ្នកគ្រប់គ្រងជាន់ខ្ពស់'
          }
        ],
        departmentId: null,
        positionId: null
      }
    ],
    page: 1,
    size: 20,
    totalElements: 2,
    totalPages: 1,
    first: true,
    last: true
  },
  getUserById: {
    message: 'User details retrieved successfully',
    data: {
      id: 1,
      createdDate: '2025-01-03T23:26:50.830738',
      createdBy: 'SYSTEM',
      modifiedDate: null,
      modifiedBy: null,
      username: 'saymenghour',
      firstName: 'Menghour',
      lastName: 'Say',
      firstNameKh: 'Menghour',
      lastNameKh: 'Say',
      fullName: 'Say Menghour',
      fullNameKh: 'Say Menghour',
      displayName: 'Menghour Say',
      phoneNumber: null,
      email: 'saymenghour@gmail.com',
      profileImageUrl: null,
      status: 'ACTIVE',
      branch: {
        id: 1,
        code: '000',
        nameEn: 'PNH - Head Office',
        nameKh: 'PNH - ការិយាល័យកណ្តាល'
      },
      roles: [
        {
          id: 1,
          nameEn: 'Super Admin',
          nameKh: 'អ្នកគ្រប់គ្រងជាន់ខ្ពស់'
        }
      ],
      departmentId: null,
      positionId: null
    }
  },
  getRoles: {
    data: [
      {
        id: 1,
        nameEn: 'Super Admin',
        nameKh: 'អ្នកគ្រប់គ្រងជាន់ខ្ពស់',
        type: 'SUPER_ADMIN',
        description: null,
        status: 'ACTIVE',
        permissions: null,
        createdDate: null,
        createdBy: null,
        modifiedDate: null,
        modifiedBy: null
      }
    ],
    page: 1,
    size: 20,
    totalElements: 1,
    totalPages: 1,
    first: true,
    last: true
  },
  getRoleById: {
    message: 'Role retrieved successfully',
    data: {
      id: 1,
      nameEn: 'Super Admin',
      nameKh: 'អ្នកគ្រប់គ្រងជាន់ខ្ពស់',
      type: 'SUPER_ADMIN',
      description: null,
      status: 'ACTIVE',
      permissions: [
        {
          id: 7,
          code: 'role:create',
          nameEn: 'Create role',
          nameKh: 'បង្កើតតួនាទី'
        },
        {
          id: 8,
          code: 'role:edit',
          nameEn: 'Update role',
          nameKh: 'ធ្វើបច្ចុប្បន្នភាពតួនាទី'
        },
        {
          id: 2,
          code: 'user:view_details',
          nameEn: 'View user details',
          nameKh: 'មើលព័ត៌មានលម្អិតអ្នកប្រើប្រាស់'
        },
        {
          id: 3,
          code: 'user:create',
          nameEn: 'Create user',
          nameKh: 'បង្កើតអ្នកប្រើប្រាស់'
        },
        {
          id: 1,
          code: 'user:view_listing',
          nameEn: 'View user listing',
          nameKh: 'មើលបញ្ជីអ្នកប្រើប្រាស់'
        },
        {
          id: 4,
          code: 'user:edit',
          nameEn: 'Update user',
          nameKh: 'ធ្វើបច្ចុប្បន្នភាពអ្នកប្រើប្រាស់'
        },
        {
          id: 6,
          code: 'role:view_details',
          nameEn: 'View role details',
          nameKh: 'មើលព័ត៌មានលម្អិតអំពីតួនាទី'
        },
        {
          id: 5,
          code: 'role:view_listing',
          nameEn: 'View role listing',
          nameKh: 'មើលបញ្ជីតួនាទី'
        }
      ],
      createdDate: null,
      createdBy: null,
      modifiedDate: null,
      modifiedBy: null
    }
  },
  getRoleAutoComplete: {
    data: [
      {
        id: 1,
        nameEn: 'Super Admin',
        nameKh: 'Super Admin'
      }
    ]
  },
  getResourceWithPermission: {
    message: 'Permission retrieve successfully',
    data: [
      {
        id: 1,
        code: 'USER',
        nameEn: 'User',
        nameKh: 'អ្នកប្រើប្រាស់',
        permissions: [
          {
            id: 2,
            code: 'user:view_details',
            nameEn: 'View user details',
            nameKh: 'មើលព័ត៌មានលម្អិតអ្នកប្រើប្រាស់'
          },
          {
            id: 1,
            code: 'user:view_listing',
            nameEn: 'View user listing',
            nameKh: 'មើលបញ្ជីអ្នកប្រើប្រាស់'
          },
          {
            id: 4,
            code: 'user:edit',
            nameEn: 'Update user',
            nameKh: 'ធ្វើបច្ចុប្បន្នភាពអ្នកប្រើប្រាស់'
          },
          {
            id: 3,
            code: 'user:create',
            nameEn: 'Create user',
            nameKh: 'បង្កើតអ្នកប្រើប្រាស់'
          }
        ]
      },
      {
        id: 2,
        code: 'ROLE',
        nameEn: 'Role',
        nameKh: 'តួនាទី',
        permissions: [
          {
            id: 6,
            code: 'role:view_details',
            nameEn: 'View role details',
            nameKh: 'មើលព័ត៌មានលម្អិតអំពីតួនាទី'
          },
          {
            id: 7,
            code: 'role:create',
            nameEn: 'Create role',
            nameKh: 'បង្កើតតួនាទី'
          },
          {
            id: 8,
            code: 'role:edit',
            nameEn: 'Update role',
            nameKh: 'ធ្វើបច្ចុប្បន្នភាពតួនាទី'
          },
          {
            id: 5,
            code: 'role:view_listing',
            nameEn: 'View role listing',
            nameKh: 'មើលបញ្ជីតួនាទី'
          }
        ]
      }
    ]
  },
  getBranchAutoComplete: {
    data: [
      {
        id: 1,
        code: '000',
        nameEn: 'PNH - Head Office',
        nameKh: 'PNH - Head Office'
      }
    ]
  },
  getMasterDataRoleType: {
    ROLE_TYPE: {
      data: [
        {
          id: 1,
          value: 'SUPER_ADMIN',
          name: 'Super Admin',
          type: 'ROLE_TYPE',
          sequence: 1,
          description: null,
          isDefault: true,
          status: 'A',
          nameEn: null,
          nameKh: null
        }
      ]
    }
  }
};
