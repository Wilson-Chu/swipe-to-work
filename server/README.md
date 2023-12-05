# Express Server

### Using Local Postgres Database
- Open `psql`
- `CREATE DATABASE demo` (or whatever name you want to use)
- `\i ./server/database/00-schema.sql;`
- `\i ./server/database/01-seeds.sql;` (if you want to load seeds)

## Using Container Database (Advanced)
 - Follow `README.md` in the `postgres` dir of project root

###  Setup Dev Environment
- copy `env.example` to `.env` and edit to match your database credentials
