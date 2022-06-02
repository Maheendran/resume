import React, { useEffect, useState } from 'react'

export const Forms = () => {
    const[form,setForm]=useState({
        username:"",
        email:"",
        password:"",
        martial:false,
        
    })
    const onChange=(e)=>{
let{name,type,value,checked,files}=e.target
    // console.log(name,type,value,checked)
    if(type==="checkbox"){
      setForm({
        ...form,
        [name]:checked   })
            }
            else  if(type==="file"){
              setForm({
                ...form,
                [name]:files, 
              })
            }
   
else{
    setForm({
...form,
[name]:value,   
 })
    }

    
  } 
  
    useEffect(()=>{
      console.log(form)

    },[form])

    const Chnage=(e)=>{
      e.preventDefault()
console.log(form)
    }
  return (
    <form onSubmit={Chnage} >
        <div>
            <label>name</label>
            <input type="text"
            name="username" 
          
             placeholder='enter name'
              value={form.name}
               onChange={onChange}
           />
        </div>
        <div>
        <label>email</label>
            <input type="email"
            name="email"
            placeholder='enter email' 
             value={form.email}
              onChange={onChange}
               />
        </div>
       <div>
            <label htmlFor="">password</label>
            <input type="password"
            placeholder='enter password' 
            name="password"
            value={form.password}
            onChange={onChange}/>
</div>

         <div>
            <input type="checkbox"
            name="martial"
             checked={form.martial}
              onChange={onChange}
               />
               <label >marital</label>
        </div>

        <div>
            <input type="radio"
            name="gender"
            value="Male"
              onChange={onChange} />
               <label >male</label>
               </div>

               <div>
               <input type="radio"
            name="gender"
            value="Female"
              onChange={onChange}
               />
                <label >female</label>
             
        </div>


        <div>
            <input type="file"
            name="resume"
             file={form.resume}

              onChange={onChange}
               />
               <label >user resume</label>
        </div>

<button>submit</button>
      
    </form>
  )
}
export default Forms
