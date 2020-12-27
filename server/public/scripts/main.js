// listen server
socketOn('data');
socketOn('user');

// request server
socketEmit();

// create account user
submit();