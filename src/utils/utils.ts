import cors, { CorsOptions } from "cors";

const corsOptions: CorsOptions = {
  origin: process.env.CLIENT_ORIGIN,
};

const corsHandlers = () => cors(corsOptions);

export default corsHandlers;
