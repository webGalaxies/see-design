import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "./stone.css"
const Stone = () => {
  const [modalimg,setmodalimg]=useState("");
  const nav=useNavigate();
  const metal=[
    {imgsrc:"https://wallpaperaccess.com/full/1412409.jpg"},
    {imgsrc:"https://img2.goodfon.com/wallpaper/nbig/0/92/pebble-stones-colorful.jpg"},
    {imgsrc:"https://frameru.com/wp-content/uploads/2021/06/Vintage-colorful-pebbles-background.jpg"},
    {imgsrc:"https://wallpaperaccess.com/full/1412429.jpg"},
    {imgsrc:"https://i.pinimg.com/originals/9c/e3/f2/9ce3f26969cf588350aa3c20c407b9fd.jpg"},
    {imgsrc:"https://www.alkarty.com/images/product/resized/500-500/160024399016-09-2020white-marble-stones-500x500.jpg"},
    {imgsrc:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxe-dZOJ_vCvTVQpTzSDM8udJv-_kiVHX10g&usqp=CAU"},
    {imgsrc:"https://images.hdqwalls.com/download/stones-landscape-ad-1920x1080.jpg"},
    {imgsrc:"https://c1.wallpaperflare.com/preview/323/678/410/colorful-rocks-stones-background-backdrop-thumbnail.jpg"},
  ]
  const handlemodal=(e)=>{
    const a=e.target.id;
    console.log(e.target.id)

    const b=document.getElementById(a).getAttribute('src');
    setmodalimg(b);
 
  }
  const handledata=()=>{
   const bg=metal.
   console.log(bg)
  }
  const handlefilter=(e)=>{
 const a=e.target.id;
 const b=document.getElementById(a).parentNode.previousSibling.getAttribute('src');
        nav("/dashbord",{state:{id:1,name:b,txt:"your uploaded image"}})
        console.log(b,"moda")
  }
  const handledownload=(e)=>{
    const a=e.target.id;
    const b=document.getElementById(a).parentNode.previousSibling.getAttribute('src');
    console.log(b,"moda")
    setmodalimg(b);
  }
  return (
    <div>
       {/* free trail modal */}

       <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title text-dark" id="exampleModalToggleLabel">Free trail for 7 Days</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body" style={{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center"}}>
        
        <label style={{fontSize:"20px",color:"black"}}>Enter Your Email Id</label>
       <input type="email" placeholder='Enter Your email' style={{width:"80%",height:"40px",color:"black"}} required={true}/>
      </div>
      <div class="modal-footer">
        <button class="btn btn-primary" type='submit' data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" data-bs-dismiss="modal">Submit</button>
      </div>
    </div>
  </div>
</div>
<div class="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        {/* <h5 class="modal-title" id="exampleModalToggleLabel2">Modal 2</h5> */}
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body" style={{textAlign:"center",color:"black"}}>
        Email submit sucessfully !
      </div>
      <div class="modal-footer">
        {/* <button class="btn btn-primary" data-bs-target="#exampleModalToggle" data-bs-toggle="modal" data-bs-dismiss="modal">Back to first</button> */}
      </div>
    </div>
  </div>
</div>






       
       {/* free trail modal end  */}
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{cursor:"pointer",width:"100vw"}}>
  <div class="modal-dialog" style={{maxWidth:"1200px"}}>
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div style={{display:"flex",justifyContent:"end",marginRight:"10px"}}>
      <i class="bi bi-arrow-left " style={{marginRight:"10px"}} onClick={handledata}></i>
      <i class="bi bi-arrow-right"></i>
      </div>
      <div class="modal-body w-100 d-flex">
     <img src={modalimg} alt=""  className='w-50'/>
     <div className='w-50 p-2'>
      <h4>Little girl using VR glasses at home for learning Solar system planets</h4>
      <span>By lithiumphoto</span>
      <div id="icon"  style={{width:"100%",opacity:"1",display:"flex",justifyContent:"start",flexDirection:"column",alignItems:"end"}}>
                            <div style={{display:"flex",zIndex:"999",justifyContent:"space-around",alignItems:"center",background:"white",height:"30px",margin:"10px",borderRadius:"6px"}}>
                           <span style={{width:"150px",display:"flex",justifyContent:"space-around",border:"1px solid",margin:"5px",alignItems:"center",height:"30px",borderRadius:"6px"}}>
                            <i class="bi bi-heart"></i>
                            Save to Library
                            </span>
                            <span style={{width:"180px",display:"flex",justifyContent:"space-around",border:"1px solid",margin:"5px",alignItems:"center",height:"30px",borderRadius:"6px"}}>
                            <i class="bi bi-download"></i>
                            Download Preview
                            </span>
                            <span style={{width:"150px",display:"flex",justifyContent:"space-around",border:"1px solid",margin:"5px",alignItems:"center",height:"30px",borderRadius:"6px"}}>
                            <i class="bi bi-upload"></i>
                          Open in App
                            </span>
                  </div>
                  <div style={{marginRight:"auto"}}>
                  <div style={{display:"flex",justifyContent:"start"}}>
                    <input type="radio" className='m-2'/>
                    <span className='m-2'>
                    Standard license (Free with trial) 
                    </span>
                  </div>
                  <div style={{display:"flex",justifyContent:"start"}}>
                    <input type="radio" className='m-2'/>
                    <span className='m-2'>
                    Extended license (₹6,386.16) 


                    </span>
                  </div>
                </div>
                  <span data-bs-target="#exampleModalToggle" data-bs-toggle="modal" data-bs-dismiss="modal" style={{background:"royalblue",height:"40px",color:"#fff",display:"flex",justifyContent:"space-around",alignItems:"center",width:"40%",borderRadius:"12px",margin:"10px",marginRight:"auto"}}>
                  <i class="bi bi-cart"></i>
                    free width trial</span>
                </div>
                
     </div>
      </div>
      
<table style={{width:"60%",margin:"10px"}}>
  <tr>
    <th>DIMENSIONS</th>
    <th>FILE TYPE</th>
    <th>CATEGORY</th>
    <th>
LICENSE TYPE</th>
  </tr>
  <tr>
    <td>6000 x 4000px</td>
    <td>JPEG</td>
    <td>People</td>
    <td>Standard or Extended</td>
  </tr>
  </table>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

<div class="form-outline mb-4 mt-4 d-flex m-4" style={{justifyContent:"center",alignItems:"center",height:"50px"}}>
<select name="cars"  style={{width:"100px",height:"100%",outline:"none"}}>
    <option value="volvo">All</option>
    <option value="saab">Stone</option>
    <option value="opel">Metal</option>
    <option value="audi">Wood</option>
  </select>
  <input type="search" class="form-control" id="datatable-search-input" style={{height:"100%"}} />
  <label class="form-label mb-0" for="datatable-sea" style={{width:"100px",display:"flex",justifyContent:"center",alignItems:"center",background:"royalblue",height:"100%"}}>
  <select name="cars"  style={{width:"200px",height:"100%",outline:"none"}}>
    <option value="volvo">Library</option>
    <option value="saab">View All</option>
    <option value="opel">My Libraries</option>
  </select>
  </label>
</div>

        <div style={{width:"100%",height:"300px",display:"flex",alignItems:"center",justifyContent:"center",backgroundPosition:"center",backgroundImage:`url("https://www.teahub.io/photos/full/7-71561_beautiful-colorful-stone-wallpaper-backgrounds-wallpapers-stone-in.jpg")`}}>
            <h2 style={{color:"#fff",fontSize:"50px",textAlign:"center",fontFamily:"fantasy"}}>Stone Gallery</h2>
        </div>


        <div class="row mt-4">
          {metal.map((data,index)=>(
    <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
    <div id='imagicon' style={{position:"relative",cursor:"pointer"}}>
    {/* <button type="button" class="btn btn-primary"> */}
    <img id={index+"img"}
      src={data.imgsrc}
      
      class="w-100  shadow-1-strong rounded mb-4"
      alt="Boat on Calm Water"
      onClick={(e)=>handlemodal(e)}
      data-bs-toggle="modal" data-bs-target="#exampleModal"
      style={{height:"250px"}}
    />
    {/* </button> */}
    <div id="icons" style={{display:"flex",justifyContent:"space-around",alignItems:"center",borderRadius:"3px",position:"absolute",top:"10px",right:"10px",width:"100px",background:"#fff",height:"30px"}}>
    <i class="fas fa-heart"></i>
    <i class="fas fa-download" id={index+"down"} data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={(data)=>handledownload(data)}></i>
    <i class="fas fa-camera" id={index} onClick={(data)=>handlefilter(data)}></i>
    </div>
    <span id="icons" data-bs-toggle="modal" href="#exampleModalToggle"  style={{display:"flex",justifyContent:"space-around",alignItems:"center",borderRadius:"3px",position:"absolute",bottom:"40px",right:"10px",width:"150px",background:"royalblue",color:"#fff",height:"30px"}}>
    <i class="bi bi-cart"></i>
      free with trial</span>
    </div>


  </div>
          ))}
    
          </div>










        {/* <!-- Gallery --> */}

{/* <!-- Gallery --> */}
    </div>
  )
}

export default Stone