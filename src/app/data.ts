import { User } from './models/User';
import { Attendance } from './models/Attendance';
import { Campus } from './models/Campus';
import { Course } from './models/Course';
import { Group } from './models/Group';
import { Room } from './models/Room';
import { Session } from './models/Session';
import { TimeSlot } from './models/TimeSlot';
import { Term } from './models/Term';
import { Course_Group } from './models/Course_group';
import { Student_Group } from './models/Student_group';

export const sample_user: User[] = [
  {
    id: 0,
    code: 'sangnv',
    email: 'sangnv@gmail.com',
    full_name: 'Nguyen Van Sang',
    image: '',
    password: '123',
    phone_number: '0123456789',
    role: 'LECTURER',
    campus: {
      id: 0,
      name: 'FU_HL',
    },
  },
  {
    id: 1,
    code: 'kienltt',
    email: 'kienltt@gmail.com',
    full_name: 'Le Thi Tu Kien',
    image: '',
    password: '123',
    phone_number: '0123456799',
    role: 'LECTURER',
    campus: {
      id: 0,
      name: 'FU_HL',
    },
  },
  {
    id: 2,
    code: 'hieunm',
    email: 'hieunm@gmail.com',
    full_name: 'Nguyen Minh Hieu',
    image: '',
    password: '123',
    phone_number: '0123456798',
    role: 'STUDENT',
    campus: {
      id: 0,
      name: 'FU_HL',
    },
  },
  {
    id: 3,
    code: 'dathpq',
    email: 'dathpq@gmail.com',
    full_name: 'Hoang Phan Quoc Dat',
    image: '',
    password: '123',
    phone_number: '0123456998',
    role: 'STUDENT',
    campus: {
      id: 0,
      name: 'FU_HL',
    },
  },
  {
    id: 4,
    code: 'vudn',
    email: 'vudn@gmail.com',
    full_name: 'Hoang Nghia Hiep',
    image: '',
    password: '123',
    phone_number: '0223456798',
    role: 'STUDENT',
    campus: {
      id: 0,
      name: 'FU_HL',
    },
  },
  {
    id: 5,
    code: 'vudn',
    email: 'vudn@gmail.com',
    full_name: 'Doan Ngoc Vu',
    image: '',
    password: '123',
    phone_number: '0123457998',
    role: 'STUDENT',
    campus: {
      id: 0,
      name: 'FU_HL',
    },
  },
  {
    id: 6,
    code: 'thangpd',
    email: 'thangp@gmail.com',
    full_name: 'Pham Duc Thang',
    image: '',
    password: '123',
    phone_number: '0333456789',
    role: 'LECTURER',
    campus: {
      id: 0,
      name: 'FU_HL',
    },
  },
  {
    id: 7,
    code: 'tientd',
    email: 'tientd@gmail.com',
    full_name: 'Ta Dinh Tien',
    image: '',
    password: '123',
    phone_number: '0523456799',
    role: 'LECTURER',
    campus: {
      id: 0,
      name: 'FU_HL',
    },
  },
];

export const sample_campus: Campus[] = [
  {
    id: 0,
    name: 'FU_HL',
  },
  {
    id: 1,
    name: 'FU_DN',
  },
  {
    id: 2,
    name: 'FU_CT',
  },
  {
    id: 3,
    name: 'FU_HCM',
  },
];

export const sample_course: Course[] = [
  {
    id: 0,
    code: 'SWP391',
    name: 'Application development project',
  },
  {
    id: 1,
    code: 'SWR302',
    name: 'Software Requirement',
  },
  {
    id: 2,
    code: 'SWT301',
    name: 'Software Testing',
  },
  {
    id: 3,
    code: 'PRN211',
    name: 'Basic Cross-Platform Application Programming With .NET',
  },
];

export const sample_Room: Room[] = [
  {
    id: 0,
    name: 'BE-304',
  },
  {
    id: 1,
    name: 'DE-207',
  },
];

