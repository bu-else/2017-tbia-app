import { Injectable } from '@angular/core';
import { ENV } from '../../../config/env';

@Injectable()
export class EnvironmentProvider {

  constructor() {
  }

  /**
   * @function {getApiUrl}
   * @return {string} {api base url}
   */
  public getApiUrl(): string {
    if (ENV.currentEnvironment === "development") {
      return ENV.development.API_URL;
    } else if (ENV.currentEnvironment === "production") {
      return ENV.production.API_URL;
    }
  }
}
