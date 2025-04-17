import database from "infra/database.js";

async function status(request, response) {
  const result = await database.query("SELECT 1+ 1 as SUM;");
  console.log(result.rows);

  response.status(200).json({
    status: "ok",
    message: "API is up and running",
    result: result.rows,
  });
}

export default status;