export const sample_TimeSlot: TimeSlot[] = [
  {
    id: 0,
    name: '7:30 - 9:50',
  },
  {
    id: 1,
    name: '10:00 - 12:20',
  },
  {
    id: 2,
    name: '12:50 - 15:10',
  },
  {
    id: 3,
    name: '15:10 - 17:40',
  },
];

export const sample_Group: Group[] = [
  {
    id: 0,
    name: 'SE1722',
  },
  {
    id: 1,
    name: 'AI1704',
  },
];

export const sample_Session: Session[] = [
  {
    id: 0,
    date: new Date('10/09/2023'),
    status: '',
    course: {
      id: 0,
      code: 'SWP391',
      name: 'Application development project',
    },
    group: {
      id: 0,
      name: 'SE1722',
    },
    room: {
      id: 0,
      name: 'BE-304',
    },
    timeslot: {
      id: 0,
      name: '7:30 - 9:50',
    },
    user: {
      id: 0,
      code: 'sangnv',
      email: 'sangnv@gmail.com',
      full_name: 'Nguyen Van Sang',
      image: '',
      password: '123',
      phone_number: '0123456789',
      role: 'LECTURER',
      campus: {
        id: 0,
        name: 'FU_HL',
      },
    },
  },
  {
    id: 1,
    date: new Date('10/09/2023'),
    status: '',
    course: {
      id: 3,
      code: 'PRN211',
      name: 'Basic Cross-Platform Application Programming With .NET',
    },
    group: {
      id: 0,
      name: 'SE1722',
    },
    room: {
      id: 0,
      name: 'BE-304',
    },
    timeslot: {
      id: 1,
      name: '10:00 - 12:20',
    },
    user: {
      id: 7,
      code: 'tientd',
      email: 'tientd@gmail.com',
      full_name: 'Ta Dinh Tien',
      image: '',
      password: '123',
      phone_number: '0523456799',
      role: 'LECTURER',
      campus: {
        id: 0,
        name: 'FU_HL',
      },
    },
  },
  {
    id: 2,
    date: new Date('13/09/2023'),
    status: '',
    course: {
      id: 1,
      code: 'SWR302',
      name: 'Software Requirement',
    },
    group: {
      id: 0,
      name: 'SE1722',
    },
    room: {
      id: 1,
      name: 'DE-207',
    },
    timeslot: {
      id: 2,
      name: '12:50 - 15:10',
    },
    user: {
      id: 1,
      code: 'kienltt',
      email: 'kienltt@gmail.com',
      full_name: 'Le Thi Tu Kien',
      image: '',
      password: '123',
      phone_number: '0123456799',
      role: 'LECTURER',
      campus: {
        id: 0,
        name: 'FU_HL',
      },
    },
  },
  {
    id: 3,
    date: new Date('13/09/2023'),
    status: '',
    course: {
      id: 2,
      code: 'SWT301',
      name: 'Software Testing',
    },
    group: {
      id: 0,
      name: 'SE1722',
    },
    room: {
      id: 0,
      name: 'BE-304',
    },
    timeslot: {
      id: 1,
      name: 'DE-207',
    },
    user: {
      id: 6,
      code: 'thangpd',
      email: 'thangp@gmail.com',
      full_name: 'Pham Duc Thang',
      image: '',
      password: '123',
      phone_number: '0333456789',
      role: 'LECTURER',
      campus: {
        id: 0,
        name: 'FU_HL',
      },
    },
  },
  {
    id: 4,
    date: new Date('10/09/2023'),
    status: '',
    course: {
      id: 0,
      code: 'SWP391',
      name: 'Application development project',
    },
    group: {
      id: 1,
      name: 'AI1704',
    },
    room: {
      id: 0,
      name: 'BE-304',
    },
    timeslot: {
      id: 0,
      name: '7:30 - 9:50',
    },
    user: {
      id: 0,
      code: 'sangnv',
      email: 'sangnv@gmail.com',
      full_name: 'Nguyen Van Sang',
      image: '',
      password: '123',
      phone_number: '0123456789',
      role: 'LECTURER',
      campus: {
        id: 0,
        name: 'FU_HL',
      },
    },
  },
  {
    id: 5,
    date: new Date('10/09/2023'),
    status: '',
    course: {
      id: 3,
      code: 'PRN211',
      name: 'Basic Cross-Platform Application Programming With .NET',
    },
    group: {
      id: 1,
      name: 'AI1704',
    },
    room: {
      id: 0,
      name: 'BE-304',
    },
    timeslot: {
      id: 1,
      name: '10:00 - 12:20',
    },
    user: {
      id: 7,
      code: 'tientd',
      email: 'tientd@gmail.com',
      full_name: 'Ta Dinh Tien',
      image: '',
      password: '123',
      phone_number: '0523456799',
      role: 'LECTURER',
      campus: {
        id: 0,
        name: 'FU_HL',
      },
    },
  },
  {
    id: 6,
    date: new Date('12/09/2023'),
    status: '',
    course: {
      id: 1,
      code: 'SWR302',
      name: 'Software Requirement',
    },
    group: {
      id: 1,
      name: 'AI1704',
    },
    room: {
      id: 1,
      name: 'DE-207',
    },
    timeslot: {
      id: 2,
      name: '12:50 - 15:10',
    },
    user: {
      id: 1,
      code: 'kienltt',
      email: 'kienltt@gmail.com',
      full_name: 'Le Thi Tu Kien',
      image: '',
      password: '123',
      phone_number: '0123456799',
      role: 'LECTURER',
      campus: {
        id: 0,
        name: 'FU_HL',
      },
    },
  },
  {
    id: 7,
    date: new Date('12/09/2023'),
    status: '',
    course: {
      id: 2,
      code: 'SWT301',
      name: 'Software Testing',
    },
    group: {
      id: 1,
      name: 'AI1704',
    },
    room: {
      id: 0,
      name: 'BE-304',
    },
    timeslot: {
      id: 1,
      name: 'DE-207',
    },
    user: {
      id: 6,
      code: 'thangpd',
      email: 'thangp@gmail.com',
      full_name: 'Pham Duc Thang',
      image: '',
      password: '123',
      phone_number: '0333456789',
      role: 'LECTURER',
      campus: {
        id: 0,
        name: 'FU_HL',
      },
    },
  },
];

