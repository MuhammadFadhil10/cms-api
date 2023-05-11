import { MongoClient, ServerApiVersion } from "mongodb";
import { config } from "dotenv";

config();

const MONGO_URI = process.env.MONGO_URL as string;

export class Db {
  private client = new MongoClient(MONGO_URI, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });

  public dbClient = this.client.db("cms");

  public async run() {
    try {
      // Connect the client to the server	(optional starting in v4.7)
      await this.client.connect();

      console.log("successfully connected to MongoDB!");
    } catch (error) {
      console.log(MONGO_URI);
      //   console.log("Error connecting to mongodb: ", error);

      throw Error("Error connecting to mongodb: " + error);
    }
  }
}
