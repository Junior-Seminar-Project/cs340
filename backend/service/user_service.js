/***********************************/
/*        Make Header Here         */
/*                                 */
/*      Written By: Paul Blair     */
/***********************************/

import save_user from "../repository/user_repo.js";

export default function create_user(db, aUser) {
  if (save_user(db, aUser)) {
    return true;
  }

  return false;
}