export const sample_Attendance: Attendance[] = [
  {
    id: 0,
    note: '',
    status: 'Attended',
    user: {
      id: 2,
      code: 'hieunm',
      email: 'hieunm@gmail.com',
      full_name: 'Nguyen Minh Hieu',
      image: '',
      password: '123',
      phone_number: '0123456798',
      role: 'STUDENT',
      campus: {
        id: 0,
        name: 'FU_HL',
      },
    },
    session: {
      id: 0,
      date: new Date('10/09/2023'),
      status: '',
      course: {
        id: 0,
        code: 'SWP391',
        name: 'Application development project',
      },
      group: {
        id: 0,
        name: 'SE1722',
      },
      room: {
        id: 0,
        name: 'BE-304',
      },
      timeslot: {
        id: 0,
        name: '7:30 - 9:50',
      },
      user: {
        id: 0,
        code: 'sangnv',
        email: 'sangnv@gmail.com',
        full_name: 'Nguyen Van Sang',
        image: '',
        password: '123',
        phone_number: '0123456789',
        role: 'LECTURER',
        campus: {
          id: 0,
          name: 'FU_HL',
        },
      },
    },
  },
  {
    id: 1,
    note: 'Sick',
    status: 'Absent',
    user: {
      id: 2,
      code: 'hieunm',
      email: 'hieunm@gmail.com',
      full_name: 'Nguyen Minh Hieu',
      image: '',
      password: '123',
      phone_number: '0123456798',
      role: 'STUDENT',
      campus: {
        id: 0,
        name: 'FU_HL',
      },
    },
    session: {
      id: 1,
      date: new Date('10/09/2023'),
      status: '',
      course: {
        id: 3,
        code: 'PRN211',
        name: 'Basic Cross-Platform Application Programming With .NET',
      },
      group: {
        id: 0,
        name: 'SE1722',
      },
      room: {
        id: 0,
        name: 'BE-304',
      },
      timeslot: {
        id: 1,
        name: '10:00 - 12:20',
      },
      user: {
        id: 7,
        code: 'tientd',
        email: 'tientd@gmail.com',
        full_name: 'Ta Dinh Tien',
        image: '',
        password: '123',
        phone_number: '0523456799',
        role: 'LECTURER',
        campus: {
          id: 0,
          name: 'FU_HL',
        },
      },
    },
  },
  {
    id: 2,
    note: '',
    status: 'Attended',
    user: {
      id: 2,
      code: 'hieunm',
      email: 'hieunm@gmail.com',
      full_name: 'Nguyen Minh Hieu',
      image: '',
      password: '123',
      phone_number: '0123456798',
      role: 'STUDENT',
      campus: {
        id: 0,
        name: 'FU_HL',
      },
    },
    session: {
      id: 2,
      date: new Date('13/09/2023'),
      status: '',
      course: {
        id: 1,
        code: 'SWR302',
        name: 'Software Requirement',
      },
      group: {
        id: 0,
        name: 'SE1722',
      },
      room: {
        id: 1,
        name: 'DE-207',
      },
      timeslot: {
        id: 2,
        name: '12:50 - 15:10',
      },
      user: {
        id: 1,
        code: 'kienltt',
        email: 'kienltt@gmail.com',
        full_name: 'Le Thi Tu Kien',
        image: '',
        password: '123',
        phone_number: '0123456799',
        role: 'LECTURER',
        campus: {
          id: 0,
          name: 'FU_HL',
        },
      },
    },
  },
  {
    id: 3,
    note: '',
    status: 'Future',
    user: {
      id: 2,
      code: 'hieunm',
      email: 'hieunm@gmail.com',
      full_name: 'Nguyen Minh Hieu',
      image: '',
      password: '123',
      phone_number: '0123456798',
      role: 'STUDENT',
      campus: {
        id: 0,
        name: 'FU_HL',
      },
    },
    session: {
      id: 3,
      date: new Date('13/09/2023'),
      status: '',
      course: {
        id: 2,
        code: 'SWT301',
        name: 'Software Testing',
      },
      group: {
        id: 0,
        name: 'SE1722',
      },
      room: {
        id: 0,
        name: 'BE-304',
      },
      timeslot: {
        id: 1,
        name: 'DE-207',
      },
      user: {
        id: 6,
        code: 'thangpd',
        email: 'thangp@gmail.com',
        full_name: 'Pham Duc Thang',
        image: '',
        password: '123',
        phone_number: '0333456789',
        role: 'LECTURER',
        campus: {
          id: 0,
          name: 'FU_HL',
        },
      },
    },
  },
  {
    id: 4,
    note: 'Got flu',
    status: 'Absent',
    user: {
      id: 2,
      code: 'dathpq',
      email: 'dathpq@gmail.com',
      full_name: 'Hoang Phan Quoc Dat',
      image: '',
      password: '123',
      phone_number: '0123456798',
      role: 'STUDENT',
      campus: {
        id: 0,
        name: 'FU_HL',
      },
    },
    session: {
      id: 0,
      date: new Date('10/09/2023'),
      status: '',
      course: {
        id: 0,
        code: 'SWP391',
        name: 'Application development project',
      },
      group: {
        id: 0,
        name: 'SE1722',
      },
      room: {
        id: 0,
        name: 'BE-304',
      },
      timeslot: {
        id: 0,
        name: '7:30 - 9:50',
      },
      user: {
        id: 0,
        code: 'sangnv',
        email: 'sangnv@gmail.com',
        full_name: 'Nguyen Van Sang',
        image: '',
        password: '123',
        phone_number: '0123456789',
        role: 'LECTURER',
        campus: {
          id: 0,
          name: 'FU_HL',
        },
      },
    },
  },
  {
    id: 5,
    note: 'Got flu',
    status: 'Absent',
    user: {
      id: 2,
      code: 'dathpq',
      email: 'dathpq@gmail.com',
      full_name: 'Hoang Phan Quoc Dat',
      image: '',
      password: '123',
      phone_number: '0123456798',
      role: 'STUDENT',
      campus: {
        id: 0,
        name: 'FU_HL',
      },
    },
    session: {
      id: 1,
      date: new Date('10/09/2023'),
      status: '',
      course: {
        id: 3,
        code: 'PRN211',
        name: 'Basic Cross-Platform Application Programming With .NET',
      },
      group: {
        id: 0,
        name: 'SE1722',
      },
      room: {
        id: 0,
        name: 'BE-304',
      },
      timeslot: {
        id: 1,
        name: '10:00 - 12:20',
      },
      user: {
        id: 7,
        code: 'tientd',
        email: 'tientd@gmail.com',
        full_name: 'Ta Dinh Tien',
        image: '',
        password: '123',
        phone_number: '0523456799',
        role: 'LECTURER',
        campus: {
          id: 0,
          name: 'FU_HL',
        },
      },
    },
  },
  {
    id: 6,
    note: '',
    status: 'Attended',
    user: {
      id: 2,
      code: 'dathpq',
      email: 'dathpq@gmail.com',
      full_name: 'Hoang Phan Quoc Dat',
      image: '',
      password: '123',
      phone_number: '0123456798',
      role: 'STUDENT',
      campus: {
        id: 0,
        name: 'FU_HL',
      },
    },
    session: {
      id: 2,
      date: new Date('13/09/2023'),
      status: '',
      course: {
        id: 1,
        code: 'SWR302',
        name: 'Software Requirement',
      },
      group: {
        id: 0,
        name: 'SE1722',
      },
      room: {
        id: 1,
        name: 'DE-207',
      },
      timeslot: {
        id: 2,
        name: '12:50 - 15:10',
      },
      user: {
        id: 1,
        code: 'kienltt',
        email: 'kienltt@gmail.com',
        full_name: 'Le Thi Tu Kien',
        image: '',
        password: '123',
        phone_number: '0123456799',
        role: 'LECTURER',
        campus: {
          id: 0,
          name: 'FU_HL',
        },
      },
    },
  },
  {
    id: 7,
    note: '',
    status: 'Future',
    user: {
      id: 2,
      code: 'dathpq',
      email: 'dathpq@gmail.com',
      full_name: 'Hoang Phan Quoc Dat',
      image: '',
      password: '123',
      phone_number: '0123456798',
      role: 'STUDENT',
      campus: {
        id: 0,
        name: 'FU_HL',
      },
    },
    session: {
      id: 5,
      date: new Date('10/09/2023'),
      status: '',
      course: {
        id: 3,
        code: 'PRN211',
        name: 'Basic Cross-Platform Application Programming With .NET',
      },
      group: {
        id: 1,
        name: 'AI1704',
      },
      room: {
        id: 0,
        name: 'BE-304',
      },
      timeslot: {
        id: 1,
        name: '10:00 - 12:20',
      },
      user: {
        id: 7,
        code: 'tientd',
        email: 'tientd@gmail.com',
        full_name: 'Ta Dinh Tien',
        image: '',
        password: '123',
        phone_number: '0523456799',
        role: 'LECTURER',
        campus: {
          id: 0,
          name: 'FU_HL',
        },
      },
    },
  },
  {
    id: 8,
    note: '',
    status: 'Attended',
    user: {
      id: 4,
      code: 'hiephn',
      email: 'hiephn@gmail.com',
      full_name: 'Hoang Nghia Hiep',
      image: '',
      password: '123',
      phone_number: '0223456798',
      role: 'STUDENT',
      campus: {
        id: 0,
        name: 'FU_HL',
      },
    },
    session: {
      id: 4,
      date: new Date('10/09/2023'),
      status: '',
      course: {
        id: 0,
        code: 'SWP391',
        name: 'Application development project',
      },
      group: {
        id: 1,
        name: 'AI1704',
      },
      room: {
        id: 0,
        name: 'BE-304',
      },
      timeslot: {
        id: 0,
        name: '7:30 - 9:50',
      },
      user: {
        id: 0,
        code: 'sangnv',
        email: 'sangnv@gmail.com',
        full_name: 'Nguyen Van Sang',
        image: '',
        password: '123',
        phone_number: '0123456789',
        role: 'LECTURER',
        campus: {
          id: 0,
          name: 'FU_HL',
        },
      },
    },
  },
  {
    id: 9,
    note: '',
    status: 'Attended',
    user: {
      id: 4,
      code: 'hiephn',
      email: 'hiephn@gmail.com',
      full_name: 'Hoang Nghia Hiep',
      image: '',
      password: '123',
      phone_number: '0223456798',
      role: 'STUDENT',
      campus: {
        id: 0,
        name: 'FU_HL',
      },
    },
    session: {
      id: 5,
      date: new Date('10/09/2023'),
      status: '',
      course: {
        id: 3,
        code: 'PRN211',
        name: 'Basic Cross-Platform Application Programming With .NET',
      },
      group: {
        id: 1,
        name: 'AI1704',
      },
      room: {
        id: 0,
        name: 'BE-304',
      },
      timeslot: {
        id: 1,
        name: '10:00 - 12:20',
      },
      user: {
        id: 7,
        code: 'tientd',
        email: 'tientd@gmail.com',
        full_name: 'Ta Dinh Tien',
        image: '',
        password: '123',
        phone_number: '0523456799',
        role: 'LECTURER',
        campus: {
          id: 0,
          name: 'FU_HL',
        },
      },
    },
  },
  {
    id: 10,
    note: '',
    status: 'Attended',
    user: {
      id: 4,
      code: 'hiephn',
      email: 'hiephn@gmail.com',
      full_name: 'Hoang Nghia Hiep',
      image: '',
      password: '123',
      phone_number: '0223456798',
      role: 'STUDENT',
      campus: {
        id: 0,
        name: 'FU_HL',
      },
    },
    session: {
      id: 6,
      date: new Date('12/09/2023'),
      status: '',
      course: {
        id: 1,
        code: 'SWR302',
        name: 'Software Requirement',
      },
      group: {
        id: 1,
        name: 'AI1704',
      },
      room: {
        id: 1,
        name: 'DE-207',
      },
      timeslot: {
        id: 2,
        name: '12:50 - 15:10',
      },
      user: {
        id: 1,
        code: 'kienltt',
        email: 'kienltt@gmail.com',
        full_name: 'Le Thi Tu Kien',
        image: '',
        password: '123',
        phone_number: '0123456799',
        role: 'LECTURER',
        campus: {
          id: 0,
          name: 'FU_HL',
        },
      },
    },
  },
  {
    id: 11,
    note: '',
    status: 'Attended',
    user: {
      id: 4,
      code: 'hiephn',
      email: 'hiephn@gmail.com',
      full_name: 'Hoang Nghia Hiep',
      image: '',
      password: '123',
      phone_number: '0223456798',
      role: 'STUDENT',
      campus: {
        id: 0,
        name: 'FU_HL',
      },
    },
    session: {
      id: 7,
      date: new Date('12/09/2023'),
      status: '',
      course: {
        id: 2,
        code: 'SWT301',
        name: 'Software Testing',
      },
      group: {
        id: 1,
        name: 'AI1704',
      },
      room: {
        id: 0,
        name: 'BE-304',
      },
      timeslot: {
        id: 1,
        name: 'DE-207',
      },
      user: {
        id: 6,
        code: 'thangpd',
        email: 'thangp@gmail.com',
        full_name: 'Pham Duc Thang',
        image: '',
        password: '123',
        phone_number: '0333456789',
        role: 'LECTURER',
        campus: {
          id: 0,
          name: 'FU_HL',
        },
      },
    },
  },
  {
    id: 12,
    note: '',
    status: 'Attended',
    user: {
      id: 4,
      code: 'vudn',
      email: 'vudn@gmail.com',
      full_name: 'Doan Ngoc Vu',
      image: '',
      password: '123',
      phone_number: '0223456798',
      role: 'STUDENT',
      campus: {
        id: 0,
        name: 'FU_HL',
      },
    },
    session: {
      id: 4,
      date: new Date('10/09/2023'),
      status: '',
      course: {
        id: 0,
        code: 'SWP391',
        name: 'Application development project',
      },
      group: {
        id: 1,
        name: 'AI1704',
      },
      room: {
        id: 0,
        name: 'BE-304',
      },
      timeslot: {
        id: 0,
        name: '7:30 - 9:50',
      },
      user: {
        id: 0,
        code: 'sangnv',
        email: 'sangnv@gmail.com',
        full_name: 'Nguyen Van Sang',
        image: '',
        password: '123',
        phone_number: '0123456789',
        role: 'LECTURER',
        campus: {
          id: 0,
          name: 'FU_HL',
        },
      },
    },
  },
  {
    id: 13,
    note: '',
    status: 'Attended',
    user: {
      id: 4,
      code: 'vudn',
      email: 'vudn@gmail.com',
      full_name: 'Doan Ngoc Vu',
      image: '',
      password: '123',
      phone_number: '0223456798',
      role: 'STUDENT',
      campus: {
        id: 0,
        name: 'FU_HL',
      },
    },
    session: {
      id: 5,
      date: new Date('10/09/2023'),
      status: '',
      course: {
        id: 3,
        code: 'PRN211',
        name: 'Basic Cross-Platform Application Programming With .NET',
      },
      group: {
        id: 1,
        name: 'AI1704',
      },
      room: {
        id: 0,
        name: 'BE-304',
      },
      timeslot: {
        id: 1,
        name: '10:00 - 12:20',
      },
      user: {
        id: 7,
        code: 'tientd',
        email: 'tientd@gmail.com',
        full_name: 'Ta Dinh Tien',
        image: '',
        password: '123',
        phone_number: '0523456799',
        role: 'LECTURER',
        campus: {
          id: 0,
          name: 'FU_HL',
        },
      },
    },
  },
  {
    id: 14,
    note: '',
    status: 'Attended',
    user: {
      id: 4,
      code: 'vudn',
      email: 'vudn@gmail.com',
      full_name: 'Doan Ngoc Vu',
      image: '',
      password: '123',
      phone_number: '0223456798',
      role: 'STUDENT',
      campus: {
        id: 0,
        name: 'FU_HL',
      },
    },
    session: {
      id: 6,
      date: new Date('12/09/2023'),
      status: '',
      course: {
        id: 1,
        code: 'SWR302',
        name: 'Software Requirement',
      },
      group: {
        id: 1,
        name: 'AI1704',
      },
      room: {
        id: 1,
        name: 'DE-207',
      },
      timeslot: {
        id: 2,
        name: '12:50 - 15:10',
      },
      user: {
        id: 1,
        code: 'kienltt',
        email: 'kienltt@gmail.com',
        full_name: 'Le Thi Tu Kien',
        image: '',
        password: '123',
        phone_number: '0123456799',
        role: 'LECTURER',
        campus: {
          id: 0,
          name: 'FU_HL',
        },
      },
    },
  },
  {
    id: 15,
    note: '',
    status: 'Attended',
    user: {
      id: 4,
      code: 'vudn',
      email: 'vudn@gmail.com',
      full_name: 'Doan Ngoc Vu',
      image: '',
      password: '123',
      phone_number: '0223456798',
      role: 'STUDENT',
      campus: {
        id: 0,
        name: 'FU_HL',
      },
    },
    session: {
      id: 7,
      date: new Date('12/09/2023'),
      status: '',
      course: {
        id: 2,
        code: 'SWT301',
        name: 'Software Testing',
      },
      group: {
        id: 1,
        name: 'AI1704',
      },
      room: {
        id: 0,
        name: 'BE-304',
      },
      timeslot: {
        id: 1,
        name: 'DE-207',
      },
      user: {
        id: 6,
        code: 'thangpd',
        email: 'thangp@gmail.com',
        full_name: 'Pham Duc Thang',
        image: '',
        password: '123',
        phone_number: '0333456789',
        role: 'LECTURER',
        campus: {
          id: 0,
          name: 'FU_HL',
        },
      },
    },
  },
];

