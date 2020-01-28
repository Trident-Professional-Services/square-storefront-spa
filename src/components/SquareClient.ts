import { ApiClient } from "square-connect"
import config from "../config.json"

export default class SquareClient {
  public static DefaultClient: ApiClient = ApiClient.instance
  public static Initialize(): void {
    if (config.is_sandbox) {
      SquareClient.DefaultClient.basePath =
        "https://connect.squareupsandbox.com"
    }
    const oauth2 = SquareClient.DefaultClient.authentications.oauth2
    // Set access token
    oauth2.accessToken = config.access_token;
  }
}
