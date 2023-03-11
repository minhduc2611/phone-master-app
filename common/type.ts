export type Project = {
  id: string;
  name: string;
  inProgress: boolean;
  type: ProjectTypes;
  createdDate?: string,
  tasks?: Task[]
};

export enum ProjectTypes {
  default = "--select--",
  DigitalCourseAsset = "Digital Course Asset",
  SocialMediaBrandingAsset = "Social Media Branding Asset",
  AuthorisedAsset = "Authorised Asset",
}

export type Task = {
    id: string;
    name: string;
    is_finished: boolean;
    due_date: string;
  };