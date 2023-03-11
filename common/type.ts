export type Project = {
  id: String;
  name: String;
  inProgress: boolean;
  type: ProjectTypes;
  createdDate?: String,
  tasks?: Task[]
};

export enum ProjectTypes {
  default = "--select--",
  DigitalCourseAsset = "Digital Course Asset",
  SocialMediaBrandingAsset = "Social Media Branding Asset",
  AuthorisedAsset = "Authorised Asset",
}

export type Task = {
    id: number;
    name: String;
    is_finished: boolean;
    due_date: ProjectTypes;
  };