export const sample_Term: Term[] = [
  {
    id: 0,
    season: 'summer',
    year: '2023',
    campus: {
      id: 0,
      name: 'FU_HL',
    },
  },
  {
    id: 1,
    season: 'fall',
    year: '2023',
    campus: {
      id: 0,
      name: 'FU_HL',
    },
  },
];

export const sample_CourseGroup: Course_Group[] = [
  {
    course: {
      id: 0,
      code: 'SWP391',
      name: 'Application development project',
    },
    group: {
      id: 0,
      name: 'SE1722',
    },
  },
  {
    course: {
      id: 1,
      code: 'SWR302',
      name: 'Software Requirement',
    },
    group: {
      id: 0,
      name: 'SE1722',
    },
  },
  {
    course: {
      id: 2,
      code: 'SWT301',
      name: 'Software Testing',
    },
    group: {
      id: 0,
      name: 'SE1722',
    },
  },
  {
    course: {
      id: 3,
      code: 'PRN211',
      name: 'Basic Cross-Platform Application Programming With .NET',
    },
    group: {
      id: 0,
      name: 'SE1722',
    },
  },
  {
    course: {
      id: 0,
      code: 'SWP391',
      name: 'Application development project',
    },
    group: {
      id: 1,
      name: 'AI1704',
    },
  },
  {
    course: {
      id: 1,
      code: 'SWR302',
      name: 'Software Requirement',
    },
    group: {
      id: 1,
      name: 'AI1704',
    },
  },
  {
    course: {
      id: 2,
      code: 'SWT301',
      name: 'Software Testing',
    },
    group: {
      id: 1,
      name: 'AI1704',
    },
  },
  {
    course: {
      id: 3,
      code: 'PRN211',
      name: 'Basic Cross-Platform Application Programming With .NET',
    },
    group: {
      id: 1,
      name: 'AI1704',
    },
  },
];

