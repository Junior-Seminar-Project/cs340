/***********************************/
/*        Make Header Here         */
/*                                 */
/*      Written By: Paul Blair     */
/***********************************/

export default function save_user(db, aUser) {
  console.log(aUser);

  const stmt = db.prepare(
    "INSERT INTO users (first_name, last_name, username, password, email) VALUES (?, ?, ?, ?, ?) returning *;",
  );
  const row = stmt.get(
    aUser.first_name,
    aUser.last_name,
    aUser.username,
    aUser.password,
    aUser.email,
    (err, row) => {
      console.log(err);
      console.log(row);
    },
  );
  stmt.finalize();

  return true;
}
