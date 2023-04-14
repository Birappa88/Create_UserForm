// import React, { useState } from 'react'
// import AddText from './AddText';
// import AddCheckbox from './AddCheckbox';
// import AddSelect from './AddSelect';
// import { Button } from '@mui/material';

// function FormPage(props) {

//     const { addUser } = props

//     const [user, setUser] = useState({ fullname: "", mobile: "", email: "", gender: "", birthdate: "", address: "", position: "", skills: [], city: "", pincode: "" })

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const newuser = {
//             fullname: user.fullname,
//             mobile: user.mobile,
//             email: user.email,
//             gender: user.gender,
//             birthdate: user.birthdate,
//             address: user.address,
//             position: user.position,
//             skills: user.skills,
//             city: user.city,
//             pincode: user.pincode
//         };
//         await addUser(newuser)

//         setUser({ fullname: "", mobile: "", email: "", gender: "", birthdate: "", address: "", position: "", skills: [], city: "", pincode: "" });
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <div className='user'>
//                 <div className='first'>
//                     <AddText user={user} setUser={setUser} name={"fullname"} id={"Full-Name"} label={"Full Name"} />
//                     <AddText user={user} setUser={setUser} name={"mobile"} id={"Mobile-No"} label={"Mobile No"} />
//                     <AddText user={user} setUser={setUser} name={"email"} id={"Email-Id"} label={"Email Id"} />
//                 </div>
//                 <div className='second'>
//                     <AddSelect user={user} setUser={setUser} name={"gender"} id={"Select-Gender"} label={"Select Gender"} />
//                     <AddText user={user} setUser={setUser} name={"birthdate"} id={"Date-of-Birth"} label={"Date of Birth"} />
//                     <AddText user={user} setUser={setUser} name={"address"} id={"Address"} label={"Address"} />
//                 </div>
//                 <div className='third'>
//                     <AddSelect user={user} setUser={setUser} name={"position"} id={"Select-Position"} label={"Select Position"} />
//                     <AddCheckbox user={user} setUser={setUser} name={"skills"} id={"Select-Skills"} label={"Select Skills"} />
//                     <div>
//                         <AddText user={user} setUser={setUser} name={"city"} id={"City"} label={"City"} />
//                         <AddText user={user} setUser={setUser} name={"pincode"} id={"Pincode"} label={"Pincode"} />
//                     </div>
//                 </div>
//             </div>
//             <Button sx={{ ml: 1 }} type="submit">
//                 Submit
//             </Button>
//         </form>
//     )
// }

// export default FormPage