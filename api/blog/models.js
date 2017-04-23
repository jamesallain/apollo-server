import RedditScore from 'reddit-score';

import knex from './connector';


export class Users {
  getAllUsers(){
    //knex.raw('select * from users where id = ?', [1]).then(function(resp) { ... });
    knex.raw('select * from users')
    .then(res() => { return res });
  }
    
  getUser(){
    knex.raw('select * from users where id = ?', [1])
    .then(res() => { return res });
  }

  getUserByRowId(){

  }

  createUser(){

  }

  updateUser(){

  }

  updateUserByRowId(){

  }

  deleteUser(){

  }

}


export class Posts {
  getAllPosts(){

  }

  getPost(){

  }

  getPostByRowId(){

  }

  createPost(){

  }

  updatePost(){

  }

  updatePostByRowId(){

  }

  deletePost(){

  }

}


export class Comments {
  getAllComments(){

  }

  getComment(){

  }

  getCommentByRowId(){

  }

  createComment(){

  }

  updateComment(){

  }

  updateCommentByRowId(){

  }

  deleteComment(){

  }

}
