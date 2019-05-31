<template>
  <div class="login-page">
    <div class="bg"></div>
    <form v-on:submit.prevent="handleSubmit">
      <h2>Login</h2>
      <div class="login-div">
        <p>user name/ID</p><input v-model="username" type="text" id="lid"/>
      </div>
      <div class="pass-div">
        <p>password</p><input  v-model="password" type="password" id="lpass"/>
      </div>
      <button id="sub" type="submit">Submit</button>
    </form>
  </div>
</template>

<script>

export default {
  //registering component
  name: 'Login',
  data() {
    return {
      username: '',
      password: ''
    };
  },
  //data sent to template
  props: {
    msg: String
  },

  methods: {
    //form submit event
    handleSubmit() {
      if(this.username=== "test@test.com" && this.password=== "password")
      {
         alert("sucess");
         this.$router.push('dashboard')
      }
      else
      {
         alert(
           'wrong'
         );
      }
    }
    //end
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .bg{
      background-image: url("../assets/bg.jpg");
      background-repeat: no-repeat;
      background-position: center;
      width:100%;
      height:100%;
      position: absolute;
      left:0;
      bottom: 0;
      overflow: hidden;
      z-index: -10;
      margin: 0;
    }
     .login-page{
       margin-top:50px;
       width:50%;
       height:500px;
       padding:50px;
       background-color:white;
       display: inline-block;
       box-shadow: 0px 0px 15px 5px #0000;
       font-size: 20px;
       
     }

    .login-div p,.pass-div p{ 
           width:200px;
           display: inline-block;
           text-align:left;
           
    }
    .login-div input,.pass-div input{ 
           width:60%;
           height:40px;
           margin-left: 20%;
           display: inline-block;
           font-size: 20px;
    }
    .login-div,.pass-div{
      display:flex;
      flex-wrap: nowrap;
      // text-align: left;
    }
    #sub{
      border: 0;
      width:200px;
      height:70px;
      margin-top:60px;
      transition: 0.5s all ease;
      font-size: 25px;
      background-color: green;
      color:white;
    }
    #sub:hover{
      cursor: pointer;
      background-color: black;
      color:white;
    }

    @media screen and (max-width: 1000px) {
  .login-page{
    width:80%;
    height:100%;
    margin-top:10%;
    
  }

}
 @media screen and (max-width: 490px) {
  .login-page{
    width:75%;
    height:100%;
    margin-top:10%;
    .login-div input,.pass-div input{
      width:100px;
     }
  }

}
 @media screen and (max-width: 400px) {
  .login-page{
    width:60%;
    height:100%;
    margin-top:10%;
    .login-div input,.pass-div input{
      width:70px;
     }
  }

}




</style>
/* eslint-disable */