export const sample_StudentGroup: Student_Group[] = [
  {
    user: {
      id: 2,
      code: 'hieunm',
      email: 'hieunm@gmail.com',
      full_name: 'Nguyen Minh Hieu',
      image: '',
      password: '123',
      phone_number: '0123456798',
      role: 'STUDENT',
      campus: {
        id: 0,
        name: 'FU_HL',
      },
    },
    group: {
      id: 0,
      name: 'SE1722',
    },
  },
  {
    user: {
      id: 3,
      code: 'dathpq',
      email: 'dathpq@gmail.com',
      full_name: 'Hoang Phan Quoc Dat',
      image: '',
      password: '123',
      phone_number: '0123456998',
      role: 'STUDENT',
      campus: {
        id: 0,
        name: 'FU_HL',
      },
    },
    group: {
      id: 0,
      name: 'SE1722',
    },
  },
  {
    user: {
      id: 4,
      code: 'vudn',
      email: 'vudn@gmail.com',
      full_name: 'Hoang Nghia Hiep',
      image: '',
      password: '123',
      phone_number: '0223456798',
      role: 'STUDENT',
      campus: {
        id: 0,
        name: 'FU_HL',
      },
    },
    group: {
      id: 1,
      name: 'AI1704',
    },
  },
  {
    user: {
      id: 4,
      code: 'vudn',
      email: 'vudn@gmail.com',
      full_name: 'Hoang Nghia Hiep',
      image: '',
      password: '123',
      phone_number: '0223456798',
      role: 'STUDENT',
      campus: {
        id: 0,
        name: 'FU_HL',
      },
    },
    group: {
      id: 1,
      name: 'AI1704',
    },
  },
];
