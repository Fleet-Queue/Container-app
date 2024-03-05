
import {Navbar} from '../components/transporter/navbar';
import {Alotted} from '../components/transporter/alotted';
import {Queue} from '../components/transporter/queue';
import {Searchbar} from '../components/transporter/searchbar';

  

export  const Transporter = () => {
   

  return (
    <>
    
{/* Navbar  */}

<Navbar/>

{/* Searchbar */}

<Searchbar/>

{/* Alotted */}

<Alotted/>

{/* In Queue */}

<Queue/>
    </>
  );
}




  