import Link from "next/link";
const Home = () => {
  return ( 
    <div className=" min-h-screen justify-center items-center flex">
      <Link href="/document/123"> Click here to go to document id 123</Link>
    </div>
   );
}
 
export default Home;