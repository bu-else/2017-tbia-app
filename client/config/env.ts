export class ENV {
  
  public static currentEnvironment: string = "development";
  
  public static development: any = {
    API_URL: "http://localhost:9000"
  };
  public static production: any = {
    API_URL: "http://128.31.25.58:9000"
  };
}