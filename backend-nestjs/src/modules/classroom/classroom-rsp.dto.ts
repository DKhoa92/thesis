export class SchoolYearShortRsp {
  id: number;
  code: string;
  name: string;
}

export class ClassroomRspDto {
  id: number;
  schoolYear: SchoolYearShortRsp;
  grade: string;
  section: string;
  createdAt: Date;
  lastUpdatedAt: Date;
}
