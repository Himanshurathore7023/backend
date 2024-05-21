class ApiError extends Error{
       constructor(
              statesCode,
              message="Something went wrong",
              error=[],
              stack=""
       ){
              super(message)
              this.statesCode=statesCode;
              this.data=null;
              this.message=message;
              this.success=false;
              this.errors=this.errors;


              if(stack){
                     this.stack=stack
              }
              else{
                     Error.captureStackTrace(this,this.constraction)            ///(targetobject,constractoropt)
              }



       }
}

export {ApiError}