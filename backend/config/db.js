import {neon} from "@neondatabase/serverless"
import "dotenv/config"

//CREATE a sql connection using the db url

export const sql = neon(process.env.DATABASE_URL)