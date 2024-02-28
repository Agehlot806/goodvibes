import axios from 'axios';
import React, { useState } from 'react';

function ApiPractice() {
  const [contact_person_name, setContact_person_name] = useState("");
  const [contact_person_phone, setContact_person_phone] = useState("");
  const [contact_person_email, setContact_person_email] = useState("");
  const [account_first_name, setAccount_first_name] = useState("");
  const [account_last_name, setAccount_Last_name] = useState("");
  const [zone_id, setZone_id] = useState("");
  const [account_email, setAccount_email] = useState("");
  const [account_phone, setAccount_phone] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirm_password] = useState("");
  const [company_name, setCompany_name] = useState("");
  const [company_phone, setCompany_phone] = useState("");
  const [company_address, setCompany_address] = useState("");
  const [company_email, setCompany_email] = useState("");
  const [logo, setLogo] = useState(null);
  const [identification_type, setIdentification_type] = useState("");
  const [identification_number, setIdentification_number] = useState("");
  const [identity_image, setIdentity_image] = useState(null);
  const [longitude, setLongitude] = useState("");
  const [latitude, setLatitude] = useState("");

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted!");

      const formData = new FormData();
      formData.append("contact_person_name", contact_person_name);
      formData.append("contact_person_phone", contact_person_phone);
      formData.append("contact_person_email", contact_person_email);
      formData.append("account_first_name", account_first_name);
      formData.append("account_last_name", account_last_name);
      formData.append("zone_id", zone_id);
      formData.append("account_email", account_email);
      formData.append("account_phone", account_phone);
      formData.append("password", password);
      formData.append("confirm_password", confirm_password);
      formData.append("company_name", company_name);
      formData.append("company_phone", company_phone);
      formData.append("company_address", company_address);
      formData.append("company_email", company_email);
      if (logo) formData.append("logo", logo);
      formData.append("identification_type", identification_type);
      formData.append("identification_number", identification_number);
      if (identity_image) formData.append("identity_image", identity_image);
      formData.append("longitude", longitude);
      formData.append("latitude", latitude);

console.log("FormData:", formData);

      axios.post(`https://goodvibes.digiatto.online/api/v1/provider/auth/registration`,formData,{

      }).then((res)=>{
        console.log("res",res);
      }).catch((error0)=>{
        console.log(error0);
      })
        
    }


  return (
    <div>
      <h3>This is my practice page</h3>

 <form onSubmit={handleSubmit}>

 <input type="text" name="contact_person_name" value={contact_person_name} placeholder='contact_person_name' 
 onChange={(e)=>setContact_person_name(e.target.value)}  />
 <br/>
 <input type="tel" name="contact_person_phone" value={contact_person_phone}
  placeholder='contact_person_phone' onChange={(e)=> setContact_person_phone(e.target.value)}  />
 <br/>
 <input type="text" name="contact_person_email" value={contact_person_email}
  placeholder='contact_person_email' onChange={(e)=> setContact_person_email(e.target.value)}  />
 <br/>
 <input type="text" name="account_first_name" value={account_first_name}
  placeholder='account_first_name' onChange={(e)=>setAccount_first_name(e.target.value)}  />
 <br/>
 <input type="text" name="account_last_name" value={account_last_name}
  placeholder='account_last_name' onChange={(e)=>setAccount_Last_name(e.target.value)}  />
 <br/>
 <input type="text" name="zone_id" value={zone_id}
  placeholder='zone_id' onChange={(e)=>setZone_id(e.target.value)}  />
 <br/>
 <input type="text" name="account_email" value={account_email}
  placeholder='account_email' onChange={(e)=>setAccount_email(e.target.value)}  />
 <br/>
 <input type="text" name="account_phone" value={account_phone}
  placeholder='account_phone' onChange={(e)=>setAccount_phone(e.target.value)}  />
 <br/>
 <input type="text" name="password" value={password} 
 placeholder='password' onChange={(e)=>setPassword(e.target.value)}  />
 <br/>
 <input type="text" name="confirm_password" value={confirm_password} 
 placeholder='confirm_password' onChange={(e)=> setConfirm_password(e.target.value)}  />
 <br/>
 <input type="text" name="company_name" value={company_name} 
 placeholder='company_name' onChange={(e) => setCompany_name(e.target.value)} />
 <br/>
 
 <input type="text" name="company_phone" value={company_phone} 
 placeholder='company_phone' onChange={(e) => setCompany_phone(e.target.value)}  />
 <br/>
 
 <input type="text" name="company_address" value={company_address} 
 placeholder='company_address' onChange={(e)=>setCompany_address(e.target.value)}  />
 <br/>
 <input type="text" name="company_email" value={company_email} 
 placeholder='company_email' onChange={(e)=>setCompany_email(e.target.value)}  />
 <br/>
 <input type="file" name="logo"  onChange={(e)=>setLogo(e.target.files[0])}  />
 <br/>
 
 <input type="text" name="identification_type" value={identification_type}
  placeholder='identification_type' onChange={(e)=>setIdentification_type(e.target.value)}  />
 <br/>
 <input type="number" name="identification_number" value={identification_number} 
 placeholder='identification_number' onChange={(e)=>setIdentification_number(e.target.value)}  />
 <br/>
 <input type="file" name="identity_image" onChange={(e)=>setIdentity_image(e.target.files[0])} />
 <br/>
 <input type="number" name="longitude" value={longitude}
  placeholder='longitude' onChange={(e)=>setLongitude(e.target.value)}  />
 <br/>
 <input type="number" name="latitude" value={latitude} 
 placeholder='latitude' onChange={(e)=>setLatitude(e.target.value)}  />
 <br/>

 <button type="submit">Submit</button>
 </form>
      
    <div>
     
    </div>

    </div>
  );
}
export default ApiPractice;