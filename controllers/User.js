const User = require("../models").User

module.exports = {

    //=== GET ALL USERS
    getUsers: async function(){
      try {
          return await User.findAll()
      } catch (e) {
          throw new Error(e)
      }
    },

    getUser: async function(id){
        try {
            return await User.findOne({ where : { id:id } })
        } catch (e) {
            throw new Error(e)
        }
    },

    findUserByEmail: async function (email) {
        try {
            return await User.findOne({ where : { email:email } })

        } catch (err) {
            throw new Error(err);
        }
    },

    findUserByToken: async function (token) {
        try {
            return await User.findOne({ where : { token:token } })

        } catch (err) {
            throw new Error(err);
        }
    },

    create: async function (data){
        try {
            return await User.create(data)

        } catch (err) {
            throw new Error(err)
        }
    }
}