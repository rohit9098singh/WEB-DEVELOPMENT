//as you can tell by now anyone send request to your backedn
// they can just go to postman and send a request
// how do you ensure that this user has access to a certain resource ?

//=============================== TWO WAYS =============================
//1)Dumb way- ask user to send username and password in all request as headers

/**
 * 2)BETTER WAY- 1) give the user back a token in all requests
                 2) Ask the user to send back the token in all future request
                 3) when the user logs out, ask the user to forget the token(or revoke it from the backend )
 *  */ 