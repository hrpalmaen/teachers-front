export interface IActivityForm {
  id?: string;
  activity: string;
  percentage: number;
}

export interface IWorkplan extends IActivityForm {
  activities: IActivityForm[];
}
